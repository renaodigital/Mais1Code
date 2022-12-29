---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
title: Opcionais em Cadence? Não opcionais!
colors: colors-d
date: '2022-12-28'
excerpt: >-
  Os opcionais são uma forma de lidar com variáveis que podem ou não ter um
  valor. Eles permitem que você gerencie situações de erro e outras
  circunstâncias de maneira mais elegante, tornando explícito o estado vazio ou
  não disponível de uma variável. Para declarar um opcional, basta adicionar um
  símbolo de interrogação (?) após a declaração da variável. Por exemplo, se
  você quiser declarar uma variável chamada "nome" como opcional, pode escrever
  "nome var: String?" Isso diz que o valor de "nome" pode ser do tipo String ou
  pode ser nil (ou seja, não ter um valor). Nil é usado para representar a
  ausência de um valor e pode ser usado de maneira semelhante ao valor null em
  outras linguagens. Os opcionais são úteis porque permitem que o programador
  faça uma distinção explícita entre variáveis que têm valores e aquelas que não
  têm, o que pode ajudar a evitar erros no código e a torná-lo mais legível.
featuredImage:
  type: ImageBlock
  url: /images/Opcionais em Cadence diegofornalha.png
  altText: Opcionais em Cadence? Não opcionais!
  caption: >-
    Os opcionais são uma forma de lidar com variáveis que podem ou não ter um
    valor. Eles permitem que você gerencie situações de erro e outras
    circunstâncias de maneira mais elegante, tornando explícito o estado vazio
    ou não disponível de uma variável. Para declarar um opcional, basta
    adicionar um símbolo de interrogação (?) após a declaração da variável. Por
    exemplo, se você quiser declarar uma variável chamada "nome" como opcional,
    pode escrever "nome var: String?" Isso diz que o valor de "nome" pode ser do
    tipo String ou pode ser nil (ou seja, não ter um valor). Nil é usado para
    representar a ausência de um valor e pode ser usado de maneira semelhante ao
    valor null em outras linguagens. Os opcionais são úteis porque permitem que
    o programador faça uma distinção explícita entre variáveis que têm valores e
    aquelas que não têm, o que pode ajudar a evitar erros no código e a torná-lo
    mais legível.
media:
  type: ImageBlock
  url: /images/Opcionais em Cadence diegofornalha.png
  altText: Post image
