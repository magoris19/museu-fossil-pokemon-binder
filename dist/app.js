const cards = window.FOSSIL_CARDS || [];
const ligaData = window.LIGA_DATA || {};
const ligaUrlTools = window.LIGA_URLS || {};
const STORAGE_KEY = 'museu-fossil-binder-v3';
const speciesOrder = [...new Set(cards.filter(card => card.family !== 'Acervo temático').map(card => card.family))];
const familyRank = new Map([...speciesOrder, 'Acervo temático'].map((family, index) => [family, index]));
const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const ligaEditions = Array.isArray(ligaData.editions) ? ligaData.editions : [];
const ligaEditionByName = new Map(ligaEditions.map(edition => [edition.edition_name, edition]));
const ligaEditionByTcgSet = new Map(ligaEditions.filter(edition => edition.tcgdex_set).map(edition => [edition.tcgdex_set, edition]));
const ligaPrints = ligaData.prints || {};
const ligaPriceReferences = ligaData.priceReferences || {};

const createPage = index => ({ id: `${Date.now()}-${index}`, title: index === 0 ? 'Origens do fóssil' : `Página ${index + 1}`, slots: [null, null, null, null] });
const defaultState = () => ({ version: 1, currentPage: 0, pages: [createPage(0)], records: {} });

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!parsed || !Array.isArray(parsed.pages) || !parsed.pages.length || typeof parsed.records !== 'object') return defaultState();
    parsed.pages = parsed.pages.map((page, index) => ({ ...createPage(index), ...page, slots: Array.isArray(page.slots) ? [...page.slots.slice(0, 4), ...Array(4).fill(null)].slice(0, 4) : [null, null, null, null] }));
    parsed.currentPage = Math.min(Math.max(Number(parsed.currentPage) || 0, 0), parsed.pages.length - 1);
    return parsed;
  } catch { return defaultState(); }
}

let state = loadState();
let ui = { filter: 'all', query: '', family: 'all', sort: 'family', sortDirection: 'asc', view: 'binder', dialog: null };
let toastTimer;

const el = Object.fromEntries([
  'cardList','binderPage','resultCount','catalogCount','filledSlots','pageNumber','pageTotal','searchInput',
  'familyFilter','sortCards','sortDirection','sortStatus','binderTitle','ownedCount','paidTotal','ligaTotal','boosterCount','cardDialog',
  'cardForm','dialogImage','dialogKind','dialogName','dialogMeta','ligaLink','ligaStatus','sourceLink','acquisitionMethod',
  'paidPrice','ligaPrice','cardNote','removeCard','toast','pageActions','importFile'
].map(id => [id, document.getElementById(id)]));

const cardMap = new Map(cards.map(card => [card.id, card]));
const getCard = id => cardMap.get(id);
const currentPage = () => state.pages[state.currentPage];
const placedIds = () => state.pages.flatMap(page => page.slots).filter(Boolean);
const recordFor = id => state.records[id] || {};
const displayImage = (card, low = false) => low ? (card.imageLow || card.image) : card.image;
const releaseTime = card => card.releaseDate ? Date.parse(`${card.releaseDate}T00:00:00Z`) : null;
const fallbackLigaSearchUrl = card => `https://www.ligapokemon.com.br/?view=cards/search&card=${encodeURIComponent(`${card.name} ${card.number}`)}`;
const ligaPrintFor = card => ligaPrints[card.id] || null;
const ligaEditionFor = (card, print = ligaPrintFor(card)) =>
  (print?.edition && ligaEditionByName.get(print.edition)) || ligaEditionByTcgSet.get(card.set) || null;
