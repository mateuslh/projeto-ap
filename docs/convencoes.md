# Como ler este documento

<div class="crumb" markdown>
:material-home-outline: [Início](index.md) › **Como ler** &nbsp;·&nbsp; convenções aplicáveis a todas as revisões
</div>

Cada revisão reúne as alterações solicitadas a um conjunto de ambientes. Os ambientes são
organizados em **módulos**, e cada módulo abre com um quadro de itens antes do detalhamento
individual.

## Tipos de item

| Tipo | Significado | O que se espera de volta |
|---|---|---|
| `change`{ .t .t-change } | Alteração de algo já projetado | Desenho revisado |
| `feat`{ .t .t-feat } | Item novo, sem correspondente no baseline | Detalhamento da peça nova |
| `spike`{ .t .t-spike } | Exige estudo antes de virar decisão | Estudo **e** parecer com recomendação |

!!! abstract "Sobre os itens `spike`{ .t .t-spike }"

    Itens do tipo `spike` não têm solução predefinida: o retorno esperado é um parecer com
    recomendação, que pode ser contrária à hipótese levantada. Registrar a recomendação faz
    parte da entrega, mesmo quando ela for por descartar a hipótese.

## Anatomia de um item

Todo item segue a mesma estrutura, na ordem abaixo.

Título

:   Traz o **ID estável** do item e o resumo da solicitação em uma linha —
    por exemplo, `SAL-02. Gaveta oculta no aparador da entrada`.

Linha de metadados

:   Logo abaixo do título, declara o **tipo**, a **referência de página** no baseline, quando
    existir, e as **dependências** em relação aos demais itens.

Descrição

:   O corpo da solicitação, eventualmente acompanhado de callouts. Trechos ==destacados assim==
    marcam o ponto central do pedido.

Critério de aceite

:   Fecha o item, em formato de checklist. É o instrumento de verificação da entrega.

O resultado tem esta aparência:

---

### PRE-00. Título do item { #exemplo data-toc-label="Exemplo de item" }

`change`{ .t .t-change title="Alteração de algo já projetado" } · págs. 5 a 8 · depende de `ESC-01`

Descrição da solicitação, com o ponto central ==destacado== quando ajudar a leitura.

!!! aceite "Critério de aceite"

    - [x] critério já atendido
    - [ ] critério pendente

---

## Dependências

O quadro de cada módulo traz a coluna **Depende de**. Um item que depende de outro só deve ser
detalhado depois que o item anterior estiver resolvido, sob pena de retrabalho. As relações
aparecem em três formas:

| Expressão | Leitura | Precedência |
|---|---|---|
| `depende de X` | este item pressupõe a decisão tomada em `X` | obrigatória |
| `acoplado a X` | os dois itens são a mesma decisão vista de dois ângulos e se resolvem juntos | simultânea |
| `relacionado a X` | há compatibilização a fazer | livre |

!!! tip "Onde ver o mapa"

    A revisão R2 traz o grafo dessas relações em
    [Ordem de resolução](r2/index.md#ordem-de-resolução), com os itens de partida no início da
    cadeia.

## Callouts

As caixas destacadas ao longo do texto têm função fixa.

!!! note "Nota"

    Contexto ou esclarecimento sobre o item. Não acrescenta requisito.

!!! abstract "Escopo do estudo"

    Em itens `spike`, delimita o que o parecer precisa responder.

!!! example "Caso concreto"

    Exemplo real observado no apartamento que motivou a solicitação.

!!! warning "Restrições a verificar"

    Condições que podem inviabilizar a solução proposta e devem ser checadas antes da decisão.

!!! tip "Caminho possível"

    Sugestão de solução, sem constituir requisito fechado. A decisão final é do projetista.

!!! failure "Critério de descarte"

    Condição sob a qual a solicitação deve ser abandonada em vez de forçada.

!!! aceite "Critério de aceite"

    Fecha todo item. Um item só é dado por atendido quando **todos** os seus critérios
    estiverem marcados.

## Abas

Quando um item apresenta configurações alternativas, elas vêm em abas, na ordem de preferência.

=== ":material-numeric-1-circle: Hipótese principal"

    A configuração que se busca desenhar primeiro.

=== ":material-numeric-2-circle: Alternativa"

    A configuração de recurso, adotada apenas se a principal for descartada.

## Navegação

- O **menu lateral** lista as revisões e, dentro da R2, um módulo por ambiente.
- O **sumário à direita** lista os itens da página, pelo ID.
- Cada item tem âncora curta e estável: `SAL-01` responde por `#sal-01`, e o link continua
  válido mesmo que o texto do título seja reescrito.
- A busca cobre as duas revisões. Pressione ++f++ ou ++s++ para abri-la.
