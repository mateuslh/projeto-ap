# Apartamento M&I

<div class="crumb" markdown>
:material-home-variant-outline: **Solicitações de alteração** &nbsp;·&nbsp; 2 blocos &nbsp;·&nbsp; 9 ambientes &nbsp;·&nbsp; 35 itens
</div>

Registro das alterações solicitadas ao projeto de interiores do apartamento. As solicitações se
organizam em ==blocos de ambientes==, e cada bloco acumula suas ==revisões==. Cada item é
numerado, com tipo, dependências e critério de aceite, de modo que o acompanhamento do
detalhamento possa ser feito item a item.

[:material-book-open-variant: Como ler este documento](convencoes.md){ .md-button .md-button--primary }

## Blocos

<div class="grid cards" markdown>

-   :material-bed-king-outline:{ .lg .middle } &nbsp; **Privativos**

    ---

    Escritório, suíte, banho suíte e banho social. Referenciados página a
    página no caderno **ETAPA CRIATIVA APTO M&I**.

    1 revisão &nbsp;·&nbsp; 23 itens

    `change`{ .t .t-change } 9 &nbsp; `feat`{ .t .t-feat } 9 &nbsp; `spike`{ .t .t-spike } 5

    [:octicons-arrow-right-24: Abrir o bloco](privativos/index.md)

-   :material-sofa-outline:{ .lg .middle } &nbsp; **Sociais e de serviço**

    ---

    Sala, cozinha, lavanderia, quarto de hóspede/filho e os itens transversais
    a todo o apartamento. Sem baseline registrado.

    1 revisão &nbsp;·&nbsp; 12 itens

    `change`{ .t .t-change } 4 &nbsp; `feat`{ .t .t-feat } 4 &nbsp; `spike`{ .t .t-spike } 4

    [:octicons-arrow-right-24: Abrir o bloco](sociais/index.md)

</div>

## Como o registro se organiza

```text
bloco de ambientes
└── revisão
    └── ambiente
        └── item  ·  tipo, dependências, critério de aceite
```

Uma revisão publicada não é reescrita. Novas solicitações para um ambiente abrem a **revisão
seguinte dentro do mesmo bloco**, e a numeração dos IDs continua de onde parou — `SAL-04` vem
depois de `SAL-03`, esteja em que revisão estiver.

## Panorama

| Bloco | Ambientes | Revisões | Itens | `change`{ .t .t-change } | `feat`{ .t .t-feat } | `spike`{ .t .t-spike } |
|---|---:|---:|---:|---:|---:|---:|
| [Privativos](privativos/index.md) | 4 | 1 | 23 | 9 | 9 | 5 |
| [Sociais e de serviço](sociais/index.md) | 5 | 1 | 12 | 4 | 4 | 4 |
| **Total** | **9** | **2** | **35** | **13** | **13** | **9** |

## Ambientes cobertos

<div class="grid cards" markdown>

-   **Privativos** — [revisão 1](privativos/r1/index.md)

    :material-desk: [Escritório](privativos/r1/escritorio.md) &nbsp;·&nbsp;
    :material-bed-king-outline: [Suíte](privativos/r1/suite.md) &nbsp;·&nbsp;
    :material-shower-head: [Banho suíte](privativos/r1/banho-suite.md) &nbsp;·&nbsp;
    :material-toilet: [Banho social](privativos/r1/banho-social.md)

-   **Sociais e de serviço** — [revisão 1](sociais/r1/index.md)

    :material-sofa-outline: [Sala](sociais/r1/sala.md) &nbsp;·&nbsp;
    :material-countertop-outline: [Cozinha](sociais/r1/cozinha.md) &nbsp;·&nbsp;
    :material-washing-machine: [Lavanderia](sociais/r1/lavanderia.md) &nbsp;·&nbsp;
    :material-bed-outline: [Quarto de hóspede/filho](sociais/r1/hospede.md) &nbsp;·&nbsp;
    :material-power-socket-de: [Todos os cômodos](sociais/r1/geral.md)

</div>

!!! note "Sobre os critérios de aceite"

    Os critérios estão em formato de checklist e são o instrumento de verificação da entrega.
    Um item só é dado por atendido quando **todos** os seus critérios estiverem marcados, e
    itens `spike`{ .t .t-spike } exigem, além do desenho, um parecer explícito a favor ou
    contra a hipótese.
