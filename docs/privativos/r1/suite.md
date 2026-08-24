# 2. Suíte

<div class="crumb" markdown>
:material-bed-king-outline: [Privativos](../index.md) › [Revisão 1](index.md) › **Suíte** &nbsp;·&nbsp; 10 itens &nbsp;·&nbsp; [:material-book-open-variant: Como ler](../../convencoes.md)
</div>

!!! quote "Referência no baseline"

    **págs. 9 a 18**, sendo a planta de layout na pág. 10 e as perspectivas nas págs. 11 a 18.

| ID | Item | Tipo | Depende de |
|---|---|---|---|
| [`STE-01`](#ste-01) | Substituição do verde por tom mais sóbrio | `change`{ .t .t-change } | — |
| [`STE-02`](#ste-02) | Guarda-roupa com quatro portas e mais cabideiros | `change`{ .t .t-change } | — |
| [`STE-03`](#ste-03) | Penteadeira na posição atual dos cabideiros | `change`{ .t .t-change } | — |
| [`STE-04`](#ste-04) | LED no espelho da penteadeira | `feat`{ .t .t-feat } | `STE-03` |
| [`STE-05`](#ste-05) | Realocação dos cabideiros para a parede atrás da porta | `spike`{ .t .t-spike } | `STE-03` |
| [`STE-06`](#ste-06) | Divisórias nas gavetas da penteadeira | `feat`{ .t .t-feat } | `STE-03` |
| [`STE-07`](#ste-07) | Ampliação da iluminação indireta | `change`{ .t .t-change } | — |
| [`STE-08`](#ste-08) | Portas do roupeiro integralmente espelhadas | `change`{ .t .t-change } | `STE-02` |
| [`STE-09`](#ste-09) | Definição da posição do sapateiro | `spike`{ .t .t-spike } | — |
| [`STE-10`](#ste-10) | Estudo de segunda gaveta com divisórias no armário | `spike`{ .t .t-spike } | `STE-02` |

## STE-01. Substituição do verde por tom mais sóbrio { #ste-01 }

`change`{ .t .t-change title="Alteração de algo já projetado" } · págs. 11 a 18

O verde aplicado no ambiente não atendeu à expectativa. A direção é uma cor mais sóbria, com a paleta geral puxada para tons neutros.

!!! aceite "Critério de aceite"

    - [ ] Nova paleta em tons neutros definida
    - [ ] Parede com cor mais neutra/masculina.

## STE-02. Guarda-roupa com quatro portas { #ste-02 }

`change`{ .t .t-change title="Alteração de algo já projetado" } · págs. 11 a 18

O guarda-roupa passa a ter **quatro portas**, com ampliação da quantidade de cabideiros em sua configuração interna. A nova porta poderá corresponder a um módulo de cabideiros no canto esquerdo, facilitando o acesso às roupas em razão da proximidade com a penteadeira. As demais portas deverão ser deslocadas para a direita(`p + 1`).

!!! aceite "Critério de aceite"

    - [ ] Guarda-roupa com quatro portas
    - [ ] Vista interna com metragem linear de cabide superior à do baseline
    - [ ] Guarda-roupa ocupa a parede de forma integral

## STE-03. Penteadeira na posição atual dos cabideiros { #ste-03 }

`change`{ .t .t-change title="Alteração de algo já projetado" } · págs. 11 a 18 · acoplado a `STE-05`

A penteadeira sai da posição projetada e assume o lugar hoje destinado aos ganchos.

!!! aceite "Critério de aceite"

    - [ ] Planta e elevação revisadas com a penteadeira na nova posição

## STE-04. LED no espelho da penteadeira { #ste-04 }

`feat`{ .t .t-feat title="Item novo, sem correspondente no baseline" } · págs. 11 a 18 · depende de `STE-03`

Iluminação em LED integrada ao espelho da penteadeira.

!!! aceite "Critério de aceite"

    - [ ] Detalhamento do espelho com LED

## STE-05. Realocação dos cabideiros para a parede atrás da porta { #ste-05 }

`spike`{ .t .t-spike title="Exige estudo antes de virar decisão" } · pág. 10, págs. 11 a 18 · acoplado a `STE-03`

Com a penteadeira assumindo o lugar dos cabideiros, a hipótese é transferi-los para a parede atrás da porta. Pedimos que a possibilidade seja analisada antes de virar decisão.

!!! warning "Restrições a verificar"

    Abertura da porta, circulação resultante e leitura estética da parede. Caso alguma delas inviabilize a solução, desconsiderar.

!!! aceite "Critério de aceite"

    - [ ] Parecer de viabilidade
    - [ ] Solução desenhada, se viável

## STE-06. Divisórias nas gavetas da penteadeira { #ste-06 }

`feat`{ .t .t-feat title="Item novo, sem correspondente no baseline" } · págs. 11 a 18 · depende de `STE-03`

Gavetas da penteadeira compartimentadas internamente.

!!! aceite "Critério de aceite"

    - [ ] Detalhamento interno das gavetas com divisórias

## STE-07. Ampliação da iluminação indireta { #ste-07 }

`change`{ .t .t-change title="Alteração de algo já projetado" } · págs. 11 a 18

Aumentar a quantidade de luz indireta no ambiente em relação ao que foi apresentado.

!!! aceite "Critério de aceite"

    - [ ] Projeto revisado com mais pontos de iluminação indireta

## STE-08. Portas do roupeiro integralmente espelhadas { #ste-08 }

`change`{ .t .t-change title="Alteração de algo já projetado" } · págs. 11 a 18 · relacionado a `STE-02`

O roupeiro deve ter espelho em **todas** as portas, e não apenas em parte delas.

!!! aceite "Critério de aceite"

    - [ ] Elevação do roupeiro com a totalidade das portas espelhadas
    - [ ] Compatibilização com o número de portas definido em `STE-02`

## STE-09. Definição da posição do sapateiro { #ste-09 }

`spike`{ .t .t-spike title="Exige estudo antes de virar decisão" } · págs. 11 a 18

O sapateiro está previsto dentro do armário. Avaliar se ele permanece nessa posição ou se migra para a lavanderia, o que exige verificação prévia do espaço disponível naquele ambiente.

!!! warning "Impacto"

    A decisão altera a configuração interna do armário e deve ser resolvida antes do detalhamento da marcenaria.

!!! aceite "Critério de aceite"

    - [ ] Levantamento do espaço disponível na lavanderia
    - [ ] Parecer comparando as duas hipóteses, com recomendação de qual adotar

## STE-10. Estudo de segunda gaveta com divisórias no armário { #ste-10 }

`spike`{ .t .t-spike title="Exige estudo antes de virar decisão" } · págs. 11 a 18 · relacionado a `STE-02`

O armário já conta com **uma** gaveta com divisórias para acessórios. Avaliar a possibilidade de haver **duas**, sem prejuízo das demais funções internas do móvel.

!!! aceite "Critério de aceite"

    - [ ] Detalhamento interno das duas gavetas, se viável