const ligaLinkFor = card => {
  const referenceUrl = ligaPriceReferences[card.id]?.liga_url;
  if (referenceUrl) return {
    url: referenceUrl,
    text: 'Conferir preço desta carta na LigaPokemon ↗',
    status: 'Referência da mesma edição e número de colecionador.'
  };
  const print = ligaPrintFor(card);
  const edition = ligaEditionFor(card, print);
  const cardUrl = ligaUrlTools.buildCardUrl?.(print, edition);
  if (cardUrl) {
    const isValidatedPrint = print?.validation_status === 'validated';
    return {
      url: cardUrl,
      text: isValidatedPrint ? 'Abrir carta validada na LigaPokemon ↗' : 'Abrir carta na LigaPokemon ↗',
      status: isValidatedPrint
        ? 'URL individual validada por edição, número de colecionador e número Liga.'
        : 'URL individual gerada por edição validada e número oficial do TCGdex. Confira a página antes de registrar preço Liga.'
    };
  }
  const editionUrl = ligaUrlTools.buildEditionUrl?.(edition);
  if (editionUrl) {
    return {
      url: editionUrl,
      text: 'Buscar edição validada na LigaPokemon ↗',
      status: 'Edição validada; impressão desta carta ainda está pendente de validação.'
    };
  }
  return {
    url: card.ligaUrl || fallbackLigaSearchUrl(card),
    text: 'Buscar na LigaPokemon ↗',
    status: 'Pendente de validação: edid, código da edição, impressão e preço ainda não foram confirmados.'
  };
};
const normalizeStoredPrice = value => {
  if (typeof value === 'number') return Number.isFinite(value) && value >= 0 ? value : null;
  if (typeof value !== 'string' || !value.trim()) return null;
  const clean = value.trim().replace(/\s/g, '').replace(/R\$/i, '');
  const normalized = clean.includes(',') ? clean.replace(/\./g, '').replace(',', '.') : clean;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
};
const ligaPriceReferenceFor = card => card ? ligaPriceReferences[card.id] || null : null;
const ligaPriceFor = card => card
  ? normalizeStoredPrice(ligaPriceReferenceFor(card)?.min_price) ?? normalizeStoredPrice(card.ligaPrice)
  : null;
const ligaMissingReason = card => ({
  price_unavailable: 'A carta foi localizada, mas a fonte não fornece cotação para ela nesta consulta.',
  edition_unavailable: 'Esta edição ainda não está disponível na fonte de preços utilizada.',
  unmatched: 'Ainda não foi encontrada uma cotação para esta impressão exata da carta.'
}[ligaData.priceAvailability?.[card.id]?.status] || 'Ainda não há cotação confirmada para esta carta.');
const formatObservedDate = value => value
  ? new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' }).format(new Date(value))
  : null;
