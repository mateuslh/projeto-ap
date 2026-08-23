# Como ler este documento

Cada revisão reúne as alterações solicitadas a um conjunto de ambientes. Os ambientes são
organizados em **módulos**, e cada módulo abre com um quadro de itens antes do detalhamento
individual.

## Tipos de item

| Tipo | Significado |
|---|---|
| `change` | alteração de algo já projetado |
| `feat` | item novo, sem correspondente no baseline |
| `spike` | exige estudo antes de virar decisão |

!!! abstract "Sobre os itens `spike`"

    Itens do tipo `spike` não têm solução predefinida: o retorno esperado é um parecer com
    recomendação, que pode ser contrária à hipótese levantada. Registrar a recomendação faz
    parte da entrega, mesmo quando ela for por descartar a hipótese.

## Anatomia de um item

Todo item declara, na linha logo abaixo do título, o **tipo**, a **referência de página** no
baseline, quando existir, e as **dependências** em relação aos demais itens:

```text
`change` · págs. 5 a 8 · depende de `ESC-01`
```

Em seguida vem a descrição da solicitação e, ao final, o **critério de aceite**, em formato de
checklist para acompanhamento durante o detalhamento:

- [ ] item pendente
- [x] item atendido

## Dependências

O quadro de cada módulo traz a coluna **Depende de**. Um item que depende de outro só deve ser
detalhado depois que o item anterior estiver resolvido, sob pena de retrabalho. As relações
aparecem em três formas:

| Expressão | Leitura |
|---|---|
| `depende de X` | este item pressupõe a decisão tomada em `X` |
| `acoplado a X` | os dois itens são a mesma decisão vista de dois ângulos e se resolvem juntos |
| `relacionado a X` | há compatibilização a fazer, sem precedência obrigatória |

## Callouts

As caixas destacadas ao longo do texto têm função fixa:

!!! note "Nota"

    Contexto ou esclarecimento sobre o item. Não acrescenta requisito.

!!! abstract "Escopo do estudo"

    Em itens `spike`, delimita o que o parecer precisa responder.

!!! warning "Restrições a verificar"

    Condições que podem inviabilizar a solução proposta e devem ser checadas antes da decisão.

!!! tip "Caminho possível"

    Sugestão de solução, sem constituir requisito fechado. A decisão final é do projetista.

!!! failure "Critério de descarte"

    Condição sob a qual a solicitação deve ser abandonada em vez de forçada.
