# <a href="https://magoris19.github.io/museu-fossil-pokemon-binder/" target="_blank" rel="noopener noreferrer">🦴🦕🏛️🦖 Museu Fóssil · Fichário Pokémon</a>

> Um fichário online para montar, consultar e valorizar uma coleção de cartas Pokémon fósseis.

Organize sua coleção em páginas de **quatro bolsos**, como em um fichário físico. Pesquise cartas, arraste cada uma para o bolso desejado e registre como ela chegou até você — compra, booster, troca ou presente.

<p align="center">
  <a href="https://github.com/magoris19/museu-fossil-pokemon-binder/actions/workflows/deploy-pages.yml"><img src="https://img.shields.io/github/actions/workflow/status/magoris19/museu-fossil-pokemon-binder/deploy-pages.yml?label=GitHub%20Pages&logo=github&style=flat-square" alt="Status do GitHub Pages"></a>
  <img src="https://img.shields.io/badge/cartas-303-9a6b3f?style=flat-square" alt="303 cartas no catálogo">
  <img src="https://img.shields.io/badge/licen%C3%A7a-MIT-bb8a5a?style=flat-square" alt="Licença MIT">
</p>

## ✨ O que você encontra

| Área | O que faz |
| --- | --- |
| **Fichário** | Mostra uma página com quatro bolsos proporcionais às cartas Pokémon. |
| **Todas as cartas** | Exibe o catálogo completo, com busca, filtros e ordenação — inclusive por data de lançamento. O botão de direção alterna qualquer critério entre crescente e decrescente. |
| **Ficha da carta** | Guarda aquisição, valor pago, referência da Liga Pokémon e observações. |
| **Páginas** | Permite criar páginas ilimitadas, renomeá-las e trocar cartas de lugar. |
| **Resumo** | Soma o valor pago, a referência registrada e as cartas vindas de boosters. |
| **Portabilidade** | Exporta e importa um arquivo JSON para continuar a coleção em outro computador. |

## 🦴 Catálogo fóssil

O catálogo reúne **303 impressões físicas** relacionadas ao tema:

- **217 cartas de Pokémon fósseis**, incluindo Omanyte, Omastar, Kabuto, Kabutops, Aerodactyl, Lileep, Cradily, Anorith, Armaldo, Cranidos, Rampardos, Shieldon, Bastiodon, Tirtouga, Carracosta, Archen, Archeops, Tyrunt, Tyrantrum, Amaura, Aurorus, Dracozolt, Arctozolt, Dracovish e Arctovish;
- **86 cartas temáticas**, com fósseis, escavações, ruínas, minas, pesquisadores, museus e cartas como Fossil Researcher, Fossil Excavation Map, Fossil Quarry, Mysterious Fossil, Unidentified Fossil, Rare Fossil e Cara Liss.

## 🧭 Como usar

### 1. Escolha uma carta

Na coluna **Cartas disponíveis**, use a busca, selecione uma família ou filtre por **Pokémon**, **Temáticas** ou **No fichário**.

### 2. Coloque no fichário

Arraste a carta para um dos quatro bolsos. Em telas touch ou quando o arraste não estiver disponível, use o botão **＋** da carta.

### 3. Registre sua história

Clique na carta colocada para abrir a ficha. Ali você pode selecionar:

- **Compra avulsa**, **Booster**, **Troca**, **Presente** ou **Não informado**;
- valor que você pagou;
- referência de valor da Liga Pokémon;
- observações sobre condição, idioma, coleção ou onde conseguiu a carta.

### 4. Monte novas páginas

Use **Próxima página** para criar uma nova folha. O título de cada página pode ser personalizado — por exemplo, “Fósseis de Kanto” ou “Era Mesozoica”.

## 💾 Dados e portabilidade

O catálogo e o aplicativo são públicos no GitHub Pages. Já suas cartas colocadas, valores e anotações ficam salvos no **armazenamento local do navegador** e não são enviados para o repositório.

Para levar a coleção para outro computador:

1. No computador atual, clique em **Exportar** e salve o arquivo JSON;
2. Abra o fichário no outro computador;
3. Clique em **Importar** e selecione o JSON salvo.

