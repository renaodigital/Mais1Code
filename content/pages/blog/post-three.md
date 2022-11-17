---
title: Como a rede blockchain flow funciona?
layout: PostLayout
date: '2021-11-04'
author: content/data/team/desmond-eagle.json
excerpt: >-
  A Flow criou uma rede blockchain de operação heterogênea , com paralelismo e
  escalabilidade que cresce com o número de nós na rede. O primeiro seria o
  sistema atual de muitos blockchains, enquanto o segundo seria Flow.
featuredImage:
  type: ImageBlock
  url: /images/2021-08-19-image-33-be13f7df.webp
  altText: Post Image
media:
  type: ImageBlock
  altText: Post Image
bottomSections:
  - elementId: ''
    variant: variant-d
    colors: colors-d
    title: Leia a seguir
    showDate: true
    showAuthor: false
    showExcerpt: true
    recentCount: 3
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-56
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: RecentPostsSection
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: wide
        padding:
          - pt-4
          - pb-4
          - pl-4
          - pr-4
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
addTitleSuffix: true
---
[O que é Flow Blockchain?](https://www.web3dev.com.br/diegofornalha/blockchain-426i)


Flow é um da tecnologia blockchain projetada do início ao fim com o objetivo de ser integrado em jogos e aplicativos, tornando-se uma rede blockchain de alta velocidade e uma arquitetura modular extremamente flexível para o desenvolvimento.

Os devs da Flow criaram um sistema no qual várias funções podem coexistir, funções que são desempenhadas por seus nós, cada uma com um objetivo muito específico. Isso permite que você divida suas tarefas recebidas (as transações que você envia) de maneiras exclusivas, tornando-as mais fáceis de atender.

Então, por exemplo, se uma transação interage com um contrato inteligente avançada (ex: uma interação com um DApp), a referida transação é dividida em duas partes: a primeira, onde estão os metadados da transação (quem envia, endereços, entre outros).

E, a segunda, a interação com o contato inteligente como tal, que deve ser invocado (a partir de seu endereço), executado e oferecer uma resposta ao nosso usuário (que é visível no blockchain). Além disso, todo esse processo deve ser verificado, obedecer às regras de consenso e, finalmente, ser incluído no blockchain. Se estivéssemos no Ethereum, essas tarefas são realizadas de forma linear (lenta e cara).

Mas no Flow, a primeira e a segunda partes vão para um tipo de nó (chamado de nó de execução), enquanto as tarefas de consenso, verificação e armazenamento são atribuídas a tipos de nós específicos para cada tarefa. Como cada um desses pontos requer trabalho computacional específico (alguns requerem mais potência do que outros), a divisão do trabalho torna o fornecimento de grandes volumes de informações mais fácil e rápido de fazer no final. A Flow criou uma rede blockchain de operação heterogênea (com nós atribuídos para diferentes funções), com paralelismo e escalabilidade que cresce com o número de nós na rede.

Você quer uma explicação mais simples do que esta? Veja da seguinte forma, não é a mesma coisa ter um restaurante em que você ocupa todos os cargos (de chef, garçom, caixa), do que ter uma equipe que o apoia em cada tarefa e, principalmente, se o seu restaurante tem uma grande procura e afluência de comensais. O primeiro seria o sistema atual de muitos blockchains, enquanto o segundo seria Flow.

Explorando como o Flow funciona em profundidade
Agora que sabemos como o Flow funciona em geral, é bom saber como ele o faz acontecer. Em primeiro lugar, Flow é um projeto com uma arquitetura multifuncional pensada na divisibilidade de atribuições e tarefas. Isso é essencial, porque a arquitetura de rede Flow, embora complexa, é muito menos problemática do que as outras opções que encontramos nesse mercado. Com isso dito, vamos primeiro explorar como seus nós são divididos e quais são suas funções.

Nós dentro do fluxo
No Flow, como já mencionamos, existem diferentes papéis e tipos de nós, cada um especializado ou dedicado a uma tarefa específica dentro da rede. Entre esses tipos de nós, temos:

Nós de coleção
Os nós de coleta são nós de alta largura de banda que são agrupados e cooperam uns com os outros. A tarefa desses nós é gerenciar o grupo de transações e coletar transações bem formadas para propor aos nós de consenso. Ou seja, eles têm uma funcionalidade muito semelhante ao que seria o mempool de nós como os de Bitcoin ou Ethereum.

As transações no Flow são atribuídas pseudo-aleatoriamente a um determinado cluster usando hash de transação. Portanto, uma transação bem formada deve incluir credenciais do nó de coleção que armazena essa transação.

Para conseguir isso, esses nós pegam cada transação bem formada e aplicam um hash ao texto dessa transação, adicionando também uma assinatura à transação para indicar duas coisas: primeiro, que está bem formada; e, segundo, que se comprometerá a armazenar o texto da transação até que os nós de execução tenham concluído o processamento. Cada grupo coleta transações, reúne-as em coleções e envia uma garantia de coleção assinada pela grande maioria do grupo aos nós de consenso.

Assim, já temos um primeiro espaço onde as transações são classificadas de forma que o paralelismo na execução seja possível sem praticamente nenhum risco. Além disso, para se tornar um operador de nó de coleção, você deve fazer um tutoramento mínimo, 250 mil FLOW, ganhando comissões pelo seu bom trabalho em todos os momentos. Sim, o Flow é uma rede que usa um derivado do protocolo Proof of Stake (PoS).

Nós de consenso
Este segundo tipo de nó é responsável por formar e propor blocos respeitando as regras do protocolo de consenso Flow HotStuff. O trabalho dos nós de consenso começa com a validação dos hashes das coleções de transações enviadas pelos nós de coleção. Nesse ponto, eles verificam se essas coleções foram aceitas pela maioria do cluster de coleção ao qual a transação foi atribuída.

Feita essa verificação, os nós de consenso iniciam com a criação dos blocos e finalizam o processo por meio de uma votação. Neste ponto, quanto mais nós participam, maior o nível de descentralização da rede e sua segurança. Neste ponto, o protocolo HotStuff limitou a participação a 100 eleitores, mas disse que os eleitores são escolhidos aleatoriamente a partir do conjunto de nós de consenso disponíveis, a ideia por trás disso é manter o máximo de participação possível dentro do sistema sem reduzi-lo. Os desenvolvedores do Flow ainda estão trabalhando na possibilidade de aumentar esse número, mas por enquanto o esquema utilizado é seguro.

Para evitar ataques ao sistema (as chamadas “falhas bizantinas”), os nós de consenso têm requisitos de execução bastante baixos, portanto, computadores poderosos não precisam ter um nó de consenso. Além disso, o consumo de banda também é pequeno, o que evita a necessidade de conexões com a Internet. Internet À velocidade de um relâmpago. No entanto, talvez um ponto contra seja que, para executar um nó de consenso, são necessários 500 mil FLOWs em tutoramento, que ao preço atual é de cerca de US $ 15 milhões, tornando-se um nó bastante caro em comparação com outras redes.

Nós de Execução
O papel dos nós de execução é bastante claro: executar transações, manter o estado de execução, um armazenamento de dados criptograficamente verificável para todas as contas de usuário e estados de contrato inteligentes, bem como responder às consultas relacionadas a ele. Em palavras mais simples, são os neurônios do que viria a ser o cérebro de Flow.

O trabalho dos nós de execução começa quando eles recebem os dados da transação que vêm dos nós de coleta. Nessas transações, existem as operações de transação simples, como os contratos inteligentes a serem executados, e tudo isso é computado pelos nós de execução. A saída produzida pelos nós de execução é então verificada pelos nós de validação.

Por serem o epicentro do processamento de dados do Flow, os nós de execução requerem equipamentos com certo nível de poder computacional. Na verdade, quanto maior a potência, mais rápida será a execução de todo esse trabalho computacional necessário. Neste ponto, o Flow deixa algo muito claro: você pode escalar usando números (mais nós na rede) ou usando um hardware mais poderoso (que executa tudo mais rápido). A união de ambas as vantagens é o que permite ao Flow ter uma escalabilidade invejável em comparação com outras cadeias de blocos.

Para evitar trapaça, os nós de execução devem gerar um hash para cada saída de uma tarefa gerada. Assim, quando os nós de execução finalizam a coleta de transações recebidas dos nós de coleta, eles revelam o hash, incluem-no nos dados que são enviados aos nós de consenso e, a partir daí, aos nós de verificação.

Finalmente, qualquer trapaça neste ponto pode ser detectada (usando o hash relacionado à saída de dados) e se for, o nó em questão é punido. Uma punição neste tipo de nó tem um peso econômico importante, principalmente quando pensamos no custo de instalação de um nó de execução, para o qual deve ser feito um piqueteamento de 1.250.000 token FLOW (38,75 milhões de dólares).

Nós de Verificação
Esses nós têm a tarefa de confirmar a exatidão do trabalho realizado pelos nós de execução. Os nós de verificação individuais verificam apenas uma pequena parte do cálculo total, mas coletivamente eles verificam cada cálculo muitas vezes em paralelo. Assim, conseguem verificar os recibos de execução fornecidos pelos nós de execução e emitir aprovações de resultados. Um algoritmo de classificação determina quais partes do recibo de execução dos nós de execução o nó de verificação deve consultar para verificar se foram calculados corretamente.

Em última análise, esses nós mantêm os nós de execução honestos; Este equilíbrio de poder mantém os critérios de descentralização de acesso, segurança e verificabilidade. É altamente tolerante com as falhas bizantinas porque mesmo que haja um número substancial de erros bizantinos no grupo de nós de verificação, os nós de consenso ainda devem aprovar que as transações que eles assinaram foram revisadas por uma quantidade crítica da rede.

Para executar um nó de verificação, é necessário realizar um piqueteamento mínimo de 135.000 tokens FLOW (aproximadamente 4,185 milhões de dólares)

Nós de acesso
Os nós de acesso são aqueles que permitem enviar e receber transações dentro da rede Flow e seus diferentes nós. Elas são, para colocar de uma forma, as rodovias que interconectam os nós do Flow. A ideia é que essa rede seja grande o suficiente para que qualquer pessoa, em qualquer lugar do mundo, possa acessar e usar os recursos do Flow. No entanto, eles não realizam nenhuma outra tarefa. Esses nós também são fáceis de instalar e não requerem nenhuma estaca para seu funcionamento.