const compareRelease = (a, b, direction) => {
  const aTime = releaseTime(a);
  const bTime = releaseTime(b);
  if (aTime == null && bTime == null) return a.name.localeCompare(b.name, 'pt-BR', { numeric: true });
  if (aTime == null) return 1;
  if (bTime == null) return -1;
  return direction * (aTime - bTime) || a.set.localeCompare(b.set, 'pt-BR') || a.number.localeCompare(b.number, 'pt-BR', { numeric: true });
};
const comparePrice = (a, b, direction) => {
  const aPrice = ligaPriceFor(a);
  const bPrice = ligaPriceFor(b);
  const aMissing = aPrice == null;
  const bMissing = bPrice == null;
  if (aMissing && bMissing) return direction * a.name.localeCompare(b.name, 'pt-BR', { numeric: true });
  if (aMissing) return 1;
  if (bMissing) return -1;
  return direction * (aPrice - bPrice) || a.name.localeCompare(b.name, 'pt-BR', { numeric: true });
};
const formatReleaseDate = card => card.releaseDate
  ? new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${card.releaseDate}T00:00:00Z`))
  : 'data não informada';

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch { showToast('O navegador não permitiu salvar localmente. Exporte uma cópia para não perder alterações.'); }
}

function showToast(message) {
  clearTimeout(toastTimer);
  el.toast.textContent = message;
  el.toast.classList.add('is-visible');
  toastTimer = setTimeout(() => el.toast.classList.remove('is-visible'), 2600);
}

function parseMoney(value) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  const clean = String(value || '').trim().replace(/\s/g, '').replace(/R\$/i, '');
  if (!clean) return null;
  const normalized = clean.includes(',') ? clean.replace(/\./g, '').replace(',', '.') : clean;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
}

function formatInput(value) { return typeof value === 'number' ? value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''; }

function renderFamilies() {
  const families = [...speciesOrder, 'Acervo temático'];
  el.familyFilter.replaceChildren(new Option('Todas as famílias', 'all'));
  families.forEach(family => el.familyFilter.add(new Option(family === 'Acervo temático' ? 'Cartas temáticas' : family, family)));
}

function filteredCards() {
  const query = ui.query.trim().toLocaleLowerCase('pt-BR');
  const owned = new Set(placedIds());
  const result = cards.filter(card => {
    const matchesType = ui.filter === 'all' || (ui.filter === 'owned' ? owned.has(card.id) : card.kind === ui.filter);
    const matchesFamily = ui.family === 'all' || card.family === ui.family;
    const haystack = `${card.name} ${card.set} ${card.number} ${card.family}`.toLocaleLowerCase('pt-BR');
    return matchesType && matchesFamily && (!query || haystack.includes(query));
  });
  const direction = ui.sortDirection === 'desc' ? -1 : 1;
  const sorters = {
    family: (a, b) => direction * ((familyRank.get(a.family) - familyRank.get(b.family)) || a.name.localeCompare(b.name, 'pt-BR', { numeric: true })),
    name: (a, b) => direction * (a.name.localeCompare(b.name, 'pt-BR', { numeric: true }) || a.set.localeCompare(b.set, 'pt-BR')),
    set: (a, b) => direction * (a.set.localeCompare(b.set, 'pt-BR', { numeric: true }) || a.number.localeCompare(b.number, 'pt-BR', { numeric: true })),
    release: (a, b) => compareRelease(a, b, direction),
    price: (a, b) => comparePrice(a, b, direction)
  };
  return result.sort(sorters[ui.sort] || sorters.family);
}

function updateSortDirectionButton() {
  const descending = ui.sortDirection === 'desc';
  el.sortDirection.querySelector('span').textContent = descending ? '↓' : '↑';
  el.sortDirection.querySelector('small').textContent = descending ? 'Decresc.' : 'Cresc.';
  el.sortDirection.setAttribute('aria-label', descending ? 'Ordem decrescente' : 'Ordem crescente');
  el.sortDirection.title = descending ? 'Alternar para ordem crescente' : 'Alternar para ordem decrescente';
  el.sortDirection.setAttribute('aria-pressed', String(descending));
}

function applyImageFallback(img, card) {
  img.addEventListener('error', () => {
    img.removeAttribute('src');
    img.alt = `Imagem indisponível — ${card.name}`;
    img.closest('.thumb-wrap, .dialog-art, .placed-card')?.classList.add('no-image');
  }, { once: true });
}

function renderCatalog() {
  const visible = filteredCards();
  const owned = new Set(placedIds());
  const pricedCount = visible.filter(card => ligaPriceFor(card) != null).length;
  el.sortStatus.hidden = false;
  {
    el.sortStatus.classList.toggle('is-empty', pricedCount === 0);
    el.sortStatus.textContent = pricedCount
      ? `${pricedCount} de ${visible.length} cartas com referência Liga. ${visible.length - pricedCount} sem cotação.${ui.sort === 'price' && pricedCount < visible.length ? ' Sem cotação ficam no fim.' : ''}`
      : 'Nenhuma das cartas exibidas possui cotação confirmada na fonte atual.';
  }
  el.cardList.replaceChildren();
  el.resultCount.textContent = visible.length;
  el.catalogCount.textContent = cards.length;
  if (!visible.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-results';
    empty.textContent = 'Nenhuma carta encontrada com estes filtros.';
    el.cardList.append(empty);
    return;
  }
  const template = document.getElementById('catalogCardTemplate');
  const fragment = document.createDocumentFragment();
  visible.forEach(card => {
    const node = template.content.firstElementChild.cloneNode(true);
    const img = node.querySelector('img');
    const price = ligaPriceFor(card);
    node.dataset.cardId = card.id;
    img.src = displayImage(card, true);
    img.alt = `Carta ${card.name}`;
    applyImageFallback(img, card);
    node.querySelector('h3').textContent = card.name;
    node.querySelector('p').textContent = `${card.set} · ${card.releaseDate?.slice(0, 4) || 'sem data'} · #${card.number}`;
    node.querySelector('.kind').textContent = card.kind === 'pokemon' ? card.family : 'Temática';
    node.querySelector('.price').textContent = price != null ? `Mín. Liga: ${money.format(price)}` : 'Liga: sem cotação';
    node.querySelector('.price').title = price != null
      ? `Referência observada em ${formatObservedDate(ligaPriceReferenceFor(card)?.observed_at) || 'data não informada'}. Confira condição, idioma e acabamento na Liga.`
      : ligaMissingReason(card);
    node.querySelector('.owned-badge').hidden = !owned.has(card.id);
    node.addEventListener('dragstart', event => event.dataTransfer.setData('text/plain', `card:${card.id}`));
    node.addEventListener('click', event => { if (!event.target.closest('.add-card')) openCardDialog(card.id); });
    node.addEventListener('keydown', event => { if (event.key === 'Enter') openCardDialog(card.id); });
    node.querySelector('.add-card').addEventListener('click', () => addToFirstEmpty(card.id));
    fragment.append(node);
  });
  el.cardList.append(fragment);
}

