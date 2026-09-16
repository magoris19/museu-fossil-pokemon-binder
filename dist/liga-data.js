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
      "generatedAt": "2026-09-16T16:33:00-03:00",
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
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Hidden Legends",
              "tcgdex_set": "Hidden Legends",
              "tcgdex_set_id": "ex5",
              "release_date": "2004-06-01",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "POP Series 1",
              "tcgdex_set": "POP Series 1",
              "tcgdex_set_id": "pop1",
              "release_date": "2004-09-01",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Cosmic Eclipse",
              "tcgdex_set": "Cosmic Eclipse",
              "tcgdex_set_id": "sm12",
              "release_date": "2019-11-01",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Darkness Ablaze",
              "tcgdex_set": "Darkness Ablaze",
              "tcgdex_set_id": "swsh3",
              "release_date": "2020-08-14",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
              "source_note": "Validado por correspondência tcgdex_id=swsh4.5 na API pública do CyndaQ, que informa liga_id=240, code=SHF e liga_url da LigaPokemon para Destinos Brilhantes.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/search&card=edid=240%20ed=SHF",
              "source_api_url": "https://cyndaq.fun/api/v1/catalog/editions"
          },
          {
              "edition_name": "Shining Fates Shiny Vault",
              "tcgdex_set": "Shining Fates Shiny Vault",
              "tcgdex_set_id": "swsh4.5sv",
              "release_date": "2021-02-19",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
          }
      },
      "price_status": "pending_validation"
  };

  window.LIGA_URLS = { buildCardUrl, buildEditionUrl };
})();
