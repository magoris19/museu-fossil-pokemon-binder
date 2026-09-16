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
      "generatedAt": "2026-09-16T16:15:00-03:00",
      "validationPolicy": "IDs, numeros e precos da LigaPokemon so entram como validados com evidencia real. Dados ausentes ficam pending_validation.",
      "editions": [
          {
              "edition_name": "Fossil",
              "tcgdex_set": "Fossil",
              "tcgdex_set_id": "base3",
              "release_date": "1999-10-10",
              "liga_edid": null,
              "liga_ed": "FO",
              "validation_status": "pending",
              "source_note": "Código ed=FO observado em resultado indexado de carta da LigaPokemon; edid ainda pendente.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Golem%20(36%2F62)&ed=FO&num=36"
          },
          {
              "edition_name": "Team Rocket",
              "tcgdex_set": "Team Rocket",
              "tcgdex_set_id": "base5",
              "release_date": "2000-04-24",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Gym Challenge",
              "tcgdex_set": "Gym Challenge",
              "tcgdex_set_id": "gym2",
              "release_date": "2000-10-16",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Neo Destiny",
              "tcgdex_set": "Neo Destiny",
              "tcgdex_set_id": "neo4",
              "release_date": "2002-02-28",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Skyridge",
              "tcgdex_set": "Skyridge",
              "tcgdex_set_id": "ecard3",
              "release_date": "2003-05-12",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
              "liga_edid": null,
              "liga_ed": "HP",
              "validation_status": "pending",
              "source_note": "Código ed=HP observado em resultado indexado de carta da LigaPokemon; edid ainda pendente."
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
              "liga_edid": null,
              "liga_ed": "MT",
              "validation_status": "pending",
              "source_note": "Código ed=MT observado em snippet indexado da página de edições da LigaPokemon; edid ainda pendente.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/edicoes"
          },
          {
              "edition_name": "POP Series 6",
              "tcgdex_set": "POP Series 6",
              "tcgdex_set_id": "pop6",
              "release_date": "2007-09-01",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Majestic Dawn",
              "tcgdex_set": "Majestic Dawn",
              "tcgdex_set_id": "dp5",
              "release_date": "2008-05-01",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Legends Awakened",
              "tcgdex_set": "Legends Awakened",
              "tcgdex_set_id": "dp6",
              "release_date": "2008-08-01",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Stormfront",
              "tcgdex_set": "Stormfront",
              "tcgdex_set_id": "dp7",
              "release_date": "2008-11-01",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Platinum",
              "tcgdex_set": "Platinum",
              "tcgdex_set_id": "pl1",
              "release_date": "2009-02-11",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Rising Rivals",
              "tcgdex_set": "Rising Rivals",
              "tcgdex_set_id": "pl2",
              "release_date": "2009-05-16",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Arceus",
              "tcgdex_set": "Arceus",
              "tcgdex_set_id": "pl4",
              "release_date": "2009-11-04",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Pokémon Rumble",
              "tcgdex_set": "Pokémon Rumble",
              "tcgdex_set_id": "ru1",
              "release_date": "2009-12-02",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Undaunted",
              "tcgdex_set": "Undaunted",
              "tcgdex_set_id": "hgss3",
              "release_date": "2010-08-18",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Noble Victories",
              "tcgdex_set": "Noble Victories",
              "tcgdex_set_id": "bw3",
              "release_date": "2011-11-16",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Dark Explorers",
              "tcgdex_set": "Dark Explorers",
              "tcgdex_set_id": "bw5",
              "release_date": "2012-05-09",
              "liga_edid": null,
              "liga_ed": "DEX",
              "validation_status": "pending",
              "source_note": "Código ed=DEX observado em snippet indexado da página de edições da LigaPokemon; edid ainda pendente.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/edicoes"
          },
          {
              "edition_name": "Plasma Blast",
              "tcgdex_set": "Plasma Blast",
              "tcgdex_set_id": "bw10",
              "release_date": "2013-08-14",
              "liga_edid": null,
              "liga_ed": "PLB",
              "validation_status": "pending",
              "source_note": "Código ed=PLB observado em resultado indexado de carta da LigaPokemon; edid ainda pendente.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Plasma%20Energy%20(91%2F101)&ed=PLB"
          },
          {
              "edition_name": "XY Black Star Promos",
              "tcgdex_set": "XY Black Star Promos",
              "tcgdex_set_id": "xyp",
              "release_date": "2013-10-12",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Furious Fists",
              "tcgdex_set": "Furious Fists",
              "tcgdex_set_id": "xy3",
              "release_date": "2014-08-13",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "SM Black Star Promos",
              "tcgdex_set": "SM Black Star Promos",
              "tcgdex_set_id": "smp",
              "release_date": "2017-02-03",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Ultra Prism",
              "tcgdex_set": "Ultra Prism",
              "tcgdex_set_id": "sm5",
              "release_date": "2018-02-02",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Forbidden Light",
              "tcgdex_set": "Forbidden Light",
              "tcgdex_set_id": "sm6",
              "release_date": "2018-05-04",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Team Up",
              "tcgdex_set": "Team Up",
              "tcgdex_set_id": "sm9",
              "release_date": "2019-01-31",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Shining Fates",
              "tcgdex_set": "Shining Fates",
              "tcgdex_set_id": "swsh4.5",
              "release_date": "2021-02-19",
              "liga_edid": null,
              "liga_ed": "SHF",
              "validation_status": "pending",
              "source_note": "Código ed=SHF observado em resultado indexado de carta da LigaPokemon; edid ainda pendente.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/card&card=Indeedee%20V%20(39%2F72)&ed=SHF&num=39"
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
              "liga_edid": null,
              "liga_ed": "EVS",
              "validation_status": "pending",
              "source_note": "Código ed=EVS observado em snippet indexado da página de edições da LigaPokemon; edid ainda pendente.",
              "source_url": "https://www.ligapokemon.com.br/?view=cards/edicoes"
          },
          {
              "edition_name": "Brilliant Stars",
              "tcgdex_set": "Brilliant Stars",
              "tcgdex_set_id": "swsh9",
              "release_date": "2022-02-25",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Astral Radiance",
              "tcgdex_set": "Astral Radiance",
              "tcgdex_set_id": "swsh10",
              "release_date": "2022-05-27",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Lost Origin",
              "tcgdex_set": "Lost Origin",
              "tcgdex_set_id": "swsh11",
              "release_date": "2022-09-09",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Silver Tempest",
              "tcgdex_set": "Silver Tempest",
              "tcgdex_set_id": "swsh12",
              "release_date": "2022-11-11",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Crown Zenith",
              "tcgdex_set": "Crown Zenith",
              "tcgdex_set_id": "swsh12.5",
              "release_date": "2023-01-20",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Black Bolt",
              "tcgdex_set": "Black Bolt",
              "tcgdex_set_id": "sv10.5b",
              "release_date": "2025-07-17",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "White Flare",
              "tcgdex_set": "White Flare",
              "tcgdex_set_id": "sv10.5w",
              "release_date": "2025-07-17",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Mega Evolution",
              "tcgdex_set": "Mega Evolution",
              "tcgdex_set_id": "me01",
              "release_date": "2025-09-26",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "MEP Black Star Promos",
              "tcgdex_set": "MEP Black Star Promos",
              "tcgdex_set_id": "mep",
              "release_date": "2025-09-26",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Ascended Heroes",
              "tcgdex_set": "Ascended Heroes",
              "tcgdex_set_id": "me02.5",
              "release_date": "2026-01-30",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Perfect Order",
              "tcgdex_set": "Perfect Order",
              "tcgdex_set_id": "me03",
              "release_date": "2026-03-27",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
          },
          {
              "edition_name": "Pitch Black",
              "tcgdex_set": "Pitch Black",
              "tcgdex_set_id": "me05",
              "release_date": "2026-07-17",
              "liga_edid": null,
              "liga_ed": null,
              "validation_status": "pending",
              "source_note": "Aguardando identificação manual ou evidência direta da LigaPokemon; identificadores não foram inferidos."
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