bottomSections: []
metaDescription: null
socialImage: null
author: content/data/team/hilary-ouse.json
---
Se você é um novato, confira [minha postagem introdutória no blog para começar!](https://www.web3dev.com.br/diegofornalha/tomando-seus-primeiros-passos-com-cadence-397b)



# **O que são opcionais?**

Opcionais são uma forma de lidar com variáveis que podem ou não ter um valor. Eles permitem que gerencie situações de erro e outras circunstâncias de forma mais elegante, tornando explícito o estado vazio ou não disponível de uma variável.

Para declarar basta adicionar um símbolo de interrogação **?** após a declaração da variável.

Por exemplo:

    nome var: String?

Isso diz que o valor de **nome** pode ser do tipo **String**, ou pode ser **nil**, ou seja, não ter um valor.

**nil** tecnicamente já é um valor. Porém é um valor usado para representar o valor nulo ou valor ausente de uma variável.

Isso Mesmo, **nil** é usado para representar a ausência de um valor. Ele pode ser usado de maneira semelhante ao valor null.

Por exemplo, imagine que você tem uma variável chamada **nome** que pode ou não conter um valor. Se você declarar nome como opcionais, poderá atribuir a ela um valor normalmente, como nome = "Diego", mas também poderá atribuir o valor **nil** indicando que ela **ainda** não tem um valor ou que *não está disponível*.

Isso é útil porque permite que o programador faça uma distinção de forma fácil.

Isso pode ajudar a evitar erros no código e a tornar o código mais legível. Com os opcionais fica mais fácil de lidar com **nil**.

Você declara opcionais usando o ? após a declaração variável regular.

## **Por que eu gostaria de dizer que algo é nil?**

Os opcionais permite a capacidade de lidar com casos de erro e situações semelhantes.

O objetivo principal é tornar explícito o **estado indisponível** / **vazio** / nada de uma variável, e ainda mais, torná-lo explícito quando algo nunca pode ser indisponível / **vazio**.

Nos idiomas que permitem que qualquer variável seja nula, geralmente não está claro se a variável pode ser nula no local específico do código, o que leva a dois problemas:

*   O caso nulo não é tratado pelo programador e, em seguida, há um valor nulo, causando uma referência nula, ou seja, falha;

*   Ou o caso nulo é considerado pelo programador e eles adicionam verificações defensivas para lidar com o suposto caso nulo, embora nunca ocorra, causando sobrecarga desnecessária.

Aqui está um exemplo:

Digamos que estamos usando o campo que eu defini acima em um contrato, mas não como opcional:

    contrato de pub NameHolder {
        nome do pub var: String
    }

Se o valor ainda não foi definido, mas alguém deseja lê-lo, como comunicamos que ele não foi definido? Poderíamos simplesmente retornar uma sequência vazia, mas isso é efetivamente o mesmo que retornar qualquer sequência não vazia, portanto, o leitor pode não saber que uma sequência vazia significa que ainda não foi definida e cometer um erro ao supor que está tudo bem.

Se tornarmos o campo opcional:

    contrato de pub NameHolder {
        nome do pub var: String?
    }

Então fica muito claro para o leitor. Se eles tentarem ler name e eles recebem nil de volta, eles podem lidar facilmente com o erro e fazer o que precisarem nesse caso.

Em Cadence, é necessário inicializar os campos em tipos compostos, para que esse problema exato não ocorra com muita frequência, mas você verá casos semelhantes que são um pouco mais complexos.

Por exemplo, os valores em dicionários são todos opcionais. Você pode inicializar um dicionário para ficar vazio assim:

    let lastNameDictionary: { String: String } = { "Josh": "Hannan" }

Porém, como existe um número infinito possível de pares de valores-chave, se você tentar acessar qualquer um deles, ele retornará um opcional, mesmo que o valor exista para a chave que você fornece!

    let lastNameDictionary: { String: String } = { "Josh": "Hannan" }// Ambos causam um erro:
    // Inválido: tipos incompatíveis. esperado `String`, conseguiu `String?
    deixe existirNome: String = lastNameDictionary [ "Josh" ]
    let newName: String = lastNameDictionary [ "Kayla" ]

## **Como eu lido com opcionais?**

Se deixados por conta própria, os opcionais podem ser um punhado!



Como tiramos você de lá??? Acho que temos que desembrulhar a caixa!

Valores de variáveis opcionais ainda são considerados agrupados no opcional. “ Embrulhado ” é um termo que significa que ainda não sabemos se o valor é ou não nil ou não. Se você tentar executar uma operação normal que normalmente pode executar com o tipo que está usando, ela falhará no verificador de tipo Cadence:

    let x: Int? = 2// Inválido: não é possível aplicar operação binária + aos tipos: `Int?`, `Int`
    y = x + 2

Embora ambos os argumentos especifiquem alguma forma de Int , xainda está encerrado, então o programa não sabe se é nil ou não. Não nos permitirá executar uma operação matemática com ele, porque você não pode adicionar nil e um número! Isso explodiria o universo!!!!

Você precisa desembrulhar o valor do opcional primeiro e executar a operação.

Isso também se aplica a tipos compostos. Se você possui um tipo composto opcional, é necessário desembrulhar o opcional antes de poder chamar qualquer um de seus métodos ou acessar qualquer um de seus campos.

Aqui está um exemplo simples:

    contrato de pub HelloWorld {
        recurso de pub OpcionalOlá {
            pub fun hello ( ): Corda {
                retornar "olá"
            }
        }    access ( self ) let helloResource: @OptionalHello?    init ( ) {
            self.helloResource < - crie OpcionalOlá ( )
        }    // Função pública que retorna nossa saudação amigável!
        pub fun hello ( ): Corda {
            retorne self.helloResource.hello ( )
        }
    }

Portanto, se você vir um erro como este:

    valor do tipo `HelloWorld.OptionalHello?`não tem membro `olá`. membro desconhecido

Procure o ? no final do nome do tipo. O objeto geralmente ainda é opcional e precisa ser desembrulhado antes de chamar o hello método. ( melhores mensagens de erro também estão chegando no futuro ) 😃

# **Opcionais de desembrulho**

Existem várias maneiras diferentes de desembrulhar opcionais, e todos eles têm comportamento diferente e são usados para diferentes casos de uso.

## **Operador de coalescência nula**

O [operador de coalescência nula](https://docs.onflow.org/cadence/language/values-and-types/#nil-coalescing-operator) ?? retorna o valor dentro de um opcional se ele contiver um valor ou retorna um valor alternativo especificado se o opcional não tiver valor, ou seja, o valor opcional é nil.

Se o lado esquerdo não estiver nulo, o lado direito não será avaliado.

[Consulte os documentos da Cadence para obter mais informações](https://docs.onflow.org/cadence/language/values-and-types#nil-coalescing-operator) sobre o operador de coalescência nula.

Você provavelmente verá isso muito usado ao pedir referências a recursos e recursos. É possível colocar qualquer código no lado direito do ?? portanto, se um empréstimo falhar, ele retornará um opcional que seja nil , mas em muitos casos, se um empréstimo falhar, a transação deverá falhar. O operador de coalescência nula nos permite entrar em pânico e imprimir uma mensagem de erro para que o estado seja revertido e o chamador saiba exatamente o que deu errado.

Por exemplo, quando emprestamos uma referência à conta FlowToken receptor, geralmente usamos isso:

    // Obtenha uma referência ao Receptor do destinatário
    deixe receiverCap = obter conta ( para ) .getCapability ( / public / flowTokenReceiver )

    deixe o receiverRef = receiverCap.borrow < & { FungibleToken.Receiver } > ( )
        ?? panic ( "Não foi possível emprestar referência ao receptor" )

Se borrow obtém sucesso, retorna uma referência válida. Se falhar, ele retornará nil . Portanto, o tipo do valor de retorno é &{FungibleToken.Receiver}? e precisamos desembrulhá-lo antes que possamos usá-lo.

## **Invadir Força**

Outra maneira mais sucinta de desembrulhar um valor opcional é usar o operador de desbaste de força (! ). O desembrulho de força obterá o valor do opcional, se existir, ou entrará em pânico e abortará se não existir.



Este opcional não deseja ser desembrulhado

    deixe um: Int? = 3
    let b: Int = a!   // Terá sucesso e retornará 3let c: Int? = nada
    let d: Int = c!   // Entrará em pânico e abortará em tempo de execução

[Consulte os documentos da Cadence para obter mais informações e exemplos de força-desembrulho.](https://docs.onflow.org/cadence/language/values-and-types/#force-unwrap-)

Se um force-unwrap falhar, ele imprimirá apenas uma mensagem de erro genérica sobre falha ao tentar forçar o desembrulho. Por esse motivo, você deve ter muito cuidado com o local de uso do force-unwrap, porque se falhar, será muito mais difícil determinar de onde vem o erro.

Você deve usar apenas o operador de desbloqueio de força em locais onde tenha certeza absoluta de que o valor não será nil . Por exemplo, se você já verificou que não está em uma condição prévia, sabe que quando forçar a quebra, estará seguro.

## **Encadernação opcional**

Outra maneira poderosa de desembrulhar e manipular opcionais é através de encadernação opcional, um método que permite incluir o desembrulho em um condicional que executa diferentes blocos de código, dependendo de como o desembrulho ocorreu.

O bloqueio opcional é uma variante do if-statement que executa condicionalmente um corpo de código se um opcional for nil ou não.

[Veja os documentos de cadência para exemplos de encadernação opcional](https://docs.onflow.org/cadence/language/control-flow/#optional-binding)

A ligação opcional é uma maneira completa de lidar com diferentes casos de opcionais, pois oferece a maior flexibilidade com o comportamento do seu programa.

Se nil é um valor potencial esperado para um opcional em seu programa e você tem muitas operações que precisa executar nesse caso, então a ligação opcional é o caminho a seguir.

## **Encadeamento opcional**

Por último, mas não menos importante, temos um encadeamento opcional. Às vezes, existem tipos compostos opcionais, porque são armazenados em um dicionário ou retornados como opcionais de uma função que os recupera. Se você deseja chamar uma função em um tipo composto opcional, pode usar o encadeamento opcional para chamar “ opcionalmente ” essa função. Se o objeto que você está chamando é nil , ele simplesmente não executa nenhuma função e segue em frente e retorna nil .

[Consulte os documentos da Cadence para obter mais informações e exemplos.](https://docs.onflow.org/cadence/language/composite-types#accessing-fields-and-functions-of-composite-types-using-optional-chaining)

# **Conclusão**

Os opcionais são uma característica importante de muitos idiomas e aprender a usá-los adequadamente é importante para escrever código limpo e seguro, para que você entenda bem!

Espero que este post tenha sido informativo e útil!



Inspirado no Artigo Original em inglês: https://joshuahannan.medium.com/optionals-in-cadence-not-optional-fb39bb4b0081
