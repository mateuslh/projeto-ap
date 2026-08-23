# 5. Todos os cômodos

> **R2** · 2 itens · [Visão geral da revisão](index.md) · [Como ler este documento](../convencoes.md)

Itens transversais, aplicáveis a todos os ambientes do apartamento, inclusive aos tratados no
[R1](../r1.md). Ambos partem da infraestrutura elétrica **já existente**, e não de pontos novos.

| ID | Item | Tipo | Depende de |
|---|---|---|---|
| [`GER-01`](#ger-01) | Compatibilização dos pontos de tomada existentes | `change` | |
| [`GER-02`](#ger-02) | Torres de tomada nos pontos existentes | `spike` | `GER-01` |

## GER-01. Compatibilização dos pontos de tomada existentes { #ger-01 }

`change`

Não se trata de rever o projeto elétrico nem de propor pontos novos. O que se pede é considerar, no desenho, os pontos de tomada que **já existem** no apartamento: identificar onde eles estão e verificar se o projeto os contempla na posição em que se encontram.

Há ponto existente que hoje passa despercebido no desenho. Na pia da sala, por exemplo, existe uma tomada que não está prevista no mármore, exatamente no trecho em que ela se encontra.

**Critério de aceite**

- [ ] Pontos de tomada existentes identificados por ambiente
- [ ] Cada ponto conferido contra a marcenaria, a bancada e o revestimento projetados na sua posição
- [ ] Pontos hoje não contemplados no desenho incorporados ao projeto, com o recorte ou acabamento correspondente
- [ ] Ponto da pia da sala previsto no mármore

## GER-02. Torres de tomada nos pontos existentes { #ger-02 }

`spike` · depende de `GER-01`

A partir dos pontos levantados em [`GER-01`](#ger-01), verificar em quais deles cabe uma torre de tomada embutida — ponto escamoteável, alojado na bancada ou no tampo e recolhido quando fora de uso. O caso mais imediato é o da pia da sala.

!!! abstract "Escopo do estudo"

    Interessa saber onde o embutimento é possível, considerando a espessura da bancada e o espaço livre abaixo dela. Onde não couber, o ponto permanece como está.

**Critério de aceite**

- [ ] Pontos existentes avaliados quanto à possibilidade de receber torre embutida
- [ ] Viabilidade do embutimento na pia da sala respondida de forma explícita
- [ ] Torre alinhada à superfície quando recolhida, sem ressalto aparente
- [ ] Espaço livre sob a bancada conferido contra gabinetes, gavetas e instalações
- [ ] Pontos em que o embutimento não é viável listados, mantidos na configuração atual
