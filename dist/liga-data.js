(() => {
  const BASE_URL = 'https://www.ligapokemon.com.br/';

  const isValidatedEdition = edition =>
    edition?.validation_status === 'validated' &&
    Number.isInteger(edition.liga_edid) &&
    typeof edition.liga_ed === 'string' &&
    edition.liga_ed.trim();

  const isValidatedPrint = print =>
    print?.validation_status === 'validated' &&
    typeof print.card_name === 'string' &&
    typeof print.collector_number === 'string' &&
    print.collector_number.trim() &&
    print.liga_num != null;

  const buildCardUrl = (print, edition) => {
    if (!isValidatedPrint(print) || !isValidatedEdition(edition)) return null;
    const cardLabel = `${print.card_name} (${print.collector_number})`;
    return `${BASE_URL}?view=cards/card&card=${encodeURIComponent(cardLabel)}&ed=${encodeURIComponent(edition.liga_ed)}&num=${encodeURIComponent(String(print.liga_num))}`;
  };

  const buildEditionUrl = edition => {
    if (!isValidatedEdition(edition)) return null;
    return `${BASE_URL}?view=cards/search&card=edid=${encodeURIComponent(String(edition.liga_edid))}%20ed=${encodeURIComponent(edition.liga_ed)}`;
  };

  window.LIGA_DATA = {
    generatedAt: '2026-09-16T14:53:43-03:00',
    validationPolicy: 'IDs, numeros e precos da LigaPokemon so entram como validados com evidencia real. Dados ausentes ficam pending_validation.',
    editions: [
      {
        edition_name: 'EX Sandstorm',
        tcgdex_set: 'Sandstorm',
        liga_edid: 57,
        liga_ed: 'SS',
        validation_status: 'validated',
        source_url: 'https://www.ligapokemon.com.br/?view=cards/search&card=edid=57%20ed=SS'
      }
    ],
    prints: {
      'ex2-27': {
        card_name: 'Anorith',
        edition: 'EX Sandstorm',
        collector_number: '27/100',
        liga_num: 27,
        validation_status: 'validated',
        expected_url: 'https://www.ligapokemon.com.br/?view=cards/card&card=Anorith%20(27%2F100)&ed=SS&num=27',
        source_note: 'Caso inicial validado pelo levantamento anexado.'
      }
    },
    price_status: 'pending_validation'
  };

  window.LIGA_URLS = { buildCardUrl, buildEditionUrl };
})();