function renderPage() {
  const page = currentPage();
  el.binderPage.replaceChildren();
  page.slots.forEach((id, slotIndex) => {
    const pocket = document.createElement('div');
    pocket.className = 'pocket';
    pocket.dataset.slot = slotIndex;
    if (!id || !getCard(id)) {
      pocket.innerHTML = '<div class="pocket-empty"><span>＋</span><small>Bolso vazio</small></div>';
    } else {
      const card = getCard(id);
      const button = document.createElement('button');
      const img = document.createElement('img');
      button.className = 'placed-card';
      button.draggable = true;
      button.setAttribute('aria-label', `Abrir ficha de ${card.name}`);
      img.src = displayImage(card);
      img.alt = `Carta ${card.name}`;
      applyImageFallback(img, card);
      button.append(img);
      button.addEventListener('click', () => openCardDialog(id, state.currentPage, slotIndex));
      button.addEventListener('dragstart', event => event.dataTransfer.setData('text/plain', `slot:${state.currentPage}:${slotIndex}`));
      pocket.append(button);
    }
    pocket.addEventListener('dragover', event => { event.preventDefault(); pocket.classList.add('is-over'); });
    pocket.addEventListener('dragleave', event => { if (!pocket.contains(event.relatedTarget)) pocket.classList.remove('is-over'); });
    pocket.addEventListener('drop', event => { event.preventDefault(); pocket.classList.remove('is-over'); handleDrop(event.dataTransfer.getData('text/plain'), slotIndex); });
    el.binderPage.append(pocket);
  });
  el.filledSlots.textContent = page.slots.filter(Boolean).length;
  el.pageNumber.textContent = state.currentPage + 1;
  el.pageTotal.textContent = state.pages.length;
  el.binderTitle.textContent = page.title;
  renderStats();
  renderCatalog();
}

function renderStats() {
  const placements = placedIds();
  const paid = placements.reduce((total, id) => total + (recordFor(id).paidPrice || 0), 0);
  const liga = placements.reduce((total, id) => total + (ligaPriceFor(getCard(id)) || 0), 0);
  const boosters = placements.filter(id => recordFor(id).method === 'booster').length;
  el.ownedCount.textContent = placements.length;
  el.paidTotal.textContent = money.format(paid);
  el.ligaTotal.textContent = money.format(liga);
  el.boosterCount.textContent = boosters;
}

