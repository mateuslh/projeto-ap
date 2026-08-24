# 2. Cozinha

<div class="crumb" markdown>
:material-countertop-outline: [Sociais e de serviço](../index.md) › [Revisão 1](index.md) › **Cozinha** &nbsp;·&nbsp; 4 itens &nbsp;·&nbsp; [:material-book-open-variant: Como ler](../../convencoes.md)
</div>

| ID | Item | Tipo | Depende de |
|---|---|---|---|
| [`COZ-01`](#coz-01) | Estudo de troca de posição entre geladeira e torre quente | `spike`{ .t .t-spike } | — |
| [`COZ-02`](#coz-02) | Supressão do passa-pratos | `change`{ .t .t-change } | — |
| [`COZ-03`](#coz-03) | Lixeira embutida na bancada de mármore | `feat`{ .t .t-feat } | — |
| [`COZ-04`](#coz-04) | Estudo de cristaleira voltada para o corredor | `spike`{ .t .t-spike } | relacionado a [`SAL-03`](sala.md#sal-03) |

## COZ-01. Estudo de troca de posição entre geladeira e torre quente { #coz-01 }

`spike`{ .t .t-spike title="Exige estudo antes de virar decisão" }

<div class="lede" markdown>
Avaliar a inversão entre a geladeira e a torre quente, nas duas configurações abaixo, ==na ordem
de preferência indicada==.
</div>

<div class="facts">
<div><span class="k">Preferência</span><span class="v">A hipótese 1 é a que se desenha primeiro.</span></div>
<div><span class="k">Se não couber</span><span class="v">A hipótese 2 entra, e o descarte da 1 vem dito.</span></div>
<div><span class="k">Retorno esperado</span><span class="v">Estudo desenhado e recomendação de qual adotar.</span></div>
</div>

=== ":material-numeric-1-circle: Hipótese principal"

    A geladeira assume a posição hoje ocupada pela torre quente, reduzindo-se a largura do
    armário lateral caso isso seja necessário para acomodá-la. A torre quente é deslocada para
    a esquerda, passando a ficar ao lado da porta da lavanderia.

    **Configuração preferida.** É a que se busca desenhar primeiro.

=== ":material-numeric-2-circle: Alternativa"

    Caso o deslocamento da torre quente para junto da porta da lavanderia não seja viável, ela
    assume diretamente a posição hoje ocupada pela geladeira, configurando uma permuta simples
    entre as duas peças.

    **Configuração de recurso.** Só entra se a hipótese principal for descartada.

!!! aceite "Critério de aceite"

    - [ ] Estudo desenhado da hipótese principal, com a nova largura do armário lateral indicada
    - [ ] Estudo desenhado da alternativa, caso a hipótese principal se mostre inviável
    - [ ] Recomendação explícita de qual configuração adotar

## COZ-02. Supressão do passa-pratos { #coz-02 }

`change`{ .t .t-change title="Alteração de algo já projetado" }

<div class="lede" markdown>
O passa-pratos deve ser removido do projeto. ==Não há abertura a fechar:== o trecho simplesmente
deixa de receber a peça e fica livre.
</div>

<div class="shift" markdown>
<div class="from" markdown>
<span class="k">Hoje</span>
O passa-pratos consta do projeto, entre a cozinha e o ambiente vizinho.
</div>
<div class="arrow">→</div>
<div class="to" markdown>
<span class="k">Proposto</span>
A peça sai de plantas, elevações e perspectivas. Nada precisa entrar no lugar — a não ser que o
vazio resultante pese na leitura da parede.
</div>
</div>

!!! warning "Ponto de atenção"

    Com a retirada, o único cuidado é conferir se o trecho não fica como uma área vazia grande demais na cozinha. Se ficar, indicar o que ocupa esse espaço, seja marcenaria, seja outro elemento de sua escolha.

!!! aceite "Critério de aceite"

    - [ ] Passa-pratos suprimido de plantas, elevações e perspectivas
    - [ ] Trecho resultante avaliado quanto à proporção de área vazia
    - [ ] Destinação do espaço indicada, caso a área vazia se mostre excessiva

## COZ-03. Lixeira embutida na bancada de mármore { #coz-03 }

`feat`{ .t .t-feat title="Item novo, sem correspondente no baseline" }

<div class="lede" markdown>
A bancada de mármore deve receber lixeira embutida de pequeno porte, do tipo balde, apenas para
descarte imediato durante o preparo. ==Não substitui a lixeira principal da cozinha:== o
recipiente é raso, encaixado no recorte do mármore e removível pelo tampo para esvaziamento.
</div>

<div class="facts" markdown>
<div><span class="k">Função</span><span class="v">Descarte imediato durante o preparo.</span></div>
<div markdown><span class="k">Não é</span><span class="v">A lixeira principal — essa fica na lavanderia, em [`LAV-02`](lavanderia.md#lav-02).</span></div>
<div><span class="k">Manejo</span><span class="v">Recipiente sai pelo tampo, sem abrir o gabinete.</span></div>
</div>



!!! aceite "Critério de aceite"

    - [ ] Recorte no mármore detalhado, com tampa alinhada ao tampo
    - [ ] Recipiente de pequeno volume, removível pelo tampo para esvaziamento e higienização
    - [ ] Posição compatível com a área de preparo e com a cuba
    - [ ] Profundidade do recipiente compatível com o gabinete inferior, sem conflito com gavetas e instalações

## COZ-04. Estudo de cristaleira voltada para o corredor { #coz-04 }

`spike`{ .t .t-spike title="Exige estudo antes de virar decisão" } · relacionado a [`SAL-03`](sala.md#sal-03), [`COZ-01`](#coz-01)

<div class="lede" markdown>
Hipótese a avaliar: acomodar a cristaleira na cozinha, com a ==face de exposição voltada para o
corredor==, de modo que as peças sejam vistas de fora do ambiente e não a partir da área de
preparo.
</div>

A referência é um nicho estreito e vertical, embutido na lateral da torre de marcenaria, fechado
em vidro e com iluminação própria. É solução que ocupa pouca área de planta, porque aproveita a
espessura de um móvel que já existe.

<div class="facts" markdown>
<div><span class="k">Pergunta</span><span class="v">A lateral do módulo comporta o nicho na profundidade necessária?</span></div>
<div markdown><span class="k">Parte de</span><span class="v">A configuração recomendada em [`COZ-01`](#coz-01).</span></div>
<div><span class="k">Custo a medir</span><span class="v">Guarda perdida no módulo que recebe o nicho.</span></div>
</div>



!!! abstract "Escopo do estudo"

    Interessa saber se a lateral da marcenaria comporta o nicho na profundidade necessária, se a
    face resultante se lê bem a partir do corredor e se a peça não compromete a capacidade de
    guarda do módulo que a recebe. Como a posição da torre de marcenaria é o que se decide em
    [`COZ-01`](#coz-01), o estudo deve partir da configuração recomendada lá.

    A cozinha é ==uma das duas posições candidatas==. A outra é a sala, em
    [`SAL-03`](sala.md#sal-03). Os dois itens estudam a mesma peça e se respondem juntos.

!!! failure "Critério de descarte"

    Se a cristaleira não couber bem nem na cozinha nem na sala, ==o parecer negativo é resultado
    válido== e fecha os dois itens. Não se pede que a peça seja acomodada de todo jeito: o que
    se pede é a verificação das duas posições e uma resposta fundamentada, seja ela qual for.

<p class="medialbl" markdown>:material-image-outline: Imagem de referência</p>

![Nicho vertical em vidro embutido na lateral da torre de marcenaria, com prateleiras iluminadas por LED e base em mármore](../../assets/cristaleira_1.jpeg)

/// caption
Nicho estreito embutido na lateral do módulo, fechado em vidro e iluminado, com a face de
exposição voltada para fora da cozinha. A hipótese equivalente para a sala está em
[`SAL-03`](sala.md#sal-03), com referência própria.
///

!!! aceite "Critério de aceite"

    - [ ] Estudo com a cristaleira posicionada em planta e elevação, com a face de exposição voltada para o corredor
    - [ ] Profundidade disponível na lateral da marcenaria verificada contra a peça
    - [ ] Impacto na capacidade de guarda do módulo que recebe o nicho avaliado
    - [ ] Posição conferida contra a configuração recomendada em [`COZ-01`](#coz-01)
    - [ ] Iluminação da peça prevista, com o ponto elétrico conferido contra [`GER-01`](geral.md#ger-01)
    - [ ] Recomendação explícita a favor ou contra a inclusão na cozinha, articulada com o resultado de [`SAL-03`](sala.md#sal-03)
