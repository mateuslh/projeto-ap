# Apartamento M&I — solicitações de alteração

Registro das alterações solicitadas ao projeto de interiores do apartamento. As solicitações se
organizam em **blocos de ambientes**, e cada bloco acumula suas **revisões**. Cada solicitação é
um item numerado, com tipo, dependências e critério de aceite em formato de checklist.

**Site publicado:** <https://mateuslh.github.io/projeto-ap/>

## Conteúdo

| Bloco | Ambientes | Revisões | Itens |
|---|---|---:|---:|
| [Privativos](docs/privativos/index.md) | Escritório, suíte, banho suíte, banho social | 1 | 23 |
| [Sociais e de serviço](docs/sociais/index.md) | Sala, cozinha, lavanderia, quarto de hóspede/filho, itens gerais | 1 | 12 |
| [Como ler](docs/convencoes.md) | Tipos de item, dependências e callouts | — | — |

## Estrutura do repositório

```text
docs/
  index.md            painel do projeto
  convencoes.md       tipos de item, dependências e callouts
  privativos/         bloco: escritório, suíte, banho suíte, banho social
    index.md          painel do bloco, com o histórico de revisões
    r1/
      index.md        visão geral da revisão 1
      escritorio.md   1. Escritório
      suite.md        2. Suíte
      banho-suite.md  3. Banho suíte
      banho-social.md 4. Banho social
  sociais/            bloco: sala, cozinha, lavanderia, hóspede/filho, gerais
    index.md          painel do bloco, com o histórico de revisões
    r1/
      index.md        visão geral da revisão 1
      sala.md         1. Sala
      cozinha.md      2. Cozinha
      lavanderia.md   3. Lavanderia
      hospede.md      4. Quarto de hóspede/filho
      geral.md        5. Todos os cômodos
  assets/             imagens de referência e CSS adicional
includes/
  abreviacoes.md      glossário anexado automaticamente a todas as páginas
mkdocs.yml            configuração do site
requirements.txt      dependências do build, com versões fixadas
.github/workflows/    pipeline de publicação no GitHub Pages
ETAPA CRIATIVA APTO M&I.pdf   caderno usado como baseline do bloco privativos
```

## Rodando localmente

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/mkdocs serve
```

O site fica em <http://127.0.0.1:8000>, com recarga automática a cada alteração nos arquivos de
`docs/`.

## Acompanhamento interativo

O indicador circular na barra superior abre o painel dos 35 itens. Nele é possível:

- atribuir os estados **Pendente**, **Em análise**, **Aprovado** e **Concluído**;
- buscar e filtrar solicitações por status ou tipo;
- marcar os 97 critérios de aceite diretamente nas páginas;
- exportar o acompanhamento em JSON e importá-lo em outro navegador;
- instalar o site como aplicativo e consultar páginas já visitadas mesmo sem conexão.

Os estados e checklists ficam no `localStorage` do navegador: não são enviados para terceiros nem
alteram os arquivos Markdown. O índice do painel e o service worker são gerados automaticamente
por `hooks/project_data.py` durante o build. Novos itens com IDs no formato `PREFIXO-NN` entram no
painel sem cadastro manual.

Para gerar o site estático em `site/`:

```bash
.venv/bin/mkdocs build
```

## Publicação

O workflow [`docs.yml`](.github/workflows/docs.yml) publica no GitHub Pages a cada push em
`main` que toque em `docs/`, `mkdocs.yml`, `requirements.txt` ou no próprio workflow. Também
pode ser disparado manualmente pela aba **Actions**.

O build roda com `strict: true`, o que faz a publicação falhar diante de qualquer aviso do
MkDocs — link interno quebrado e âncora inexistente incluídos. Um link errado derruba o
pipeline em vez de ir para o ar silenciosamente.

## Convenções de escrita

- Cada item recebe um ID estável no formato `PREFIXO-NN`, com o prefixo derivado do ambiente
  (`ESC`, `STE`, `BSU`, `BSO`, `SAL`, `COZ`, `LAV`, `HOS`, `GER`). IDs não são reaproveitados.
- O título de cada item carrega uma âncora explícita com o ID em minúsculas
  (`## SAL-01. … { #sal-01 }`), de modo que os links permaneçam válidos mesmo que o texto do
  título seja reescrito.
- O tipo é escrito como chip colorido, via `attr_list`: `` `change`{ .t .t-change } ``. As três
  variantes são `.t-change`, `.t-feat` e `.t-spike`, definidas em `docs/assets/extra.css`.
- O critério de aceite fica em um admonition próprio, `!!! aceite "Critério de aceite"`, também
  estilizado no `extra.css`.
- Termos recorrentes do vocabulário de marcenaria entram em `includes/abreviacoes.md` e viram
  tooltip em todas as páginas, sem precisar de repetição no texto.
- Os blocos visuais são HTML com o atributo `markdown`, estilizados em `docs/assets/extra.css`:
  `.stats` e `.mix` (números e composição da revisão), `.itemmap` (mapa de itens por ambiente),
  `.facts` (ficha do item), `.shift` (o que está projetado hoje × o que se pede) e
  `figure.dgm` (esquemas de decisão em SVG). Sem o atributo `markdown`, links e ícones dentro
  desses blocos não são processados — e um link `.md` não resolvido escapa do `strict`.
- Os esquemas em SVG tratam de **decisão, não de forma**: ordem de resolução, alternativas e
  critérios. Desenhar a peça é do projetista, e o registro não se antecipa a isso.
- Todo item declara tipo (`change`, `feat` ou `spike`), dependências e critério de aceite.
- Alterações no conteúdo entram por revisão: uma revisão publicada não é reescrita, e novas
  solicitações abrem a revisão seguinte **dentro do mesmo bloco**.

## Abrindo uma revisão nova

1. Crie a pasta `docs/<bloco>/r<N>/` com um `index.md` e uma página por ambiente tocado.
2. Registre a revisão no `nav` do `mkdocs.yml`, dentro do bloco correspondente.
3. Acrescente a linha na tabela **Revisões** do painel do bloco
   (`docs/<bloco>/index.md`) e atualize as contagens dele e da home.
4. Continue a numeração dos IDs de onde parou: se a revisão 1 fechou em `SAL-03`,
   a revisão 2 começa em `SAL-04`.

Nada precisa ser renomeado: as revisões anteriores permanecem nas URLs em que já estão.
