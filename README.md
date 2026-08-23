# Apartamento M&I — solicitações de alteração

Registro das alterações solicitadas ao projeto de interiores do apartamento, organizado por
revisão e por ambiente. Cada solicitação é um item numerado, com tipo, dependências e critério
de aceite em formato de checklist.

**Site publicado:** <https://mateuslh.github.io/projeto-ap/>

## Conteúdo

| Documento | Escopo | Itens |
|---|---|---:|
| [R1](docs/r1.md) | Escritório, suíte, banho suíte, banho social | 23 |
| [R2](docs/r2.md) | Sala, cozinha, lavanderia, quarto de hóspede, geral | 11 |
| [Como ler](docs/convencoes.md) | Tipos de item, dependências e callouts | — |

## Estrutura do repositório

```text
docs/
  index.md            página inicial do site
  convencoes.md       tipos de item, dependências e callouts
  r1.md               revisão R1
  r2.md               revisão R2
  assets/             imagens de referência e CSS adicional
mkdocs.yml            configuração do site
requirements.txt      dependências do build, com versões fixadas
.github/workflows/    pipeline de publicação no GitHub Pages
ETAPA CRIATIVA APTO M&I.pdf   caderno usado como baseline da revisão R1
```

## Rodando localmente

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/mkdocs serve
```

O site fica em <http://127.0.0.1:8000>, com recarga automática a cada alteração nos arquivos de
`docs/`.

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
- Todo item declara tipo (`change`, `feat` ou `spike`), dependências e critério de aceite.
- Alterações no conteúdo entram por revisão: uma revisão publicada não é reescrita, e novas
  solicitações abrem a revisão seguinte.
