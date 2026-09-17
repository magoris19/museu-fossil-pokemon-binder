import fs from 'node:fs/promises';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = vm.createContext({ window: {} });
const dataPath = path.join(root, 'dist/liga-data.js');
const source = await fs.readFile(dataPath, 'utf8');
for (const file of ['cards-data.js', 'liga-data.js']) {
  vm.runInContext(await fs.readFile(path.join(root, 'dist', file), 'utf8'), context);
}
const { FOSSIL_CARDS: cards, LIGA_DATA: data } = context.window;
const api = 'https://cyndaq.fun/api/v1/catalog/editions';
async function getJson(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`${response.status}: ${url}`);
  const result = await response.json();
  if (!Array.isArray(result)) throw new Error(`Resposta inesperada: ${url}`);
  return result;
}
const editions = await getJson(api);
// HP is a different, 52-card edition. The international EX set uses EHP, /110.
const holon = data.editions.find(e => e.tcgdex_set_id === 'ex13');
const correctHolon = editions.find(e => e.code === 'EHP' && String(e.liga_id) === '46');
if (!correctHolon) throw new Error('Edição EX Holon Phantoms não encontrada.');
Object.assign(holon, {
  liga_ed: correctHolon.code, liga_edid: Number(correctHolon.liga_id),
  source_url: correctHolon.liga_url, source_api_url: api,
  source_note: 'EX Holon Phantoms internacional: EHP, edid 46, numeração /110. HP, edid 531, corresponde a outra edição e não deve ser usada para ex13.'
});
const normNumber = s => String(s).toUpperCase().replace(/(^|[A-Z])0+(?=\d)/g, '$1');
const normName = s => String(s).normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/δ/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
function identity(url) {
  const parsed = new URL(url);
  if (parsed.hostname !== 'www.ligapokemon.com.br') return null;
  const label = parsed.searchParams.get('card') || '';
  const match = label.match(/^(.*?)\s*\(([^()]*)\)$/);
  return match && { name: match[1], number: match[2].split('/')[0], total: match[2].split('/')[1], collector: match[2], code: parsed.searchParams.get('ed'), ligaNum: parsed.searchParams.get('num') };
}
const priorCount = Object.values(data.priceReferences).filter(p => p.min_price > 0).length;
const targetSets = new Set(cards.filter(c => !data.priceReferences[c.id] || c.id.startsWith('ex13-')).map(c => c.set));
data.priceAvailability ||= {};
const report = [];
for (const set of targetSets) {
  const local = data.editions.find(e => e.tcgdex_set === set);
  const matches = editions.filter(e => e.code === local?.liga_ed && String(e.liga_id) === String(local?.liga_edid));
  const edition = matches.length === 1 ? matches[0] : null;
  const url = edition ? `${api}/${edition.id}/cards?limit=2500` : null;
  const rows = edition ? await getJson(url) : [];
  if (edition && rows.length < edition.card_count) throw new Error(`Catálogo incompleto: ${set}`);
  for (const card of cards.filter(c => c.set === set)) {
    const print = data.prints[card.id];
    const candidates = rows.filter(r => {
      const i = identity(r.liga_url);
      return i && i.code === local.liga_ed && normNumber(i.number) === normNumber(card.number)
        && normName(i.name) === normName(card.name)
        && (!print?.collector_number?.includes('/') || normNumber(i.total) === normNumber(print.collector_number.split('/')[1]));
    });
    const row = candidates.length === 1 ? candidates[0] : null;
    const status = !edition ? 'edition_unavailable' : !row ? 'unmatched' : !(row.min_price_cents > 0) ? 'price_unavailable' : 'available';
    data.priceAvailability[card.id] = { status, checked_at: new Date().toISOString(), source_api_url: url };
    if (row) {
      const i = identity(row.liga_url);
      data.prints[card.id] = { ...print, card_name: i.name, edition: set, collector_number: i.collector, liga_num: i.ligaNum, validation_status: 'validated', expected_url: row.liga_url, source_api_url: url, source_note: 'Correspondência confirmada por edição Liga, nome e número de colecionador no catálogo CyndaQ.' };
    }
    if (status === 'available') {
      const cents = row.min_price_cents;
      if (!Number.isSafeInteger(cents)) throw new Error(`Preço inválido: ${card.id}`);
      data.priceReferences[card.id] = {
        source: 'cyndaq_ligapokemon_snapshot', source_api_url: url,
        cyndaq_card_id: row.id, cyndaq_edition_id: edition.id, liga_url: row.liga_url,
        min_price_cents: cents, min_price: cents / 100,
        avg_price_cents: row.avg_price_cents, avg_price: row.avg_price_cents == null ? null : row.avg_price_cents / 100,
        max_price_cents: row.max_price_cents, max_price: row.max_price_cents == null ? null : row.max_price_cents / 100,
        observed_at: row.price_observed_at, match_key: `${edition.code} #${row.number}`,
        source_note: 'Preço anunciado observado pelo CyndaQ na LigaPokemon; condição, idioma e acabamento podem variar. Não é cotação em tempo real.'
      };
    } else if (!String(data.priceReferences[card.id]?.source || '').startsWith('ligapokemon_official')) {
      delete data.priceReferences[card.id];
    }
    report.push({ id: card.id, name: card.name, set, status, min_price: data.priceReferences[card.id]?.min_price ?? null });
  }
}
// Refuse unrelated-card references, including existing data left outside this refresh.
for (const card of cards) {
  const ref = data.priceReferences[card.id];
  if (!ref) continue;
  const i = identity(ref.liga_url);
  if (!i || normName(i.name) !== normName(card.name) || normNumber(i.number) !== normNumber(card.number) || !(ref.min_price > 0)) throw new Error(`Referência incompatível: ${card.id}`);
}
data.pricesCheckedAt = new Date().toISOString();
const start = source.indexOf('  window.LIGA_DATA = ');
const end = source.indexOf('\n  window.LIGA_URLS', start);
await fs.writeFile(dataPath, source.slice(0, start) + '  window.LIGA_DATA = ' + JSON.stringify(data, null, 4).replace(/\n/g, '\n  ') + ';\n' + source.slice(end));
console.log(JSON.stringify({ before: priorCount, after: Object.keys(data.priceReferences).length, missing: cards.filter(c => !data.priceReferences[c.id]).map(c => ({ id: c.id, name: c.name, set: c.set, status: data.priceAvailability[c.id]?.status })), refreshed: report.length }, null, 2));
