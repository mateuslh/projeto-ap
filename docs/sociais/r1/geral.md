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

<div class="lede" markdown>
Não se trata de rever o projeto elétrico nem de propor pontos novos. O que se pede é considerar,
no desenho, os pontos de tomada que ==já existem== no apartamento: identificar onde eles estão e
verificar se o projeto os contempla na posição em que se encontram.
</div>

<div class="facts" markdown>
<div><span class="k">Entrada</span><span class="v">Os pontos que já existem, ambiente a ambiente.</span></div>
<div><span class="k">Saída</span><span class="v">Desenho que reconhece cada ponto na posição real.</span></div>
<div markdown><span class="k">Destrava</span><span class="v">[`LAV-01`](lavanderia.md#lav-01), [`HOS-01`](hospede.md#hos-01), [`COZ-04`](cozinha.md#coz-04) e [`GER-02`](#ger-02).</span></div>
</div>

<div class="shift" markdown>
<div class="from" markdown>
<span class="k">Hoje</span>
Há ponto existente que o desenho não reconhece — a tomada da pia da sala cai justamente no trecho
em que o mármore passa por cima.
</div>
<div class="arrow">→</div>
<div class="to" markdown>
<span class="k">Proposto</span>
O ponto não muda de lugar: o projeto é que passa a contemplá-lo, com o recorte ou o acabamento
correspondente.
</div>
</div>

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

<div class="lede" markdown>
A partir dos pontos levantados em [`GER-01`](#ger-01), indicar onde vale trocar a tomada aparente
por uma torre de tomada embutida — ponto escamoteável, alojado na bancada ou no tampo e
recolhido quando fora de uso.
</div>

<div class="facts" markdown>
<div markdown><span class="k">Parte de</span><span class="v">A lista de pontos existentes levantada em [`GER-01`](#ger-01).</span></div>
<div markdown><span class="k">Não é</span><span class="v">Torre em todo ponto — só onde os dois critérios se encontram.</span></div>
<div><span class="k">Retorno esperado</span><span class="v">Lista dos pontos que recebem torre, com justificativa.</span></div>
</div>

Não se trata de propor torre em todo ponto existente. A troca se justifica onde os ==dois
critérios abaixo== se encontram:

<figure class="dgm" markdown>
<svg viewBox="0 0 420 300" role="img" aria-label="Matriz de decisão cruzando demanda por tomadas e conveniência de esconder a entrada: só o encontro dos dois critérios justifica a torre">
<path class="s-thin" d="M92 40v218h300"/>
<text class="lbl" x="92" y="284">Demanda por mais tomadas</text>
<text class="lbl" x="56" y="150" transform="rotate(-90 56 150)" text-anchor="middle">Convém esconder a entrada</text>
<text class="cap" x="112" y="272">não</text>
<text class="cap" x="360" y="272">sim</text>
<text class="cap" x="88" y="250" text-anchor="end">não</text>
<text class="cap" x="88" y="62" text-anchor="end">sim</text>
<rect class="f-void" x="104" y="152" width="140" height="94" rx="4"/>
<text class="cap" x="174" y="196" text-anchor="middle">permanece</text>
<text class="cap" x="174" y="212" text-anchor="middle">como está</text>
<rect class="f-void" x="252" y="152" width="140" height="94" rx="4"/>
<text class="cap" x="322" y="196" text-anchor="middle">permanece</text>
<text class="cap" x="322" y="212" text-anchor="middle">como está</text>
<rect class="f-void" x="104" y="52" width="140" height="94" rx="4"/>
<text class="cap" x="174" y="96" text-anchor="middle">permanece</text>
<text class="cap" x="174" y="112" text-anchor="middle">como está</text>
<rect class="f-hl" x="252" y="52" width="140" height="94" rx="4"/>
<text class="hl-txt" x="322" y="92" text-anchor="middle">candidato a torre</text>
<text class="cap" x="322" y="110" text-anchor="middle">verificar o embutimento</text>
<text class="lbl" x="322" y="34" text-anchor="middle">Só este quadrante entra</text>
</svg>
<figcaption markdown>Só o encontro dos dois critérios coloca um ponto na lista. Nos três outros quadrantes a resposta já está dada: a tomada permanece na configuração atual — e o estudo registra o motivo.</figcaption>
</figure>

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
