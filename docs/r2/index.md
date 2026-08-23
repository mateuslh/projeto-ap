# Revisão R2 — Sala, cozinha e serviço

Complementa a [Revisão R1](../r1.md), que tratou de escritório, suíte, banho suíte e banho
social. Esta revisão trata dos ambientes sociais e de serviço e de um requisito elétrico
transversal a todo o apartamento.

**11 itens em 5 módulos.** Os tipos de item, as convenções de leitura e o significado dos
critérios de aceite estão descritos em **[Como ler este documento](../convencoes.md)**.

## Módulos

<div class="grid cards" markdown>

-   :material-sofa: **1. Sala**

    ---

    Gabinete sob a pia, gaveta oculta no aparador e estudo de cristaleira.

    [:octicons-arrow-right-24: 3 itens](sala.md)

-   :material-countertop: **2. Cozinha**

    ---

    Posição da geladeira, supressão do passa-pratos e lixeira embutida.

    [:octicons-arrow-right-24: 3 itens](cozinha.md)

-   :material-washing-machine: **3. Lavanderia**

    ---

    Tábua de passar embutida e lugar definido para a lixeira principal.

    [:octicons-arrow-right-24: 2 itens](lavanderia.md)

-   :material-bed: **4. Quarto de hóspede**

    ---

    Reformulação da escrivaninha para uso efetivo de estudo.

    [:octicons-arrow-right-24: 1 item](hospede.md)

-   :material-power-socket-de: **5. Todos os cômodos**

    ---

    Itens transversais de infraestrutura elétrica já existente.

    [:octicons-arrow-right-24: 2 itens](geral.md)

</div>

## Quadro geral de itens

| ID | Item | Módulo | Tipo | Depende de |
|---|---|---|---|---|
| [`SAL-01`](sala.md#sal-01) | Gabinete sob a pia estendido até o piso | Sala | `change` | |
| [`SAL-02`](sala.md#sal-02) | Gaveta oculta no aparador da entrada | Sala | `feat` | |
| [`SAL-03`](sala.md#sal-03) | Estudo de cristaleira | Sala | `spike` | |
| [`COZ-01`](cozinha.md#coz-01) | Estudo de troca de posição entre geladeira e torre quente | Cozinha | `spike` | |
| [`COZ-02`](cozinha.md#coz-02) | Supressão do passa-pratos | Cozinha | `change` | |
| [`COZ-03`](cozinha.md#coz-03) | Lixeira embutida na bancada de mármore | Cozinha | `feat` | |
| [`LAV-01`](lavanderia.md#lav-01) | Tábua de passar embutida | Lavanderia | `feat` | |
| [`LAV-02`](lavanderia.md#lav-02) | Lugar para lixeira de grande porte | Lavanderia | `feat` | |
| [`HOS-01`](hospede.md#hos-01) | Reformulação da escrivaninha para uso de estudo | Quarto de hóspede | `change` | |
| [`GER-01`](geral.md#ger-01) | Compatibilização dos pontos de tomada existentes | Todos os cômodos | `change` | |
| [`GER-02`](geral.md#ger-02) | Torres de tomada nos pontos existentes | Todos os cômodos | `spike` | `GER-01` |

## Composição por tipo

| Módulo | Itens | `change` | `feat` | `spike` |
|---|---:|---:|---:|---:|
| [Sala](sala.md) | 3 | 1 | 1 | 1 |
| [Cozinha](cozinha.md) | 3 | 1 | 1 | 1 |
| [Lavanderia](lavanderia.md) | 2 | — | 2 | — |
| [Quarto de hóspede](hospede.md) | 1 | 1 | — | — |
| [Todos os cômodos](geral.md) | 2 | 1 | — | 1 |
| **Total** | **11** | **4** | **4** | **3** |

!!! info "Referência de página"

    Diferentemente do R1, os itens desta revisão não trazem referência de página, pois os
    ambientes tratados aqui não constam do caderno usado como baseline naquela revisão. A
    localização de cada item se dá pelo ambiente. As referências de prancha serão incorporadas
    na consolidação, assim que o material correspondente for disponibilizado.