Isso também funciona entre navegadores diferentes. Cada dispositivo mantém sua própria cópia até que você importe uma atualização.

## 💰 Sobre os valores

Cada ficha possui um link de consulta para a Liga Pokémon. O **valor mínimo Liga** é preenchido automaticamente a partir do snapshot publicado; o campo **valor que paguei** continua editável para registrar seu gasto real.

Os preços publicados são referências do catálogo público CyndaQ, coletadas na Liga Pokémon. A ficha informa a data observada e abre o anúncio correspondente à mesma carta. Não são cotações em tempo real; condição, idioma e acabamento podem variar. O valor pago pelo usuário permanece separado.

Na revisão de 17/09/2026, **288 das 303 cartas** possuem referência. Foram preenchidas 36 lacunas e corrigidas cinco associações de EX Holon Phantoms, incluindo três valores zero. As 15 restantes são identificadas como sem cotação, com o motivo na ficha: preço indisponível na fonte, edição ausente ou impressão ainda sem correspondência. Isso não significa que a carta não tenha anúncios na Liga.

Para atualizar as lacunas a partir da fonte pública, execute `node scripts/refresh-liga-prices.mjs`; para validar os dados e a ordenação, execute `node scripts/test-liga-prices.mjs`. A importação cruza código e ID da edição, nome e número de colecionador. Não substitui uma impressão por outra apenas por compartilhar o mesmo número, nem usa a versão oversized para preencher uma promoção comum. Após atualizar preços, revise os resultados e atualize a versão dos arquivos em `dist/index.html` antes de publicar.

As URLs da Liga Pokémon são geradas a partir de componentes validados quando eles existem: edição, `edid`, código `ed`, número de colecionador e número Liga. Dados ainda não confirmados ficam como **pendentes de validação**, sem preço inventado e sem transformar busca genérica em preço oficial.

## 🚀 Publicação no GitHub Pages

O repositório já inclui o fluxo em [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), que publica a pasta [`dist/`](dist/) sempre que há uma atualização na branch `main`.

Para ativar:

1. Abra **Settings → Pages** no repositório;
2. Em **Build and deployment**, selecione **GitHub Actions**;
3. Aguarde a execução do fluxo **Publicar fichário no GitHub Pages**;
4. Acesse o endereço exibido pelo GitHub, no formato `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## 🔄 Como continuar em outra máquina

O GitHub é a fonte oficial do código. A pasta `dist/` contém a versão que o GitHub Pages publica; portanto, não é necessário copiar arquivos manualmente entre computadores.

Em uma máquina nova, clone o repositório uma vez:

```bash
git clone https://github.com/magoris19/museu-fossil-pokemon-binder.git
cd museu-fossil-pokemon-binder
```

Antes de continuar um trabalho em uma cópia já clonada, sincronize-a:

```bash
git pull --ff-only origin main
```

Também existe o atalho `scripts/sync-latest.ps1` para Windows. Ele interrompe a atualização se houver alterações locais não salvas, evitando que uma máquina sobrescreva o trabalho de outra.

As cartas colocadas no fichário, os valores pagos e as observações ficam no navegador, não no GitHub. Para levar esses dados junto, use **Exportar** em uma máquina e **Importar** na outra.

## 🧱 Estrutura do projeto

```text
.
├── .github/workflows/deploy-pages.yml  # publicação automática
├── dist/
│   ├── index.html                       # interface principal
│   ├── styles.css                       # visual do museu e do fichário
│   ├── app.js                           # interação e salvamento local
│   ├── cards-data.js                     # catálogo de cartas
│   ├── liga-data.js                      # dados validados da Liga Pokémon
│   └── .nojekyll                         # evita processamento Jekyll
└── README.md
```

O site é estático: não precisa de servidor próprio, banco de dados ou instalação de dependências para funcionar.

## 📚 Fontes e direitos

- Catálogo e imagens: [TCGdex](https://tcgdex.dev/);
- Código deste projeto: [MIT License](LICENSE);
- As imagens das cartas, nomes Pokémon e marcas relacionadas continuam pertencendo aos respectivos titulares. A licença MIT cobre apenas o código deste repositório.

<p align="center"><sub>Feito para organizar uma coleção fóssil, uma carta por vez.</sub></p>