function ensureEmptyPocket() {
  let slot = currentPage().slots.findIndex(value => !value);
  if (slot >= 0) return { pageIndex: state.currentPage, slot };
  state.pages.push(createPage(state.pages.length));
  state.currentPage = state.pages.length - 1;
  return { pageIndex: state.currentPage, slot: 0 };
}

function addToFirstEmpty(id) {
  if (!getCard(id)) return;
  const target = ensureEmptyPocket();
  state.pages[target.pageIndex].slots[target.slot] = id;
  saveState();
  renderPage();
  showToast(`${getCard(id).name} foi para a página ${target.pageIndex + 1}.`);
}

function handleDrop(payload, targetSlot) {
  if (payload.startsWith('card:')) {
    const id = payload.slice(5);
    if (getCard(id)) currentPage().slots[targetSlot] = id;
  } else if (payload.startsWith('slot:')) {
    const [, pageIndexRaw, slotIndexRaw] = payload.split(':');
    const sourcePage = Number(pageIndexRaw), sourceSlot = Number(slotIndexRaw);
    if (!state.pages[sourcePage] || !Number.isInteger(sourceSlot)) return;
    const sourceId = state.pages[sourcePage].slots[sourceSlot];
    const targetId = currentPage().slots[targetSlot];
    currentPage().slots[targetSlot] = sourceId;
    state.pages[sourcePage].slots[sourceSlot] = targetId;
  }
  saveState();
  renderPage();
}

function openCardDialog(id, pageIndex = null, slotIndex = null) {
  const card = getCard(id);
  if (!card) return;
  const record = recordFor(id);
  ui.dialog = { id, pageIndex, slotIndex };
  el.dialogImage.src = displayImage(card);
  el.dialogImage.alt = `Carta ${card.name}`;
  applyImageFallback(el.dialogImage, card);
  el.dialogKind.textContent = card.kind === 'pokemon' ? `Pokémon fóssil · ${card.family}` : 'Acervo temático';
  el.dialogName.textContent = card.name;
  el.dialogMeta.textContent = `${card.set} · Lançada em ${formatReleaseDate(card)} · #${card.number}`;
  const ligaInfo = ligaLinkFor(card);
  const priceReference = ligaPriceReferenceFor(card);
  const observedDate = formatObservedDate(priceReference?.observed_at);
  el.ligaLink.href = ligaInfo.url;
  el.ligaLink.textContent = ligaInfo.text;
  el.ligaStatus.textContent = priceReference?.min_price != null
    ? `${ligaInfo.status} Menor valor observado na LigaPokemon: ${money.format(priceReference.min_price)}${observedDate ? ` em ${observedDate}` : ''}. Condição, idioma e acabamento podem variar; consulte os anúncios atuais.`
    : `${ligaMissingReason(card)} Use o link da Liga para conferir os anúncios. Ausência de cotação não significa carta sem valor.`;
  el.sourceLink.href = card.sourceUrl;
  el.acquisitionMethod.value = record.method || 'unknown';
  el.paidPrice.value = formatInput(record.paidPrice);
  el.ligaPrice.value = formatInput(ligaPriceFor(card));
  el.cardNote.value = record.note || '';
  el.removeCard.hidden = pageIndex == null || slotIndex == null;
  el.cardDialog.showModal();
}

function saveDialogRecord() {
  if (!ui.dialog) return;
  const { id } = ui.dialog;
  state.records[id] = { method: el.acquisitionMethod.value, paidPrice: parseMoney(el.paidPrice.value), note: el.cardNote.value.trim(), updatedAt: new Date().toISOString() };
  saveState();
  renderPage();
  showToast(`Ficha de ${getCard(id).name} salva.`);
}

function removeDialogCard() {
  if (!ui.dialog || ui.dialog.pageIndex == null) return;
  const { pageIndex, slotIndex, id } = ui.dialog;
  state.pages[pageIndex].slots[slotIndex] = null;
  saveState();
  el.cardDialog.close();
  renderPage();
  showToast(`${getCard(id).name} foi retirado do bolso.`);
}

