(() => {
  const BASE_URL = 'https://www.ligapokemon.com.br/';

  const canBuildCardUrl = print =>
    ['validated', 'generated'].includes(print?.validation_status) &&
    typeof print.card_name === 'string' &&
    typeof print.collector_number === 'string' &&
    print.collector_number.trim() &&
    print.liga_num != null;

  const isValidatedEdition = edition =>
    edition?.validation_status === 'validated' &&
    Number.isInteger(edition.liga_edid) &&
    typeof edition.liga_ed === 'string' &&
    edition.liga_ed.trim();

  const buildCardUrl = (print, edition) => {
    if (!canBuildCardUrl(print) || !isValidatedEdition(edition)) return null;
    const cardLabel = `${print.card_name} (${print.collector_number})`;
    return `${BASE_URL}?view=cards/card&card=${encodeURIComponent(cardLabel)}&ed=${encodeURIComponent(edition.liga_ed)}&num=${encodeURIComponent(String(print.liga_num))}`;
  };

  const buildEditionUrl = edition => {
    if (!isValidatedEdition(edition)) return null;
    return `${BASE_URL}?view=cards/search&card=edid=${encodeURIComponent(String(edition.liga_edid))}%20ed=${encodeURIComponent(edition.liga_ed)}`;
  };

  window.LIGA_DATA = {
      "generatedAt": "2026-09-16T17:11:00-03:00",
      "validationPolicy": "IDs, numeros e precos da LigaPokemon so entram como validados com evidencia real. Dados ausentes ficam pending_validation. A API publica do CyndaQ pode ser usada como fonte auxiliar quando expõe liga_id, code, liga_url e correspondencia tcgdex_id clara; precos seguem pendentes ate validacao da pagina individual.",
      "editions": [
          {
              "edition_name": "Fossil",
              "tcgdex_set": "Fossil",
              "tcgdex_set_id": "base3",
              "release_date": "1999-10-10",
              "liga_edid": 70,
              "liga_ed": "FO",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=base3 na API pública do CyndaQ, que informa liga_id=70, code=FO e liga_url da LigaPokemon para Fóssil.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=70%20ed=FO",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Team Rocket",
              "tcgdex_set": "Team Rocket",
              "tcgdex_set_id": "base5",
              "release_date": "2000-04-24",
              "liga_edid": 68,
              "liga_ed": "TR",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=base5 na API pública do CyndaQ, que informa liga_id=68, code=TR e liga_url da LigaPokemon para Team Rocket.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=68%20ed=TR",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Gym Challenge",
              "tcgdex_set": "Gym Challenge",
              "tcgdex_set_id": "gym2",
              "release_date": "2000-10-16",
              "liga_edid": 66,
              "liga_ed": "G2",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=gym2 na API pública do CyndaQ, que informa liga_id=66, code=G2 e liga_url da LigaPokemon para Gym Challenge.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=66%20ed=G2",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Neo Discovery",
              "tcgdex_set": "Neo Discovery",
              "tcgdex_set_id": "neo2",
              "release_date": "2001-06-01",
              "liga_edid": 64,
              "liga_ed": "N2",
              "validation_status": "validated",
              "source_note": "Resultado indexado da LigaPokemon para Neo Discovery confirmou edid=64 e ed=N2.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=64%20ed=N2"
          },
          {
              "edition_name": "Neo Revelation",
              "tcgdex_set": "Neo Revelation",
              "tcgdex_set_id": "neo3",
              "release_date": "2001-09-21",
              "liga_edid": 63,
              "liga_ed": "N3",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=neo3 na API pública do CyndaQ, que informa liga_id=63, code=N3 e liga_url da LigaPokemon para Neo Revelation.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards%2Fsearch&card=edid%3D63+ed%3DN3",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Neo Destiny",
              "tcgdex_set": "Neo Destiny",
              "tcgdex_set_id": "neo4",
              "release_date": "2002-02-28",
              "liga_edid": 62,
              "liga_ed": "N4",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=neo4 na API pública do CyndaQ, que informa liga_id=62, code=N4 e liga_url da LigaPokemon para Neo Destiny.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards%2Fsearch&card=edid%3D62+ed%3DN4",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Legendary Collection",
              "tcgdex_set": "Legendary Collection",
              "tcgdex_set_id": "lc",
              "release_date": "2002-05-24",
              "liga_edid": 86,
              "liga_ed": "LC",
              "validation_status": "validated",
              "source_note": "Validado manualmente a partir de link direto da LigaPokemon informado pelo usuário.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=86%20ed=LC"
          },
          {
              "edition_name": "Aquapolis",
              "tcgdex_set": "Aquapolis",
              "tcgdex_set_id": "ecard2",
              "release_date": "2003-01-15",
              "liga_edid": 60,
              "liga_ed": "AQ",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=ecard2 na API pública do CyndaQ, que informa liga_id=60, code=AQ e liga_url da LigaPokemon para Aquapolis.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards%2Fsearch&card=edid%3D60+ed%3DAQ",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Skyridge",
              "tcgdex_set": "Skyridge",
              "tcgdex_set_id": "ecard3",
              "release_date": "2003-05-12",
              "liga_edid": 59,
              "liga_ed": "SKY",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=ecard3 na API pública do CyndaQ, que informa liga_id=59, code=SKY e liga_url da LigaPokemon para Skyridge.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=59%20ed=SKY",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "EX Sandstorm",
              "tcgdex_set": "Sandstorm",
              "tcgdex_set_id": "ex2",
              "release_date": "2003-09-18",
              "liga_edid": 57,
              "liga_ed": "SS",
              "validation_status": "validated",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=57%20ed=SS"
          },
          {
              "edition_name": "Team Magma vs Team Aqua",
              "tcgdex_set": "Team Magma vs Team Aqua",
              "tcgdex_set_id": "ex4",
              "release_date": "2004-03-01",
              "liga_edid": 55,
              "liga_ed": "MA",
              "validation_status": "validated",
              "source_note": "Validado manualmente a partir de link direto da LigaPokemon informado pelo usuário.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=55%20ed=MA"
          },
          {
              "edition_name": "Hidden Legends",
              "tcgdex_set": "Hidden Legends",
              "tcgdex_set_id": "ex5",
              "release_date": "2004-06-01",
              "liga_edid": 54,
              "liga_ed": "HL",
              "validation_status": "validated",
              "source_note": "Validado manualmente a partir de link direto da LigaPokemon informado pelo usuário.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=54%20ed=HL"
          },
          {
              "edition_name": "POP Series 1",
              "tcgdex_set": "POP Series 1",
              "tcgdex_set_id": "pop1",
              "release_date": "2004-09-01",
              "liga_edid": 73,
              "liga_ed": "P1",
              "validation_status": "validated",
              "source_note": "Validado manualmente a partir de link direto da LigaPokemon informado pelo usuário.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=73%20ed=P1"
          },
          {
              "edition_name": "Delta Species",
              "tcgdex_set": "Delta Species",
              "tcgdex_set_id": "ex11",
              "release_date": "2005-10-31",
              "liga_edid": 48,
              "liga_ed": "DS",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=ex11 na API pública do CyndaQ, que informa liga_id=48, code=DS e liga_url da LigaPokemon para Delta Species.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards%2Fsearch&card=edid%3D48+ed%3DDS",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Legend Maker",
              "tcgdex_set": "Legend Maker",
              "tcgdex_set_id": "ex12",
              "release_date": "2006-02-13",
              "liga_edid": 47,
              "liga_ed": "LM",
              "validation_status": "validated",
              "source_note": "Resultado indexado da LigaPokemon para Legend Maker confirmou edid=47 e ed=LM.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=47%20ed=LM"
          },
          {
              "edition_name": "Holon Phantoms",
              "tcgdex_set": "Holon Phantoms",
              "tcgdex_set_id": "ex13",
              "release_date": "2006-05-03",
              "liga_edid": 531,
              "liga_ed": "HP",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=ex13 na API pública do CyndaQ, que informa liga_id=531, code=HP e liga_url da LigaPokemon para Holon Phantoms.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards%2Fsearch&card=edid%3D531+ed%3DHP",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Power Keepers",
              "tcgdex_set": "Power Keepers",
              "tcgdex_set_id": "ex16",
              "release_date": "2007-02-17",
              "liga_edid": 43,
              "liga_ed": "PK",
              "validation_status": "validated",
              "source_note": "Resultado indexado da LigaPokemon para Power Keepers confirmou edid=43 e ed=PK.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=43%20ed=PK"
          },
          {
              "edition_name": "DP Black Star Promos",
              "tcgdex_set": "DP Black Star Promos",
              "tcgdex_set_id": "dpp",
              "release_date": "2007-05-01",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Mysterious Treasures",
              "tcgdex_set": "Mysterious Treasures",
              "tcgdex_set_id": "dp2",
              "release_date": "2007-08-01",
              "liga_edid": 40,
              "liga_ed": "MT",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=dp2 na API pública do CyndaQ, que informa liga_id=40, code=MT e liga_url da LigaPokemon para Tesouros Misteriosos.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards%2Fsearch&card=edid%3D40+ed%3DMT",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "POP Series 6",
              "tcgdex_set": "POP Series 6",
              "tcgdex_set_id": "pop6",
              "release_date": "2007-09-01",
              "liga_edid": 78,
              "liga_ed": "P6",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=pop6 na API pública do CyndaQ, que informa liga_id=78, code=P6 e liga_url da LigaPokemon para POP Series 6.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=78%20ed=P6",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Majestic Dawn",
              "tcgdex_set": "Majestic Dawn",
              "tcgdex_set_id": "dp5",
              "release_date": "2008-05-01",
              "liga_edid": 37,
              "liga_ed": "MD",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=dp5 na API pública do CyndaQ, que informa liga_id=37, code=MD e liga_url da LigaPokemon para Majestic Dawn.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=37%20ed=MD",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Legends Awakened",
              "tcgdex_set": "Legends Awakened",
              "tcgdex_set_id": "dp6",
              "release_date": "2008-08-01",
              "liga_edid": 36,
              "liga_ed": "LA",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=dp6 na API pública do CyndaQ, que informa liga_id=36, code=LA e liga_url da LigaPokemon para Legends Awakened.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=36%20ed=LA",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Stormfront",
              "tcgdex_set": "Stormfront",
              "tcgdex_set_id": "dp7",
              "release_date": "2008-11-01",
              "liga_edid": 35,
              "liga_ed": "SF",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=dp7 na API pública do CyndaQ, que informa liga_id=35, code=SF e liga_url da LigaPokemon para Stormfront.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=35%20ed=SF",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Platinum",
              "tcgdex_set": "Platinum",
              "tcgdex_set_id": "pl1",
              "release_date": "2009-02-11",
              "liga_edid": 34,
              "liga_ed": "PL",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=pl1 na API pública do CyndaQ, que informa liga_id=34, code=PL e liga_url da LigaPokemon para Platinum.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards%2Fsearch&card=edid%3D34%20ed%3DPL",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Rising Rivals",
              "tcgdex_set": "Rising Rivals",
              "tcgdex_set_id": "pl2",
              "release_date": "2009-05-16",
              "liga_edid": 33,
              "liga_ed": "RR",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=pl2 na API pública do CyndaQ, que informa liga_id=33, code=RR e liga_url da LigaPokemon para Rising Rivals.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=33%20ed=RR",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Arceus",
              "tcgdex_set": "Arceus",
              "tcgdex_set_id": "pl4",
              "release_date": "2009-11-04",
              "liga_edid": 31,
              "liga_ed": "AR",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=pl4 na API pública do CyndaQ, que informa liga_id=31, code=AR e liga_url da LigaPokemon para Arceus.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=31%20ed=AR",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Pokémon Rumble",
              "tcgdex_set": "Pokémon Rumble",
              "tcgdex_set_id": "ru1",
              "release_date": "2009-12-02",
              "liga_edid": 83,
              "liga_ed": "RU",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=ru1 na API pública do CyndaQ, que informa liga_id=83, code=RU e liga_url da LigaPokemon para Rumble.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=83%20ed=RU",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Undaunted",
              "tcgdex_set": "Undaunted",
              "tcgdex_set_id": "hgss3",
              "release_date": "2010-08-18",
              "liga_edid": 27,
              "liga_ed": "UD",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=hgss3 na API pública do CyndaQ, que informa liga_id=27, code=UD e liga_url da LigaPokemon para Destemido.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=27%20ed=UD",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Noble Victories",
              "tcgdex_set": "Noble Victories",
              "tcgdex_set_id": "bw3",
              "release_date": "2011-11-16",
              "liga_edid": 19,
              "liga_ed": "NVI",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=bw3 na API pública do CyndaQ, que informa liga_id=19, code=NVI e liga_url da LigaPokemon para Vitórias Nobres.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=19%20ed=NVI",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Dark Explorers",
              "tcgdex_set": "Dark Explorers",
              "tcgdex_set_id": "bw5",
              "release_date": "2012-05-09",
              "liga_edid": 17,
              "liga_ed": "DEX",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=bw5 na API pública do CyndaQ, que informa liga_id=17, code=DEX e liga_url da LigaPokemon para Exploradores da Escuridão.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=17%20ed=DEX",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Plasma Blast",
              "tcgdex_set": "Plasma Blast",
              "tcgdex_set_id": "bw10",
              "release_date": "2013-08-14",
              "liga_edid": 11,
              "liga_ed": "PLB",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=bw10 na API pública do CyndaQ, que informa liga_id=11, code=PLB e liga_url da LigaPokemon para Explosão de Plasma.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=11%20ed=PLB",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "XY Black Star Promos",
              "tcgdex_set": "XY Black Star Promos",
              "tcgdex_set_id": "xyp",
              "release_date": "2013-10-12",
              "liga_edid": 9,
              "liga_ed": "XYPR",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=xyp na API pública do CyndaQ, que informa liga_id=9, code=XYPR e liga_url da LigaPokemon para XY Promos.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=9%20ed=XYPR",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Furious Fists",
              "tcgdex_set": "Furious Fists",
              "tcgdex_set_id": "xy3",
              "release_date": "2014-08-13",
              "liga_edid": 5,
              "liga_ed": "FFI",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=xy3 na API pública do CyndaQ, que informa liga_id=5, code=FFI e liga_url da LigaPokemon para Punhos Furiosos.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=5%20ed=FFI",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Fates Collide",
              "tcgdex_set": "Fates Collide",
              "tcgdex_set_id": "xy10",
              "release_date": "2016-05-02",
              "liga_edid": 96,
              "liga_ed": "FCO",
              "validation_status": "validated",
              "source_note": "Resultado indexado da LigaPokemon para Fusão de Destinos/Fates Collide confirmou edid=96 e ed=FCO.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=96%20ed=FCO"
          },
          {
              "edition_name": "Steam Siege",
              "tcgdex_set": "Steam Siege",
              "tcgdex_set_id": "xy11",
              "release_date": "2016-08-03",
              "liga_edid": 97,
              "liga_ed": "STS",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=xy11 na API pública do CyndaQ, que informa liga_id=97, code=STS e liga_url da LigaPokemon para Cerco de Vapor.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=97%20ed=STS",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "SM Black Star Promos",
              "tcgdex_set": "SM Black Star Promos",
              "tcgdex_set_id": "smp",
              "release_date": "2017-02-03",
              "liga_edid": 101,
              "liga_ed": "SMP",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=smp na API pública do CyndaQ, que informa liga_id=101, code=SMP e liga_url da LigaPokemon para Sol e Lua Promos.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards%2Fsearch&card=edid%3D101%20ed%3DSMP",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Ultra Prism",
              "tcgdex_set": "Ultra Prism",
              "tcgdex_set_id": "sm5",
              "release_date": "2018-02-02",
              "liga_edid": 106,
              "liga_ed": "UPR",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=sm5 na API pública do CyndaQ, que informa liga_id=106, code=UPR e liga_url da LigaPokemon para Ultraprisma.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=106%20ed=UPR",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Forbidden Light",
              "tcgdex_set": "Forbidden Light",
              "tcgdex_set_id": "sm6",
              "release_date": "2018-05-04",
              "liga_edid": 117,
              "liga_ed": "FLI",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=sm6 na API pública do CyndaQ, que informa liga_id=117, code=FLI e liga_url da LigaPokemon para Luz Proibida.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=117%20ed=FLI",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Team Up",
              "tcgdex_set": "Team Up",
              "tcgdex_set_id": "sm9",
              "release_date": "2019-01-31",
              "liga_edid": 134,
              "liga_ed": "TEU",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=sm9 na API pública do CyndaQ, que informa liga_id=134, code=TEU e liga_url da LigaPokemon para União de Aliados.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=134%20ed=TEU",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Unified Minds",
              "tcgdex_set": "Unified Minds",
              "tcgdex_set_id": "sm11",
              "release_date": "2019-08-02",
              "liga_edid": 158,
              "liga_ed": "UNM",
              "validation_status": "validated",
              "source_note": "Validado manualmente a partir de link direto da LigaPokemon informado pelo usuário.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=158%20ed=UNM"
          },
          {
              "edition_name": "Cosmic Eclipse",
              "tcgdex_set": "Cosmic Eclipse",
              "tcgdex_set_id": "sm12",
              "release_date": "2019-11-01",
              "liga_edid": 163,
              "liga_ed": "CEC",
              "validation_status": "validated",
              "source_note": "Validado manualmente a partir de link direto da LigaPokemon informado pelo usuário.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=163%20ed=CEC"
          },
          {
              "edition_name": "SWSH Black Star Promos",
              "tcgdex_set": "SWSH Black Star Promos",
              "tcgdex_set_id": "swshp",
              "release_date": "2019-11-15",
              "liga_edid": 165,
              "liga_ed": "SSPR",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=swshp na API pública do CyndaQ, que informa liga_id=165, code=SSPR e liga_url da LigaPokemon para Espada e Escudo Promos.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=165%20ed=SSPR",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Rebel Clash",
              "tcgdex_set": "Rebel Clash",
              "tcgdex_set_id": "swsh2",
              "release_date": "2020-05-01",
              "liga_edid": 169,
              "liga_ed": "RCL",
              "validation_status": "validated",
              "source_note": "Validado manualmente a partir de link direto da LigaPokemon informado pelo usuário.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=169%20ed=RCL"
          },
          {
              "edition_name": "Darkness Ablaze",
              "tcgdex_set": "Darkness Ablaze",
              "tcgdex_set_id": "swsh3",
              "release_date": "2020-08-14",
              "liga_edid": 170,
              "liga_ed": "DAA",
              "validation_status": "validated",
              "source_note": "Validado manualmente a partir de link direto da LigaPokemon informado pelo usuário.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=170%20ed=DAA"
          },
          {
              "edition_name": "Vivid Voltage",
              "tcgdex_set": "Vivid Voltage",
              "tcgdex_set_id": "swsh4",
              "release_date": "2020-11-13",
              "liga_edid": 175,
              "liga_ed": "VIV",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=swsh4 na API pública do CyndaQ, que informa liga_id=175, code=VIV e liga_url da LigaPokemon para Voltagem Vívida.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=175%20ed=VIV",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Shining Fates",
              "tcgdex_set": "Shining Fates",
              "tcgdex_set_id": "swsh4.5",
              "release_date": "2021-02-19",
              "liga_edid": 240,
              "liga_ed": "SHF",
              "validation_status": "validated",
              "source_note": "Validado manualmente a partir de link direto da LigaPokemon informado pelo usuário.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=240%20ed=SHF"
          },
          {
              "edition_name": "Shining Fates Shiny Vault",
              "tcgdex_set": "Shining Fates Shiny Vault",
              "tcgdex_set_id": "swsh4.5sv",
              "release_date": "2021-02-19",
              "liga_edid": 241,
              "liga_ed": "SFS",
              "validation_status": "validated",
              "source_note": "Validado manualmente a partir de link direto da LigaPokemon informado pelo usuário.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=241%20ed=SFS"
          },
          {
              "edition_name": "Evolving Skies",
              "tcgdex_set": "Evolving Skies",
              "tcgdex_set_id": "swsh7",
              "release_date": "2021-08-27",
              "liga_edid": 245,
              "liga_ed": "EVS",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=swsh7 na API pública do CyndaQ, que informa liga_id=245, code=EVS e liga_url da LigaPokemon para Céus em Evolução.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=245%20ed=EVS",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Brilliant Stars",
              "tcgdex_set": "Brilliant Stars",
              "tcgdex_set_id": "swsh9",
              "release_date": "2022-02-25",
              "liga_edid": 259,
              "liga_ed": "BRS",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=swsh9 na API pública do CyndaQ, que informa liga_id=259, code=BRS e liga_url da LigaPokemon para Astros Cintilantes.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards%2Fsearch&card=edid%3D259+ed%3DBRS",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Astral Radiance",
              "tcgdex_set": "Astral Radiance",
              "tcgdex_set_id": "swsh10",
              "release_date": "2022-05-27",
              "liga_edid": 267,
              "liga_ed": "ASR",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=swsh10 na API pública do CyndaQ, que informa liga_id=267, code=ASR e liga_url da LigaPokemon para Estrelas Radiantes.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=267%20ed=ASR",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Lost Origin",
              "tcgdex_set": "Lost Origin",
              "tcgdex_set_id": "swsh11",
              "release_date": "2022-09-09",
              "liga_edid": 278,
              "liga_ed": "LOR",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=swsh11 na API pública do CyndaQ, que informa liga_id=278, code=LOR e liga_url da LigaPokemon para Origem Perdida.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=278%20ed=LOR",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Silver Tempest",
              "tcgdex_set": "Silver Tempest",
              "tcgdex_set_id": "swsh12",
              "release_date": "2022-11-11",
              "liga_edid": 286,
              "liga_ed": "SIT",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=swsh12 na API pública do CyndaQ, que informa liga_id=286, code=SIT e liga_url da LigaPokemon para Tempestade Prateada.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards%2Fsearch&card=edid%3D286+ed%3DSIT",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Crown Zenith",
              "tcgdex_set": "Crown Zenith",
              "tcgdex_set_id": "swsh12.5",
              "release_date": "2023-01-20",
              "liga_edid": 338,
              "liga_ed": "CRZ",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=swsh12.5 na API pública do CyndaQ, que informa liga_id=338, code=CRZ e liga_url da LigaPokemon para Realeza Absoluta.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=338%20ed=CRZ",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "151",
              "tcgdex_set": "151",
              "tcgdex_set_id": "sv03.5",
              "release_date": "2023-09-22",
              "liga_edid": 411,
              "liga_ed": "MEW",
              "validation_status": "validated",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=411%20ed=MEW",
              "source_note": "Edição informada e validada manualmente a partir do link direto da LigaPokemon."
          },
          {
              "edition_name": "Stellar Crown",
              "tcgdex_set": "Stellar Crown",
              "tcgdex_set_id": "sv07",
              "release_date": "2024-09-13",
              "liga_edid": 612,
              "liga_ed": "SCR",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=sv07 na API pública do CyndaQ, que informa liga_id=612, code=SCR e liga_url da LigaPokemon para Coroa Estelar.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=612%20ed=SCR",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Black Bolt",
              "tcgdex_set": "Black Bolt",
              "tcgdex_set_id": "sv10.5b",
              "release_date": "2025-07-17",
              "liga_edid": 721,
              "liga_ed": "BLK",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=sv10.5b na API pública do CyndaQ, que informa liga_id=721, code=BLK e liga_url da LigaPokemon para Raio Preto.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=721%20ed=BLK",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "White Flare",
              "tcgdex_set": "White Flare",
              "tcgdex_set_id": "sv10.5w",
              "release_date": "2025-07-17",
              "liga_edid": 722,
              "liga_ed": "WHT",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=sv10.5w na API pública do CyndaQ, que informa liga_id=722, code=WHT e liga_url da LigaPokemon para Fogo Branco.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=722%20ed=WHT",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Mega Evolution",
              "tcgdex_set": "Mega Evolution",
              "tcgdex_set_id": "me01",
              "release_date": "2025-09-26",
              "liga_edid": 730,
              "liga_ed": "MEG",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=me01 na API pública do CyndaQ, que informa liga_id=730, code=MEG e liga_url da LigaPokemon para Megaevolução.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards%2Fsearch&card=edid%3D730+ed%3DMEG",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "MEP Black Star Promos",
              "tcgdex_set": "MEP Black Star Promos",
              "tcgdex_set_id": "mep",
              "release_date": "2025-09-26",
              "liga_edid": 733,
              "liga_ed": "MEP",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=mep na API pública do CyndaQ, que informa liga_id=733, code=MEP e liga_url da LigaPokemon para Mega Evolution Promos.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=733%20ed=MEP",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Ascended Heroes",
              "tcgdex_set": "Ascended Heroes",
              "tcgdex_set_id": "me02.5",
              "release_date": "2026-01-30",
              "liga_edid": 754,
              "liga_ed": "ASC",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=me02.5 na API pública do CyndaQ, que informa liga_id=754, code=ASC e liga_url da LigaPokemon para Heróis Excelsos.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards%2Fsearch&card=edid%3D754+ed%3DASC",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Perfect Order",
              "tcgdex_set": "Perfect Order",
              "tcgdex_set_id": "me03",
              "release_date": "2026-03-27",
              "liga_edid": 769,
              "liga_ed": "POR",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=me03 na API pública do CyndaQ, que informa liga_id=769, code=POR e liga_url da LigaPokemon para Equilíbrio Perfeito.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=769%20ed=POR",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Pitch Black",
              "tcgdex_set": "Pitch Black",
              "tcgdex_set_id": "me05",
              "release_date": "2026-07-17",
              "liga_edid": 792,
              "liga_ed": "PBL",
              "validation_status": "validated",
              "source_note": "Validado por correspondência tcgdex_id=me05 na API pública do CyndaQ, que informa liga_id=792, code=PBL e liga_url da LigaPokemon para Escuridão Absoluta.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=792%20ed=PBL",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          }
      ],
      "prints": {
          "ex2-27": {
              "card_name": "Anorith",
              "edition": "EX Sandstorm",
              "collector_number": "27/100",
              "liga_num": 27,
              "validation_status": "validated",
              "expected_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Anorith%20(27%2F100)&ed=SS&num=27",
              "source_note": "Caso inicial validado pelo levantamento anexado."
          },
          "sv03.5-138": {
              "card_name": "Omanyte",
              "edition": "151",
              "collector_number": "138/165",
              "liga_num": 138,
              "validation_status": "validated",
              "expected_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Omanyte%20(138%2F165)&ed=MEW&num=138",
              "source_note": "Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex."
          },
          "sv03.5-180": {
              "card_name": "Omanyte",
              "edition": "151",
              "collector_number": "180/165",
              "liga_num": 180,
              "validation_status": "validated",
              "expected_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Omanyte%20(180%2F165)&ed=MEW&num=180",
              "source_note": "Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex."
          },
          "sv03.5-139": {
              "card_name": "Omastar",
              "edition": "151",
              "collector_number": "139/165",
              "liga_num": 139,
              "validation_status": "validated",
              "expected_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Omastar%20(139%2F165)&ed=MEW&num=139",
              "source_note": "Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex."
          },
          "sv03.5-140": {
              "card_name": "Kabuto",
              "edition": "151",
              "collector_number": "140/165",
              "liga_num": 140,
              "validation_status": "validated",
              "expected_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Kabuto%20(140%2F165)&ed=MEW&num=140",
              "source_note": "Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex."
          },
          "sv03.5-141": {
              "card_name": "Kabutops",
              "edition": "151",
              "collector_number": "141/165",
              "liga_num": 141,
              "validation_status": "validated",
              "expected_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Kabutops%20(141%2F165)&ed=MEW&num=141",
              "source_note": "Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex."
          },
          "sv03.5-142": {
              "card_name": "Aerodactyl",
              "edition": "151",
              "collector_number": "142/165",
              "liga_num": 142,
              "validation_status": "validated",
              "expected_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Aerodactyl%20(142%2F165)&ed=MEW&num=142",
              "source_note": "Link direto da carta informado manualmente e usado como padrão validado."
          },
          "sv03.5-152": {
              "card_name": "Antique Dome Fossil",
              "edition": "151",
              "collector_number": "152/165",
              "liga_num": 152,
              "validation_status": "validated",
              "expected_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Antique%20Dome%20Fossil%20(152%2F165)&ed=MEW&num=152",
              "source_note": "Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex."
          },
          "sv03.5-153": {
              "card_name": "Antique Helix Fossil",
              "edition": "151",
              "collector_number": "153/165",
              "liga_num": 153,
              "validation_status": "validated",
              "expected_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Antique%20Helix%20Fossil%20(153%2F165)&ed=MEW&num=153",
              "source_note": "Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex."
          },
          "sv03.5-154": {
              "card_name": "Antique Old Amber",
              "edition": "151",
              "collector_number": "154/165",
              "liga_num": 154,
              "validation_status": "validated",
              "expected_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Antique%20Old%20Amber%20(154%2F165)&ed=MEW&num=154",
              "source_note": "Edição 151 validada na LigaPokemon; total oficial 165 confirmado pelo catálogo TCGdex."
          },
          "neo4-37": {
              "card_name": "Dark Omanyte",
              "edition": "Neo Destiny",
              "collector_number": "37/105",
              "liga_num": 37,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (neo4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy10-102": {
              "card_name": "Helix Fossil Omanyte",
              "edition": "Fates Collide",
              "collector_number": "102/124",
              "liga_num": 102,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl4-70": {
              "card_name": "Omanyte",
              "edition": "Arceus",
              "collector_number": "70/99",
              "liga_num": 70,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy10-17": {
              "card_name": "Omanyte",
              "edition": "Fates Collide",
              "collector_number": "17/124",
              "liga_num": 17,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "base3-52": {
              "card_name": "Omanyte",
              "edition": "Fossil",
              "collector_number": "52/62",
              "liga_num": 52,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (base3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex12-60": {
              "card_name": "Omanyte",
              "edition": "Legend Maker",
              "collector_number": "60/92",
              "liga_num": 60,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "lc-57": {
              "card_name": "Omanyte",
              "edition": "Legendary Collection",
              "collector_number": "57/110",
              "liga_num": 57,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (lc). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp5-69": {
              "card_name": "Omanyte",
              "edition": "Majestic Dawn",
              "collector_number": "69/100",
              "liga_num": 69,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "neo2-60": {
              "card_name": "Omanyte",
              "edition": "Neo Discovery",
              "collector_number": "60/75",
              "liga_num": 60,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (neo2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex16-56": {
              "card_name": "Omanyte",
              "edition": "Power Keepers",
              "collector_number": "56/108",
              "liga_num": 56,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex16). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-70": {
              "card_name": "Omanyte",
              "edition": "EX Sandstorm",
              "collector_number": "70/100",
              "liga_num": 70,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ecard3-41": {
              "card_name": "Omanyte",
              "edition": "Skyridge",
              "collector_number": "41/144",
              "liga_num": 41,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ecard3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm9-75": {
              "card_name": "Omanyte",
              "edition": "Team Up",
              "collector_number": "75/181",
              "liga_num": 75,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm9). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-74": {
              "card_name": "Omanyte δ",
              "edition": "Holon Phantoms",
              "collector_number": "74/110",
              "liga_num": 74,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "neo4-19": {
              "card_name": "Dark Omastar",
              "edition": "Neo Destiny",
              "collector_number": "19/105",
              "liga_num": 19,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (neo4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl4-23": {
              "card_name": "Omastar",
              "edition": "Arceus",
              "collector_number": "23/99",
              "liga_num": 23,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy10-18": {
              "card_name": "Omastar",
              "edition": "Fates Collide",
              "collector_number": "18/124",
              "liga_num": 18,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "base3-40": {
              "card_name": "Omastar",
              "edition": "Fossil",
              "collector_number": "40/62",
              "liga_num": 40,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (base3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex12-23": {
              "card_name": "Omastar",
              "edition": "Legend Maker",
              "collector_number": "23/92",
              "liga_num": 23,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "lc-58": {
              "card_name": "Omastar",
              "edition": "Legendary Collection",
              "collector_number": "58/110",
              "liga_num": 58,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (lc). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp5-26": {
              "card_name": "Omastar",
              "edition": "Majestic Dawn",
              "collector_number": "26/100",
              "liga_num": 26,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "neo2-43": {
              "card_name": "Omastar",
              "edition": "Neo Discovery",
              "collector_number": "43/75",
              "liga_num": 43,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (neo2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex16-20": {
              "card_name": "Omastar",
              "edition": "Power Keepers",
              "collector_number": "20/108",
              "liga_num": 20,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex16). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-19": {
              "card_name": "Omastar",
              "edition": "EX Sandstorm",
              "collector_number": "19/100",
              "liga_num": 19,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ecard3-23": {
              "card_name": "Omastar",
              "edition": "Skyridge",
              "collector_number": "23/144",
              "liga_num": 23,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ecard3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm9-76": {
              "card_name": "Omastar",
              "edition": "Team Up",
              "collector_number": "76/181",
              "liga_num": 76,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm9). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy10-19": {
              "card_name": "Omastar BREAK",
              "edition": "Fates Collide",
              "collector_number": "19/124",
              "liga_num": 19,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh12-035": {
              "card_name": "Omastar V",
              "edition": "Silver Tempest",
              "collector_number": "035/195",
              "liga_num": 35,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh12-174": {
              "card_name": "Omastar V",
              "edition": "Silver Tempest",
              "collector_number": "174/195",
              "liga_num": 174,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-13": {
              "card_name": "Omastar δ",
              "edition": "Holon Phantoms",
              "collector_number": "13/110",
              "liga_num": 13,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy10-96": {
              "card_name": "Dome Fossil Kabuto",
              "edition": "Fates Collide",
              "collector_number": "96/124",
              "liga_num": 96,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl4-67": {
              "card_name": "Kabuto",
              "edition": "Arceus",
              "collector_number": "67/99",
              "liga_num": 67,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy10-38": {
              "card_name": "Kabuto",
              "edition": "Fates Collide",
              "collector_number": "38/124",
              "liga_num": 38,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "base3-50": {
              "card_name": "Kabuto",
              "edition": "Fossil",
              "collector_number": "50/62",
              "liga_num": 50,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (base3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex12-36": {
              "card_name": "Kabuto",
              "edition": "Legend Maker",
              "collector_number": "36/92",
              "liga_num": 36,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "lc-48": {
              "card_name": "Kabuto",
              "edition": "Legendary Collection",
              "collector_number": "48/110",
              "liga_num": 48,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (lc). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp5-67": {
              "card_name": "Kabuto",
              "edition": "Majestic Dawn",
              "collector_number": "67/100",
              "liga_num": 67,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "neo2-56": {
              "card_name": "Kabuto",
              "edition": "Neo Discovery",
              "collector_number": "56/75",
              "liga_num": 56,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (neo2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex16-51": {
              "card_name": "Kabuto",
              "edition": "Power Keepers",
              "collector_number": "51/108",
              "liga_num": 51,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex16). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-39": {
              "card_name": "Kabuto",
              "edition": "EX Sandstorm",
              "collector_number": "39/100",
              "liga_num": 39,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ecard3-37": {
              "card_name": "Kabuto",
              "edition": "Skyridge",
              "collector_number": "37/144",
              "liga_num": 37,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ecard3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm9-77": {
              "card_name": "Kabuto",
              "edition": "Team Up",
              "collector_number": "77/181",
              "liga_num": 77,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm9). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-67": {
              "card_name": "Kabuto δ",
              "edition": "Holon Phantoms",
              "collector_number": "67/110",
              "liga_num": 67,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl4-4": {
              "card_name": "Kabutops",
              "edition": "Arceus",
              "collector_number": "4/99",
              "liga_num": 4,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy10-39": {
              "card_name": "Kabutops",
              "edition": "Fates Collide",
              "collector_number": "39/124",
              "liga_num": 39,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "base3-9": {
              "card_name": "Kabutops",
              "edition": "Fossil",
              "collector_number": "9/62",
              "liga_num": 9,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (base3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "base3-24": {
              "card_name": "Kabutops",
              "edition": "Fossil",
              "collector_number": "24/62",
              "liga_num": 24,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (base3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex12-7": {
              "card_name": "Kabutops",
              "edition": "Legend Maker",
              "collector_number": "7/92",
              "liga_num": 7,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "lc-27": {
              "card_name": "Kabutops",
              "edition": "Legendary Collection",
              "collector_number": "27/110",
              "liga_num": 27,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (lc). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp5-6": {
              "card_name": "Kabutops",
              "edition": "Majestic Dawn",
              "collector_number": "6/100",
              "liga_num": 6,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "neo2-6": {
              "card_name": "Kabutops",
              "edition": "Neo Discovery",
              "collector_number": "6/75",
              "liga_num": 6,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (neo2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "neo2-25": {
              "card_name": "Kabutops",
              "edition": "Neo Discovery",
              "collector_number": "25/75",
              "liga_num": 25,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (neo2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex16-10": {
              "card_name": "Kabutops",
              "edition": "Power Keepers",
              "collector_number": "10/108",
              "liga_num": 10,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex16). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ecard3-14": {
              "card_name": "Kabutops",
              "edition": "Skyridge",
              "collector_number": "14/144",
              "liga_num": 14,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ecard3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ecard3-150": {
              "card_name": "Kabutops",
              "edition": "Skyridge",
              "collector_number": "150/144",
              "liga_num": 150,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ecard3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm9-78": {
              "card_name": "Kabutops",
              "edition": "Team Up",
              "collector_number": "78/181",
              "liga_num": 78,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm9). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-97": {
              "card_name": "Kabutops ex",
              "edition": "EX Sandstorm",
              "collector_number": "97/100",
              "liga_num": 97,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-9": {
              "card_name": "Kabutops δ",
              "edition": "Holon Phantoms",
              "collector_number": "9/110",
              "liga_num": 9,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "neo4-108": {
              "card_name": "Shining Kabutops",
              "edition": "Neo Destiny",
              "collector_number": "108/105",
              "liga_num": 108,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (neo4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl4-13": {
              "card_name": "Aerodactyl",
              "edition": "Arceus",
              "collector_number": "13/99",
              "liga_num": 13,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw5-53": {
              "card_name": "Aerodactyl",
              "edition": "Dark Explorers",
              "collector_number": "53/108",
              "liga_num": 53,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy10-76": {
              "card_name": "Aerodactyl",
              "edition": "Fates Collide",
              "collector_number": "76/124",
              "liga_num": 76,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "base3-1": {
              "card_name": "Aerodactyl",
              "edition": "Fossil",
              "collector_number": "1/62",
              "liga_num": 1,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (base3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "base3-16": {
              "card_name": "Aerodactyl",
              "edition": "Fossil",
              "collector_number": "16/62",
              "liga_num": 16,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (base3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex12-1": {
              "card_name": "Aerodactyl",
              "edition": "Legend Maker",
              "collector_number": "1/92",
              "liga_num": 1,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp5-15": {
              "card_name": "Aerodactyl",
              "edition": "Majestic Dawn",
              "collector_number": "15/100",
              "liga_num": 15,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "neo3-15": {
              "card_name": "Aerodactyl",
              "edition": "Neo Revelation",
              "collector_number": "15/64",
              "liga_num": 15,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (neo3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ecard3-1": {
              "card_name": "Aerodactyl",
              "edition": "Skyridge",
              "collector_number": "1/144",
              "liga_num": 1,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ecard3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm9-130": {
              "card_name": "Aerodactyl",
              "edition": "Team Up",
              "collector_number": "130/181",
              "liga_num": 130,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm9). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-94": {
              "card_name": "Aerodactyl ex",
              "edition": "EX Sandstorm",
              "collector_number": "94/100",
              "liga_num": 94,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl2-55": {
              "card_name": "Aerodactyl GL",
              "edition": "Rising Rivals",
              "collector_number": "55/111",
              "liga_num": 55,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm11-106": {
              "card_name": "Aerodactyl GX",
              "edition": "Unified Minds",
              "collector_number": "106/236",
              "liga_num": 106,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm11-224": {
              "card_name": "Aerodactyl GX",
              "edition": "Unified Minds",
              "collector_number": "224/236",
              "liga_num": 224,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm11-244": {
              "card_name": "Aerodactyl GX",
              "edition": "Unified Minds",
              "collector_number": "244/236",
              "liga_num": 244,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh11-092": {
              "card_name": "Aerodactyl V",
              "edition": "Lost Origin",
              "collector_number": "092/196",
              "liga_num": 92,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh11-179": {
              "card_name": "Aerodactyl V",
              "edition": "Lost Origin",
              "collector_number": "179/196",
              "liga_num": 179,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh11-180": {
              "card_name": "Aerodactyl V",
              "edition": "Lost Origin",
              "collector_number": "180/196",
              "liga_num": 180,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh11-093": {
              "card_name": "Aerodactyl VSTAR",
              "edition": "Lost Origin",
              "collector_number": "093/196",
              "liga_num": 93,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh11-199": {
              "card_name": "Aerodactyl VSTAR",
              "edition": "Lost Origin",
              "collector_number": "199/196",
              "liga_num": 199,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-35": {
              "card_name": "Aerodactyl δ",
              "edition": "Holon Phantoms",
              "collector_number": "35/110",
              "liga_num": 35,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw5-97": {
              "card_name": "Old Amber Aerodactyl",
              "edition": "Dark Explorers",
              "collector_number": "97/108",
              "liga_num": 97,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy10-106": {
              "card_name": "Old Amber Aerodactyl",
              "edition": "Fates Collide",
              "collector_number": "106/124",
              "liga_num": 106,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm12-10": {
              "card_name": "Lileep",
              "edition": "Cosmic Eclipse",
              "collector_number": "10/236",
              "liga_num": 10,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex12-56": {
              "card_name": "Lileep",
              "edition": "Legend Maker",
              "collector_number": "56/92",
              "liga_num": 56,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp6-105": {
              "card_name": "Lileep",
              "edition": "Legends Awakened",
              "collector_number": "105/146",
              "liga_num": 105,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw10-3": {
              "card_name": "Lileep",
              "edition": "Plasma Blast",
              "collector_number": "3/101",
              "liga_num": 3,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex16-52": {
              "card_name": "Lileep",
              "edition": "Power Keepers",
              "collector_number": "52/108",
              "liga_num": 52,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex16). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-42": {
              "card_name": "Lileep",
              "edition": "EX Sandstorm",
              "collector_number": "42/100",
              "liga_num": 42,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-43": {
              "card_name": "Lileep",
              "edition": "EX Sandstorm",
              "collector_number": "43/100",
              "liga_num": 43,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv07-005": {
              "card_name": "Lileep",
              "edition": "Stellar Crown",
              "collector_number": "005/142",
              "liga_num": 5,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv07). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv07-145": {
              "card_name": "Lileep",
              "edition": "Stellar Crown",
              "collector_number": "145/142",
              "liga_num": 145,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv07). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-68": {
              "card_name": "Lileep δ",
              "edition": "Holon Phantoms",
              "collector_number": "68/110",
              "liga_num": 68,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw10-87": {
              "card_name": "Root Fossil Lileep",
              "edition": "Plasma Blast",
              "collector_number": "87/101",
              "liga_num": 87,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm12-11": {
              "card_name": "Cradily",
              "edition": "Cosmic Eclipse",
              "collector_number": "11/236",
              "liga_num": 11,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex12-3": {
              "card_name": "Cradily",
              "edition": "Legend Maker",
              "collector_number": "3/92",
              "liga_num": 3,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp6-21": {
              "card_name": "Cradily",
              "edition": "Legends Awakened",
              "collector_number": "21/146",
              "liga_num": 21,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw10-4": {
              "card_name": "Cradily",
              "edition": "Plasma Blast",
              "collector_number": "4/101",
              "liga_num": 4,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex16-7": {
              "card_name": "Cradily",
              "edition": "Power Keepers",
              "collector_number": "7/108",
              "liga_num": 7,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex16). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-3": {
              "card_name": "Cradily",
              "edition": "EX Sandstorm",
              "collector_number": "3/100",
              "liga_num": 3,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv07-006": {
              "card_name": "Cradily",
              "edition": "Stellar Crown",
              "collector_number": "006/142",
              "liga_num": 6,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv07). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex4-90": {
              "card_name": "Cradily ex",
              "edition": "Team Magma vs Team Aqua",
              "collector_number": "90/95",
              "liga_num": 90,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-2": {
              "card_name": "Cradily δ",
              "edition": "Holon Phantoms",
              "collector_number": "2/110",
              "liga_num": 2,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm12-111": {
              "card_name": "Anorith",
              "edition": "Cosmic Eclipse",
              "collector_number": "111/236",
              "liga_num": 111,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex12-29": {
              "card_name": "Anorith",
              "edition": "Legend Maker",
              "collector_number": "29/92",
              "liga_num": 29,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp6-46": {
              "card_name": "Anorith",
              "edition": "Legends Awakened",
              "collector_number": "46/146",
              "liga_num": 46,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex16-26": {
              "card_name": "Anorith",
              "edition": "Power Keepers",
              "collector_number": "26/108",
              "liga_num": 26,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex16). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-28": {
              "card_name": "Anorith",
              "edition": "EX Sandstorm",
              "collector_number": "28/100",
              "liga_num": 28,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh12-095": {
              "card_name": "Anorith",
              "edition": "Silver Tempest",
              "collector_number": "095/195",
              "liga_num": 95,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy11-56": {
              "card_name": "Anorith",
              "edition": "Steam Siege",
              "collector_number": "56/114",
              "liga_num": 56,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-57": {
              "card_name": "Anorith δ",
              "edition": "Holon Phantoms",
              "collector_number": "57/110",
              "liga_num": 57,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy11-100": {
              "card_name": "Claw Fossil Anorith",
              "edition": "Steam Siege",
              "collector_number": "100/114",
              "liga_num": 100,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm12-112": {
              "card_name": "Armaldo",
              "edition": "Cosmic Eclipse",
              "collector_number": "112/236",
              "liga_num": 112,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp6-18": {
              "card_name": "Armaldo",
              "edition": "Legends Awakened",
              "collector_number": "18/146",
              "liga_num": 18,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex16-3": {
              "card_name": "Armaldo",
              "edition": "Power Keepers",
              "collector_number": "3/108",
              "liga_num": 3,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex16). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-1": {
              "card_name": "Armaldo",
              "edition": "EX Sandstorm",
              "collector_number": "1/100",
              "liga_num": 1,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh12-096": {
              "card_name": "Armaldo",
              "edition": "Silver Tempest",
              "collector_number": "096/195",
              "liga_num": 96,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy11-57": {
              "card_name": "Armaldo",
              "edition": "Steam Siege",
              "collector_number": "57/114",
              "liga_num": 57,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex12-84": {
              "card_name": "Armaldo ex",
              "edition": "Legend Maker",
              "collector_number": "84/92",
              "liga_num": 84,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pop1-16": {
              "card_name": "Armaldo ex",
              "edition": "POP Series 1",
              "collector_number": "16/17",
              "liga_num": 16,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pop1). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-1": {
              "card_name": "Armaldo δ",
              "edition": "Holon Phantoms",
              "collector_number": "1/110",
              "liga_num": 1,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh10-076": {
              "card_name": "Cranidos",
              "edition": "Astral Radiance",
              "collector_number": "076/189",
              "liga_num": 76,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp2-43": {
              "card_name": "Cranidos",
              "edition": "Mysterious Treasures",
              "collector_number": "43/123",
              "liga_num": 43,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me05-044": {
              "card_name": "Cranidos",
              "edition": "Pitch Black",
              "collector_number": "044/84",
              "liga_num": 44,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me05). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl1-46": {
              "card_name": "Cranidos",
              "edition": "Platinum",
              "collector_number": "46/127",
              "liga_num": 46,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl1). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm5-64": {
              "card_name": "Cranidos",
              "edition": "Ultra Prism",
              "collector_number": "64/156",
              "liga_num": 64,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh10-077": {
              "card_name": "Rampardos",
              "edition": "Astral Radiance",
              "collector_number": "077/189",
              "liga_num": 77,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp2-33": {
              "card_name": "Rampardos",
              "edition": "Mysterious Treasures",
              "collector_number": "33/123",
              "liga_num": 33,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl1-13": {
              "card_name": "Rampardos",
              "edition": "Platinum",
              "collector_number": "13/127",
              "liga_num": 13,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl1). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pop6-5": {
              "card_name": "Rampardos",
              "edition": "POP Series 6",
              "collector_number": "5/17",
              "liga_num": 5,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pop6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm5-65": {
              "card_name": "Rampardos",
              "edition": "Ultra Prism",
              "collector_number": "65/156",
              "liga_num": 65,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me05-045": {
              "card_name": "Rampardos ex",
              "edition": "Pitch Black",
              "collector_number": "045/84",
              "liga_num": 45,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me05). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me05-100": {
              "card_name": "Rampardos ex",
              "edition": "Pitch Black",
              "collector_number": "100/84",
              "liga_num": 100,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me05). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl2-11": {
              "card_name": "Rampardos GL",
              "edition": "Rising Rivals",
              "collector_number": "11/111",
              "liga_num": 11,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy11-98": {
              "card_name": "Armor Fossil Shieldon",
              "edition": "Steam Siege",
              "collector_number": "98/114",
              "liga_num": 98,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh10-109": {
              "card_name": "Shieldon",
              "edition": "Astral Radiance",
              "collector_number": "109/189",
              "liga_num": 109,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp2-63": {
              "card_name": "Shieldon",
              "edition": "Mysterious Treasures",
              "collector_number": "63/123",
              "liga_num": 63,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me05-061": {
              "card_name": "Shieldon",
              "edition": "Pitch Black",
              "collector_number": "061/84",
              "liga_num": 61,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me05). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl1-62": {
              "card_name": "Shieldon",
              "edition": "Platinum",
              "collector_number": "62/127",
              "liga_num": 62,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl1). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy11-69": {
              "card_name": "Shieldon",
              "edition": "Steam Siege",
              "collector_number": "69/114",
              "liga_num": 69,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm5-84": {
              "card_name": "Shieldon",
              "edition": "Ultra Prism",
              "collector_number": "84/156",
              "liga_num": 84,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh10-110": {
              "card_name": "Bastiodon",
              "edition": "Astral Radiance",
              "collector_number": "110/189",
              "liga_num": 110,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp2-21": {
              "card_name": "Bastiodon",
              "edition": "Mysterious Treasures",
              "collector_number": "21/123",
              "liga_num": 21,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me05-062": {
              "card_name": "Bastiodon",
              "edition": "Pitch Black",
              "collector_number": "062/84",
              "liga_num": 62,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me05). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me05-093": {
              "card_name": "Bastiodon",
              "edition": "Pitch Black",
              "collector_number": "093/84",
              "liga_num": 93,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me05). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl1-20": {
              "card_name": "Bastiodon",
              "edition": "Platinum",
              "collector_number": "20/127",
              "liga_num": 20,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl1). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ru1-14": {
              "card_name": "Bastiodon",
              "edition": "Pokémon Rumble",
              "collector_number": "14/16",
              "liga_num": 14,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ru1). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pop6-1": {
              "card_name": "Bastiodon",
              "edition": "POP Series 6",
              "collector_number": "1/17",
              "liga_num": 1,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pop6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy11-70": {
              "card_name": "Bastiodon",
              "edition": "Steam Siege",
              "collector_number": "70/114",
              "liga_num": 70,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm5-85": {
              "card_name": "Bastiodon",
              "edition": "Ultra Prism",
              "collector_number": "85/156",
              "liga_num": 85,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl2-2": {
              "card_name": "Bastiodon GL",
              "edition": "Rising Rivals",
              "collector_number": "2/111",
              "liga_num": 2,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv10.5b-022": {
              "card_name": "Tirtouga",
              "edition": "Black Bolt",
              "collector_number": "022/86",
              "liga_num": 22,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv10.5b). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv10.5b-106": {
              "card_name": "Tirtouga",
              "edition": "Black Bolt",
              "collector_number": "106/86",
              "liga_num": 106,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv10.5b). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw3-25": {
              "card_name": "Tirtouga",
              "edition": "Noble Victories",
              "collector_number": "25/101",
              "liga_num": 25,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw10-27": {
              "card_name": "Tirtouga",
              "edition": "Plasma Blast",
              "collector_number": "27/101",
              "liga_num": 27,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv07-037": {
              "card_name": "Tirtouga",
              "edition": "Stellar Crown",
              "collector_number": "037/142",
              "liga_num": 37,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv07). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm11-44": {
              "card_name": "Tirtouga",
              "edition": "Unified Minds",
              "collector_number": "44/236",
              "liga_num": 44,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv10.5b-023": {
              "card_name": "Carracosta",
              "edition": "Black Bolt",
              "collector_number": "023/86",
              "liga_num": 23,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv10.5b). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv10.5b-107": {
              "card_name": "Carracosta",
              "edition": "Black Bolt",
              "collector_number": "107/86",
              "liga_num": 107,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv10.5b). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw3-26": {
              "card_name": "Carracosta",
              "edition": "Noble Victories",
              "collector_number": "26/101",
              "liga_num": 26,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw10-28": {
              "card_name": "Carracosta",
              "edition": "Plasma Blast",
              "collector_number": "28/101",
              "liga_num": 28,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv07-038": {
              "card_name": "Carracosta",
              "edition": "Stellar Crown",
              "collector_number": "038/142",
              "liga_num": 38,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv07). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm11-45": {
              "card_name": "Carracosta",
              "edition": "Unified Minds",
              "collector_number": "45/236",
              "liga_num": 45,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw3-66": {
              "card_name": "Archen",
              "edition": "Noble Victories",
              "collector_number": "66/101",
              "liga_num": 66,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw10-53": {
              "card_name": "Archen",
              "edition": "Plasma Blast",
              "collector_number": "53/101",
              "liga_num": 53,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh12-146": {
              "card_name": "Archen",
              "edition": "Silver Tempest",
              "collector_number": "146/195",
              "liga_num": 146,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm11-120": {
              "card_name": "Archen",
              "edition": "Unified Minds",
              "collector_number": "120/236",
              "liga_num": 120,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv10.5w-050": {
              "card_name": "Archen",
              "edition": "White Flare",
              "collector_number": "050/86",
              "liga_num": 50,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv10.5w). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv10.5w-131": {
              "card_name": "Archen",
              "edition": "White Flare",
              "collector_number": "131/86",
              "liga_num": 131,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv10.5w). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw5-110": {
              "card_name": "Archeops",
              "edition": "Dark Explorers",
              "collector_number": "110/108",
              "liga_num": 110,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw3-67": {
              "card_name": "Archeops",
              "edition": "Noble Victories",
              "collector_number": "67/101",
              "liga_num": 67,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw10-54": {
              "card_name": "Archeops",
              "edition": "Plasma Blast",
              "collector_number": "54/101",
              "liga_num": 54,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh12-147": {
              "card_name": "Archeops",
              "edition": "Silver Tempest",
              "collector_number": "147/195",
              "liga_num": 147,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm11-121": {
              "card_name": "Archeops",
              "edition": "Unified Minds",
              "collector_number": "121/236",
              "liga_num": 121,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv10.5w-051": {
              "card_name": "Archeops",
              "edition": "White Flare",
              "collector_number": "051/86",
              "liga_num": 51,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv10.5w). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv10.5w-132": {
              "card_name": "Archeops",
              "edition": "White Flare",
              "collector_number": "132/86",
              "liga_num": 132,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv10.5w). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm6-68": {
              "card_name": "Tyrunt",
              "edition": "Forbidden Light",
              "collector_number": "68/131",
              "liga_num": 68,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy3-61": {
              "card_name": "Tyrunt",
              "edition": "Furious Fists",
              "collector_number": "61/111",
              "liga_num": 61,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me03-044": {
              "card_name": "Tyrunt",
              "edition": "Perfect Order",
              "collector_number": "044/88",
              "liga_num": 44,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me03). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm6-69": {
              "card_name": "Tyrantrum",
              "edition": "Forbidden Light",
              "collector_number": "69/131",
              "liga_num": 69,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy3-62": {
              "card_name": "Tyrantrum",
              "edition": "Furious Fists",
              "collector_number": "62/111",
              "liga_num": 62,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me03-045": {
              "card_name": "Tyrantrum",
              "edition": "Perfect Order",
              "collector_number": "045/88",
              "liga_num": 45,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me03). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm6-27": {
              "card_name": "Amaura",
              "edition": "Forbidden Light",
              "collector_number": "27/131",
              "liga_num": 27,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy3-25": {
              "card_name": "Amaura",
              "edition": "Furious Fists",
              "collector_number": "25/111",
              "liga_num": 25,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me03-023": {
              "card_name": "Amaura",
              "edition": "Perfect Order",
              "collector_number": "023/88",
              "liga_num": 23,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me03). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm6-28": {
              "card_name": "Aurorus",
              "edition": "Forbidden Light",
              "collector_number": "28/131",
              "liga_num": 28,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy3-26": {
              "card_name": "Aurorus",
              "edition": "Furious Fists",
              "collector_number": "26/111",
              "liga_num": 26,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me03-024": {
              "card_name": "Aurorus",
              "edition": "Perfect Order",
              "collector_number": "024/88",
              "liga_num": 24,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me03). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me03-092": {
              "card_name": "Aurorus",
              "edition": "Perfect Order",
              "collector_number": "092/88",
              "liga_num": 92,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me03). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh3-65": {
              "card_name": "Dracozolt",
              "edition": "Darkness Ablaze",
              "collector_number": "65/189",
              "liga_num": 65,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh7-58": {
              "card_name": "Dracozolt V",
              "edition": "Evolving Skies",
              "collector_number": "58/203",
              "liga_num": 58,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh7). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh7-178": {
              "card_name": "Dracozolt V",
              "edition": "Evolving Skies",
              "collector_number": "178/203",
              "liga_num": 178,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh7). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh7-59": {
              "card_name": "Dracozolt VMAX",
              "edition": "Evolving Skies",
              "collector_number": "59/203",
              "liga_num": 59,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh7). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh7-210": {
              "card_name": "Dracozolt VMAX",
              "edition": "Evolving Skies",
              "collector_number": "210/203",
              "liga_num": 210,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh7). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh3-66": {
              "card_name": "Arctozolt",
              "edition": "Darkness Ablaze",
              "collector_number": "66/189",
              "liga_num": 66,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh3-53": {
              "card_name": "Dracovish",
              "edition": "Darkness Ablaze",
              "collector_number": "53/189",
              "liga_num": 53,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh9-114": {
              "card_name": "Dracovish V",
              "edition": "Brilliant Stars",
              "collector_number": "114/172",
              "liga_num": 114,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh9). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh3-54": {
              "card_name": "Arctovish",
              "edition": "Darkness Ablaze",
              "collector_number": "54/189",
              "liga_num": 54,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh7-48": {
              "card_name": "Arctovish V",
              "edition": "Evolving Skies",
              "collector_number": "48/203",
              "liga_num": 48,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh7). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh7-176": {
              "card_name": "Arctovish V",
              "edition": "Evolving Skies",
              "collector_number": "176/203",
              "liga_num": 176,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh7). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ecard3-119": {
              "card_name": "Ancient Ruins",
              "edition": "Skyridge",
              "collector_number": "119/144",
              "liga_num": 119,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ecard3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me05-072": {
              "card_name": "Antique Armor Fossil",
              "edition": "Pitch Black",
              "collector_number": "072/84",
              "liga_num": 72,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me05). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv10.5b-080": {
              "card_name": "Antique Cover Fossil",
              "edition": "Black Bolt",
              "collector_number": "080/86",
              "liga_num": 80,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv10.5b). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv07-129": {
              "card_name": "Antique Cover Fossil",
              "edition": "Stellar Crown",
              "collector_number": "129/142",
              "liga_num": 129,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv07). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me03-068": {
              "card_name": "Antique Jaw Fossil",
              "edition": "Perfect Order",
              "collector_number": "068/88",
              "liga_num": 68,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me03). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv10.5w-079": {
              "card_name": "Antique Plume Fossil",
              "edition": "White Flare",
              "collector_number": "079/86",
              "liga_num": 79,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv10.5w). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sv07-130": {
              "card_name": "Antique Root Fossil",
              "edition": "Stellar Crown",
              "collector_number": "130/142",
              "liga_num": 130,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sv07). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me03-069": {
              "card_name": "Antique Sail Fossil",
              "edition": "Perfect Order",
              "collector_number": "069/88",
              "liga_num": 69,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me03). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me05-073": {
              "card_name": "Antique Skull Fossil",
              "edition": "Pitch Black",
              "collector_number": "073/84",
              "liga_num": 73,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me05). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp2-116": {
              "card_name": "Armor Fossil",
              "edition": "Mysterious Treasures",
              "collector_number": "116/123",
              "liga_num": 116,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl1-119": {
              "card_name": "Armor Fossil",
              "edition": "Platinum",
              "collector_number": "119/127",
              "liga_num": 119,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl1). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ecard3-47": {
              "card_name": "Buried Fossil",
              "edition": "Skyridge",
              "collector_number": "47/144",
              "liga_num": 47,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ecard3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh4.5-67": {
              "card_name": "Cara Liss",
              "edition": "Shining Fates",
              "collector_number": "67/72",
              "liga_num": 67,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh4.5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh4-149": {
              "card_name": "Cara Liss",
              "edition": "Vivid Voltage",
              "collector_number": "149/185",
              "liga_num": 149,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-91": {
              "card_name": "Claw Fossil",
              "edition": "Holon Phantoms",
              "collector_number": "91/110",
              "liga_num": 91,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex12-78": {
              "card_name": "Claw Fossil",
              "edition": "Legend Maker",
              "collector_number": "78/92",
              "liga_num": 78,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp6-138": {
              "card_name": "Claw Fossil",
              "edition": "Legends Awakened",
              "collector_number": "138/146",
              "liga_num": 138,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex16-84": {
              "card_name": "Claw Fossil",
              "edition": "Power Keepers",
              "collector_number": "84/108",
              "liga_num": 84,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex16). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-90": {
              "card_name": "Claw Fossil",
              "edition": "EX Sandstorm",
              "collector_number": "90/100",
              "liga_num": 90,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp7-82": {
              "card_name": "Conductive Quarry",
              "edition": "Stormfront",
              "collector_number": "82/100",
              "liga_num": 82,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp7). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw3-90": {
              "card_name": "Cover Fossil",
              "edition": "Noble Victories",
              "collector_number": "90/101",
              "liga_num": 90,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw10-79": {
              "card_name": "Cover Fossil",
              "edition": "Plasma Blast",
              "collector_number": "79/101",
              "liga_num": 79,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex5-88": {
              "card_name": "Desert Ruins",
              "edition": "Hidden Legends",
              "collector_number": "88/101",
              "liga_num": 88,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "base5-75": {
              "card_name": "Digger",
              "edition": "Team Rocket",
              "collector_number": "75/82",
              "liga_num": 75,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (base5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh12.5-126": {
              "card_name": "Digging Duo",
              "edition": "Crown Zenith",
              "collector_number": "126/159",
              "liga_num": 126,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh12.5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh7-145": {
              "card_name": "Digging Gloves",
              "edition": "Evolving Skies",
              "collector_number": "145/203",
              "liga_num": 145,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh7). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl4-92": {
              "card_name": "Dome Fossil",
              "edition": "Arceus",
              "collector_number": "92/99",
              "liga_num": 92,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp5-89": {
              "card_name": "Dome Fossil",
              "edition": "Majestic Dawn",
              "collector_number": "89/100",
              "liga_num": 89,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "neo2-72": {
              "card_name": "Fossil Egg",
              "edition": "Neo Discovery",
              "collector_number": "72/75",
              "liga_num": 72,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (neo2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy10-101": {
              "card_name": "Fossil Excavation Kit",
              "edition": "Fates Collide",
              "collector_number": "101/124",
              "liga_num": 101,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm6-107": {
              "card_name": "Fossil Excavation Map",
              "edition": "Forbidden Light",
              "collector_number": "107/131",
              "liga_num": 107,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp5-82": {
              "card_name": "Fossil Excavator",
              "edition": "Majestic Dawn",
              "collector_number": "82/100",
              "liga_num": 82,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp2-111": {
              "card_name": "Fossil Excavator",
              "edition": "Mysterious Treasures",
              "collector_number": "111/123",
              "liga_num": 111,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me05-076": {
              "card_name": "Fossil Quarry",
              "edition": "Pitch Black",
              "collector_number": "076/84",
              "liga_num": 76,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me05). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy3-92": {
              "card_name": "Fossil Researcher",
              "edition": "Furious Fists",
              "collector_number": "92/111",
              "liga_num": 92,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy3-110": {
              "card_name": "Fossil Researcher",
              "edition": "Furious Fists",
              "collector_number": "110/111",
              "liga_num": 110,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh2-160": {
              "card_name": "Galar Mine",
              "edition": "Rebel Clash",
              "collector_number": "160/192",
              "liga_num": 160,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl4-93": {
              "card_name": "Helix Fossil",
              "edition": "Arceus",
              "collector_number": "93/99",
              "liga_num": 93,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp5-91": {
              "card_name": "Helix Fossil",
              "edition": "Majestic Dawn",
              "collector_number": "91/100",
              "liga_num": 91,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me03-074": {
              "card_name": "Hole-Digging Shovel",
              "edition": "Perfect Order",
              "collector_number": "074/88",
              "liga_num": 74,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me03). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-86": {
              "card_name": "Holon Fossil",
              "edition": "Holon Phantoms",
              "collector_number": "86/110",
              "liga_num": 86,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex11-96": {
              "card_name": "Holon Ruins",
              "edition": "Delta Species",
              "collector_number": "96/113",
              "liga_num": 96,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy3-94": {
              "card_name": "Jaw Fossil",
              "edition": "Furious Fists",
              "collector_number": "94/111",
              "liga_num": 94,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "base3-62": {
              "card_name": "Mysterious Fossil",
              "edition": "Fossil",
              "collector_number": "62/62",
              "liga_num": 62,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (base3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-92": {
              "card_name": "Mysterious Fossil",
              "edition": "Holon Phantoms",
              "collector_number": "92/110",
              "liga_num": 92,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex12-79": {
              "card_name": "Mysterious Fossil",
              "edition": "Legend Maker",
              "collector_number": "79/92",
              "liga_num": 79,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "lc-109": {
              "card_name": "Mysterious Fossil",
              "edition": "Legendary Collection",
              "collector_number": "109/110",
              "liga_num": 109,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (lc). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex16-85": {
              "card_name": "Mysterious Fossil",
              "edition": "Power Keepers",
              "collector_number": "85/108",
              "liga_num": 85,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex16). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-91": {
              "card_name": "Mysterious Fossil",
              "edition": "EX Sandstorm",
              "collector_number": "91/100",
              "liga_num": 91,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me02.5-197": {
              "card_name": "Nighttime Mine",
              "edition": "Ascended Heroes",
              "collector_number": "197/217",
              "liga_num": 197,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me02.5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl4-89": {
              "card_name": "Old Amber",
              "edition": "Arceus",
              "collector_number": "89/99",
              "liga_num": 89,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl4). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp5-84": {
              "card_name": "Old Amber",
              "edition": "Majestic Dawn",
              "collector_number": "84/100",
              "liga_num": 84,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw3-93": {
              "card_name": "Plume Fossil",
              "edition": "Noble Victories",
              "collector_number": "93/101",
              "liga_num": 93,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "bw10-82": {
              "card_name": "Plume Fossil",
              "edition": "Plasma Blast",
              "collector_number": "82/101",
              "liga_num": 82,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (bw10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh3-167": {
              "card_name": "Rare Fossil",
              "edition": "Darkness Ablaze",
              "collector_number": "167/189",
              "liga_num": 167,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "me01-127": {
              "card_name": "Risky Ruins",
              "edition": "Mega Evolution",
              "collector_number": "127/132",
              "liga_num": 127,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (me01). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "gym2-119": {
              "card_name": "Rocket's Minefield Gym",
              "edition": "Gym Challenge",
              "collector_number": "119/132",
              "liga_num": 119,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (gym2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex13-93": {
              "card_name": "Root Fossil",
              "edition": "Holon Phantoms",
              "collector_number": "93/110",
              "liga_num": 93,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex13). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex12-80": {
              "card_name": "Root Fossil",
              "edition": "Legend Maker",
              "collector_number": "80/92",
              "liga_num": 80,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp6-139": {
              "card_name": "Root Fossil",
              "edition": "Legends Awakened",
              "collector_number": "139/146",
              "liga_num": 139,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex16-86": {
              "card_name": "Root Fossil",
              "edition": "Power Keepers",
              "collector_number": "86/108",
              "liga_num": 86,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex16). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ex2-92": {
              "card_name": "Root Fossil",
              "edition": "EX Sandstorm",
              "collector_number": "92/100",
              "liga_num": 92,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ex2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "hgss3-76": {
              "card_name": "Ruins of Alph",
              "edition": "Undaunted",
              "collector_number": "76/90",
              "liga_num": 76,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (hgss3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "xy3-98": {
              "card_name": "Sail Fossil",
              "edition": "Furious Fists",
              "collector_number": "98/111",
              "liga_num": 98,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (xy3). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "dp2-117": {
              "card_name": "Skull Fossil",
              "edition": "Mysterious Treasures",
              "collector_number": "117/123",
              "liga_num": 117,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (dp2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "pl1-120": {
              "card_name": "Skull Fossil",
              "edition": "Platinum",
              "collector_number": "120/127",
              "liga_num": 120,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (pl1). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "ecard2-138": {
              "card_name": "Undersea Ruins",
              "edition": "Aquapolis",
              "collector_number": "138/147",
              "liga_num": 138,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (ecard2). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh10-157": {
              "card_name": "Unidentified Fossil",
              "edition": "Astral Radiance",
              "collector_number": "157/189",
              "liga_num": 157,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh10). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm12-207": {
              "card_name": "Unidentified Fossil",
              "edition": "Cosmic Eclipse",
              "collector_number": "207/236",
              "liga_num": 207,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm6-116": {
              "card_name": "Unidentified Fossil",
              "edition": "Forbidden Light",
              "collector_number": "116/131",
              "liga_num": 116,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm6). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "swsh12-165": {
              "card_name": "Unidentified Fossil",
              "edition": "Silver Tempest",
              "collector_number": "165/195",
              "liga_num": 165,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (swsh12). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm9-155": {
              "card_name": "Unidentified Fossil",
              "edition": "Team Up",
              "collector_number": "155/181",
              "liga_num": 155,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm9). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm5-134": {
              "card_name": "Unidentified Fossil",
              "edition": "Ultra Prism",
              "collector_number": "134/156",
              "liga_num": 134,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm5). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          },
          "sm11-210": {
              "card_name": "Unidentified Fossil",
              "edition": "Unified Minds",
              "collector_number": "210/236",
              "liga_num": 210,
              "validation_status": "generated",
              "source_note": "URL individual gerada a partir da edição LigaPokemon validada e do número/total oficial do TCGdex (sm11). A página/preço ainda precisa ser conferida antes de classificar como preço LigaPokemon."
          }
      },
      "price_status": "pending_validation",
      "printGenerationPolicy": "Impressões com validation_status=generated geram link individual usando edição LigaPokemon validada + card_name/number do TCGdex + total oficial da coleção. Isso não valida preço; valores da Liga só devem ser preenchidos após conferência da página individual."
  };

  window.LIGA_URLS = { buildCardUrl, buildEditionUrl };
})();
