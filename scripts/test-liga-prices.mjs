import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
const context = vm.createContext({ window: {}, URL, Intl, localStorage: { getItem: () => null }, document: { getElementById: () => null } });
for (const file of ['cards-data.js', 'liga-data.js']) vm.runInContext(await fs.readFile(new URL('../dist/' + file, import.meta.url), 'utf8'), context);
const app = await fs.readFile(new URL('../dist/app.js', import.meta.url), 'utf8');
vm.runInContext(app.slice(0, app.indexOf('function saveState()')), context);
const evaluate = code => vm.runInContext(code, context);
assert.equal(evaluate('cards.length'), 303);
assert.equal(evaluate('cards.filter(c => ligaPriceFor(c) != null).length'), 288);
const normalize = value => value.normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/δ/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
for (const card of context.window.FOSSIL_CARDS) {
  const ref = context.window.LIGA_DATA.priceReferences[card.id];
  if (!ref) continue;
  assert.ok(ref.min_price > 0, card.id);
  assert.equal(Math.round(ref.min_price * 100), ref.min_price_cents, card.id);
  const label = new URL(ref.liga_url).searchParams.get('card');
  assert.equal(normalize(label.replace(/\s*\([^)]*\)\s*$/, '')), normalize(card.name), card.id);
}
for (const id of ['ex13-13', 'ex13-9', 'ex13-35', 'ex13-2', 'ex13-1']) {
  assert.equal(new URL(context.window.LIGA_DATA.priceReferences[id].liga_url).searchParams.get('ed'), 'EHP');
}
assert.equal(evaluate("ligaPriceFor(getCard('sv03.5-138'))"), null);
assert.ok(evaluate("ligaPriceFor(getCard('swsh4.5sv-SV045'))") > 0);
assert.equal(evaluate("ligaPriceFor(getCard('mep-Museum'))"), null, 'Do not substitute an oversized promo');
for (const direction of [1, -1]) {
  evaluate(`globalThis.sorted = [...cards].sort((a,b) => comparePrice(a,b,${direction}));`);
  const prices = JSON.parse(evaluate('JSON.stringify(sorted.map(ligaPriceFor))'));
  assert.ok(prices.slice(288).every(p => p === null));
  for (let i = 1; i < 288; i++) assert.ok(direction * (prices[i] - prices[i - 1]) >= 0);
}
const before = evaluate("ligaPriceFor(getCard('sv03.5-180'))");
evaluate("state.records['sv03.5-180'] = {paidPrice: 9999};");
assert.equal(evaluate("ligaPriceFor(getCard('sv03.5-180'))"), before, 'Paid amount must not change Liga reference');
console.log('OK: 303 cards, 288 references; identity, Holon correction, missing values, sorting and paid amount isolation.');