function setView(view) {
  ui.view = view;
  document.querySelectorAll('.tab').forEach(tab => tab.classList.toggle('is-active', tab.dataset.view === view));
  document.querySelector('.workspace').classList.toggle('view-catalog', view === 'catalog');
  el.pageActions.hidden = view === 'catalog';
  if (view === 'catalog') el.searchInput.focus();
}

function exportData() {
  const bundle = { app: 'Museu Fóssil', exportedAt: new Date().toISOString(), catalogGeneratedAt: window.FOSSIL_META?.generatedAt, ligaDataGeneratedAt: ligaData.generatedAt, state };
  const blob = new Blob([JSON.stringify(bundle, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `museu-fossil-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 500);
  showToast('Cópia do fichário exportada.');
}

async function importData(file) {
  try {
    const parsed = JSON.parse(await file.text());
    const imported = parsed.state || parsed;
    if (!imported || !Array.isArray(imported.pages) || !imported.pages.length || typeof imported.records !== 'object') throw new Error('Formato inválido');
    state = imported;
    state.currentPage = 0;
    saveState();
    renderPage();
    setView('binder');
    showToast('Fichário importado com sucesso.');
  } catch { showToast('Não consegui importar: escolha um arquivo exportado por este fichário.'); }
  finally { el.importFile.value = ''; }
}

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter.is-active')?.classList.remove('is-active');
  button.classList.add('is-active');
  ui.filter = button.dataset.filter;
  renderCatalog();
}));
document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => setView(tab.dataset.view)));
el.searchInput.addEventListener('input', () => { ui.query = el.searchInput.value; renderCatalog(); });
el.familyFilter.addEventListener('change', () => { ui.family = el.familyFilter.value; renderCatalog(); });
el.sortCards.addEventListener('change', () => {
  ui.sort = el.sortCards.value;
  renderCatalog();
  if (ui.sort === 'price' && !cards.some(card => ligaPriceFor(card) != null)) {
    showToast('Nenhuma carta possui valor mínimo Liga importado no snapshot atual.');
  }
});
el.sortDirection.addEventListener('click', () => {
  ui.sortDirection = ui.sortDirection === 'asc' ? 'desc' : 'asc';
  updateSortDirectionButton();
  renderCatalog();
});
document.getElementById('prevPage').addEventListener('click', () => { state.currentPage = Math.max(0, state.currentPage - 1); saveState(); renderPage(); });
document.getElementById('nextPage').addEventListener('click', () => { if (state.currentPage === state.pages.length - 1) state.pages.push(createPage(state.pages.length)); state.currentPage += 1; saveState(); renderPage(); });
document.getElementById('renamePage').addEventListener('click', () => { const title = prompt('Nome desta página:', currentPage().title); if (title?.trim()) { currentPage().title = title.trim().slice(0, 80); saveState(); renderPage(); } });
document.getElementById('clearPage').addEventListener('click', () => { if (currentPage().slots.some(Boolean) && confirm('Esvaziar os quatro bolsos desta página? As fichas e valores das cartas continuarão salvos.')) { currentPage().slots = [null,null,null,null]; saveState(); renderPage(); showToast('Página esvaziada.'); } });
el.cardForm.addEventListener('submit', event => { if (event.submitter?.value === 'save') saveDialogRecord(); });
el.removeCard.addEventListener('click', removeDialogCard);
document.getElementById('exportData').addEventListener('click', exportData);
document.getElementById('importData').addEventListener('click', () => el.importFile.click());
el.importFile.addEventListener('change', () => { if (el.importFile.files[0]) importData(el.importFile.files[0]); });
el.acquisitionMethod.addEventListener('change', () => { el.paidPrice.placeholder = el.acquisitionMethod.value === 'booster' ? 'Sem custo individual' : '0,00'; });

renderFamilies();
updateSortDirectionButton();
renderPage();
