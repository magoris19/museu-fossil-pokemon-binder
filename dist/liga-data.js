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
    generatedAt: '2026-09-16T15:38:00-03:00',
    validationPolicy: 'IDs, numeros e precos da LigaPokemon so entram como validados com evidencia real. Dados ausentes ficam pending_validation.',
    editions: [
      {
        edition_name: 'EX Sandstorm',
        tcgdex_set: 'Sandstorm',
        liga_edid: 57,
        liga_ed: 'SS',
        validation_status: 'validated',
        source_url: 'https://www.ligapokemon.com.br/?view=cards/search&card=edid=57%20ed=SS'
      },
      {
        edition_name: '151',
        tcgdex_set: '151',
        liga_edid: 411,
        liga_ed: 'MEW',
        validation_status: 'validated',
        source_url: 'https://www.ligapokemon.com.br/?view=cards/search&card=edid=411%20ed=MEW',
        source_note: 'Edição informada e validada manualmente a partir do link direto da LigaPokemon.'
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
      },
      'sv03.5-138': {
        card_name: 'Omanyte',
        edition: '151',
        collector_number: '138/165',
        liga_num: 138,
        validation_status: 'validated',
        expected_url: 'https://www.ligapokemon.com.br/?view=cards/card&card=Omanyte%20(138%2F165)&ed=MEW&num=138',
        source_note: 'Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex.'
      },
      'sv03.5-180': {
        card_name: 'Omanyte',
        edition: '151',
        collector_number: '180/165',
        liga_num: 180,
        validation_status: 'validated',
        expected_url: 'https://www.ligapokemon.com.br/?view=cards/card&card=Omanyte%20(180%2F165)&ed=MEW&num=180',
        source_note: 'Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex.'
      },
      'sv03.5-139': {
        card_name: 'Omastar',
        edition: '151',
        collector_number: '139/165',
        liga_num: 139,
        validation_status: 'validated',
        expected_url: 'https://www.ligapokemon.com.br/?view=cards/card&card=Omastar%20(139%2F165)&ed=MEW&num=139',
        source_note: 'Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex.'
      },
      'sv03.5-140': {
        card_name: 'Kabuto',
        edition: '151',
        collector_number: '140/165',
        liga_num: 140,
        validation_status: 'validated',
        expected_url: 'https://www.ligapokemon.com.br/?view=cards/card&card=Kabuto%20(140%2F165)&ed=MEW&num=140',
        source_note: 'Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex.'
      },
      'sv03.5-141': {
        card_name: 'Kabutops',
        edition: '151',
        collector_number: '141/165',
        liga_num: 141,
        validation_status: 'validated',
        expected_url: 'https://www.ligapokemon.com.br/?view=cards/card&card=Kabutops%20(141%2F165)&ed=MEW&num=141',
        source_note: 'Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex.'
      },
      'sv03.5-142': {
        card_name: 'Aerodactyl',
        edition: '151',
        collector_number: '142/165',
        liga_num: 142,
        validation_status: 'validated',
        expected_url: 'https://www.ligapokemon.com.br/?view=cards/card&card=Aerodactyl%20(142%2F165)&ed=MEW&num=142',
        source_note: 'Link direto da carta informado manualmente e usado como padrão validado.'
      },
      'sv03.5-152': {
        card_name: 'Antique Dome Fossil',
        edition: '151',
        collector_number: '152/165',
        liga_num: 152,
        validation_status: 'validated',
        expected_url: 'https://www.ligapokemon.com.br/?view=cards/card&card=Antique%20Dome%20Fossil%20(152%2F165)&ed=MEW&num=152',
        source_note: 'Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex.'
      },
      'sv03.5-153': {
        card_name: 'Antique Helix Fossil',
        edition: '151',
        collector_number: '153/165',
        liga_num: 153,
        validation_status: 'validated',
        expected_url: 'https://www.ligapokemon.com.br/?view=cards/card&card=Antique%20Helix%20Fossil%20(153%2F165)&ed=MEW&num=153',
        source_note: 'Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex.'
      },
      'sv03.5-154': {
        card_name: 'Antique Old Amber',
        edition: '151',
        collector_number: '154/165',
        liga_num: 154,
        validation_status: 'validated',
        expected_url: 'https://www.ligapokemon.com.br/?view=cards/card&card=Antique%20Old%20Amber%20(154%2F165)&ed=MEW&num=154',
        source_note: 'Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex.'
      }
    },
    price_status: 'pending_validation'
  };

  window.LIGA_URLS = { buildCardUrl, buildEditionUrl };
})();
