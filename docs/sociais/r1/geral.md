# 5. Todos os cômodos

<div class="crumb" markdown>
:material-power-socket-de: [Sociais e de serviço](../index.md) › [Revisão 1](index.md) › **Todos os cômodos** &nbsp;·&nbsp; 2 itens &nbsp;·&nbsp; [:material-book-open-variant: Como ler](../../convencoes.md)
</div>

Itens transversais, aplicáveis a todos os ambientes do apartamento, inclusive aos tratados no
[R1](../../privativos/r1/index.md). Ambos partem da infraestrutura elétrica ==já existente==, e não de pontos novos.

| ID | Item | Tipo | Depende de |
|---|---|---|---|
| [`GER-01`](#ger-01) | Compatibilização dos pontos de tomada existentes | `change`{ .t .t-change } | — |
| [`GER-02`](#ger-02) | Torres de tomada nos pontos existentes | `spike`{ .t .t-spike } | [`GER-01`](#ger-01) |

## GER-01. Compatibilização dos pontos de tomada existentes { #ger-01 }

`change`{ .t .t-change title="Alteração de algo já projetado" }

Não se trata de rever o projeto elétrico nem de propor pontos novos. O que se pede é considerar, no desenho, os pontos de tomada que ==já existem== no apartamento: identificar onde eles estão e verificar se o projeto os contempla na posição em que se encontram.

!!! example "Caso concreto"

    Há ponto existente que hoje passa despercebido no desenho. Na pia da sala existe uma tomada
    que não está prevista no mármore, exatamente no trecho em que ela se encontra.

!!! aceite "Critério de aceite"

    - [ ] Pontos de tomada existentes identificados por ambiente
    - [ ] Cada ponto conferido contra a marcenaria, a bancada e o revestimento projetados na sua posição
    - [ ] Pontos hoje não contemplados no desenho incorporados ao projeto, com o recorte ou acabamento correspondente
    - [ ] Ponto da pia da sala previsto no mármore

## GER-02. Torres de tomada nos pontos existentes { #ger-02 }

`spike`{ .t .t-spike title="Exige estudo antes de virar decisão" } · depende de [`GER-01`](#ger-01)

A partir dos pontos levantados em [`GER-01`](#ger-01), indicar onde vale trocar a tomada aparente por uma torre de tomada embutida — ponto escamoteável, alojado na bancada ou no tampo e recolhido quando fora de uso.

Não se trata de propor torre em todo ponto existente. A troca se justifica onde os ==dois critérios abaixo== se encontram:

| Critério | Leitura |
|---|---|
| **Demanda** | O trecho pede mais tomadas do que o ponto existente oferece. |
| **Partido** | Faz sentido tirar a entrada da vista ali, seja porque a tomada aparente compromete o acabamento, seja porque ela cai em superfície de uso. |

Onde só um dos dois se aplica, ou nenhum, o ponto permanece como está.

!!! abstract "Escopo do estudo"

    Interessa saber em quais pontos os dois critérios se encontram e, nesses, se o embutimento
    é construtivamente possível, considerando a espessura da bancada e o espaço livre abaixo
    dela. A resposta é a lista dos pontos que recebem torre, com a justificativa de cada um.

!!! aceite "Critério de aceite"

    - [ ] Pontos existentes avaliados quanto à demanda por tomadas adicionais
    - [ ] Pontos em que a entrada aparente convém desaparecer identificados
    - [ ] Pontos que atendem aos dois critérios avaliados quanto à viabilidade construtiva do embutimento
    - [ ] Torre alinhada à superfície quando recolhida, sem ressalto aparente
    - [ ] Espaço livre sob a bancada conferido contra gabinetes, gavetas e instalações
    - [ ] Pontos que permanecem na configuração atual listados, com o motivo
