# ALGORITMOS COM JAVASCRIPT II


# APRENDIZADOS

Podemos pensar em novas formas de “atacar” um problema de ordenação, começando a partir de partes menores já ordenadas e unindo estas partes em uma única lista ordenada;


Evoluímos o conceito e testamos o funcionamento do algoritmo com uma simulação sem código, similar ao “teste de mesa”, para entendermos quais operações deverão ser feitas pelo código durante o fluxo de execução do programa;


Após utilizarmos a simulação para entendermos o fluxo do algoritmo e o que ele deve fazer, desenvolvemos um código em JavaScript para implementá-lo através da função juntaListas(), que percorre cada uma das duas listas informadas por parâmetro, compara os valores de cada uma, posiciona estes valores em uma lista única de acordo com o resultado da comparação e, por fim, retorna a lista unida.

Expandimos o conceito de “dividir para conquistar”, reutilizando a lógica de ordenar duas listas, e desenvolvemos um algoritmo para ordenar uma única lista;

Utilizando o recurso das simulações e testes, entendemos o funcionamento de um algoritmo de ordenação muito utilizado no dia-a-dia, o Merge Sort;

Após entendermos o fluxo do algoritmo, fizemos a implementação do algoritmo Merge Sort com JavaScript, através da função mergeSort() que recebe um array e retorna este array ordenado;

Estudamos a ferramenta de recursão, como ela pode ser utilizada no algoritmo Merge Sort e as diferenças dessa ferramenta com relação aos laços de repetição.

Trabalhamos com o conceito de pivô, entendemos como selecionar um elemento pivô no código e como posicionar este elemento em uma lista, comparando valores e contando elementos menores;


Após posicionar um elemento pivô em um array, desenvolvemos um código em JavaScript que percorre uma lista e separa todos os elementos entre maiores e menores que o pivô, através da `função encontraMenores()`;


A partir do conceito de elemento pivô, entendemos o funcionamento do algoritmo de ordenação quick sort, fazendo mais simulações e testes;


Após entendermos o algoritmo, implementamos o código utilizando JavaScript e reaproveitando funções e conceitos das aulas anteriores, como a `função trocaLugar()` e a recursão.

Aplicamos novamente o paradigma “dividir para conquistar” para desenvolver o algoritmo de busca chamado busca binária;

Utilizamos recursão para manipular um array ordenado e buscar um elemento, seguindo o fluxo da busca binária que foi visto nas simulações e testes;

Desenvolvemos código em JavaScript para implementar o algoritmo de busca binária;

Continuamos a prática de funções recursivas, vendo o funcionamento do “caso base”, que pode ser considerada como a condição de parada de uma função recursiva.

Aprendemos a fazer a análise assintótica do algoritmo de busca binária e por que este é considerado um algoritmo de complexidade logarítmica, em comparação com a busca linear que é um algoritmo de complexidade linear;

Fizemos a análise assintótica dos algoritmos de ordenação quick sort e merge sort e analisamos o código para entendermos por que são considerados algoritmos de complexidade linear-logarítmica;

E o que significa, em termos de performance, a diferença entre algoritmos de crescimento linear, quadrático e logarítmico.


# 1. DIVIDIR PARA CONQUISTAR


## Misturando Listas


![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/005b8f86-a53f-4cb3-b997-c7f27cefb348)

Esse tipo de simulação que fazemos em código já vimos que nos ajuda bastante a entender como funciona o fluxo, os passos de um algoritmo, por exemplo, de ordenação, antes de tentarmos fazer o código dele.

## Testando o Algoritmo

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/d31d5fbb-1226-4bbc-bbfc-c9c2e7bfbebb)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/2c0716dc-9ba5-485b-9faf-2f01a8ae4f82)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/05df785c-ad6a-4ee2-841a-814b490168be)


## Passando para o código

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/072a4f05-b66f-42bd-95b4-e8d704c16f73)

## Ajustando o Algoritmo

# 2.MERGE SORT

## Intercalando Valores

O Merge Sort pega duas partes de um todo, separa, compara e depois funde. a gente pega um problema grande, divide em partes pequenas para resolver melhor o todo.

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/79fa9ae5-6e80-43bd-9096-fcee3923ecfd)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/3b98a37c-028c-4401-a9dd-443255ed6e4a)


## Como o Merge Sort funciona

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/da42e16c-b3d5-44d3-a0d5-86da507285c9)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/9f20de16-446b-4a8a-a0a8-cfe9fba22ec6)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/3bd189c7-56f2-4f60-b05f-776416bbdbec)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/eeefabd7-2b04-4b6f-b312-a393ab59e039)

Entendendo o que precisamos fazer, vamos passar isso pro codigo.


## Implementando o Algoritmo

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/6a7544d4-8fa5-4f6b-89c2-763c10418e48)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/d6436f6b-4b29-4ff7-b2e1-956a49b0a7c3)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/7cb6ccde-1d0b-4708-a7e6-e2995ead0f60)


## Recursão

Vamos revisar o que aconteceu na nossa função mergeSort, para ficar bem claro como a recursão está funcionando.

Recursão é basicamente resolver um problema em partes menores até que tenhamos resolvido o problema completo. É uma forma parecida com a lógica que está por trás do próprio merge sort.

Muitas vezes isso envolve uma função ficar chamando ela mesma até que isso não seja mais necessário.

 Parece um pouco com laço de repetição, mas a execução é bem diferente.

Revisitando então a nossa função mergeSort, a primeira linha dentro dessa função é uma condição que só vai executar o código que está dentro do mergeSort se o array que for passado por parâmetro for de um tamanho maior do que 1.

Se não for, simplesmente retorna aquele único elemento, que é o que vimos nas simulações inclusive. Se só temos um elemento, não tem o que dividir nem o que comparar, só retorna ele.

E como o código faz isso? Ele faz, através do trecho onde ele pega o valor da metade do array e usa esses valores para dividir, para fazer um slice. E a cada vez que mergeSort é chamado, o array que é passado por parâmetro para dentro dele é um array cada vez mais dividido, cada vez menor. E é aqui que a recursão está sendo executada.

 Cada vez que o array é dividido, mergeSort é executado novamente, recebendo um array cada vez menor por parâmetro, até que a condição desse if não seja mais atendida.

Nesse momento em que a condição do if não é mais atendida, o mergeSort para de ser chamado na primeira chamada recursiva que estamos fazendo, e o resultado será retornado e guardado dentro da constante parte 1.

A mesma coisa se dá para a parte 2. Isso é executado até que não atenda mais a condição do if. Quando isso acontece para de ser feita a chamada recursiva de mergeSort, e o resultado é guardado dentro da variável parte 2.

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/43fc76ed-88c3-488f-a8d0-be8a1dcb282f)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/27defa8a-839c-46e1-9690-13b1001090ba)


## Para saber mais: A tal da recursão


Quando pesquisamos sobre recursão, normalmente encontramos duas definições que se completam:

1) Um método utilizado para resolver problemas de computação em que a resolução consiste em solucionar instâncias menores do mesmo problema;

2) Um método em que uma função ou algoritmo chama a si uma ou mais vezes até que se atinja uma condição específica, quando o resultado de cada repetição é processado desde a última chamada até a primeira.

Um exemplo interessante de código para ilustrar esse cenário seria o seguinte:

Abaixo é definida uma função para controlar a frequência com que os números são incrementados durante a execução da função recursiva incrementaNumero(), que será definida a seguir:


```
function dorme(milissegundos){
        return new Promise(resolve => setTimeout(resolve, milissegundos));
}
```


Aqui é definida uma função assíncrona recursiva que incrementa o número passado como parâmetro em uma unidade e, após 2 segundos, chama a si própria antes de encerrar a sua execução, ilustrando efetivamente um caso de recursão:


```
async function incrementaNumero(numero){
  console.log(numero)
  await dorme(2000)
  return incrementaNumero(numero + 1)
}

incrementaNumero(1)
```


Para o qual a saída seria:

```
1
2
3
4
5
```

Como podemos ver, a função incrementa o número passado como parâmetro em uma unidade e, antes de sair, chama a si própria novamente.

Ainda que o exemplo passado seja uma forma bastante objetiva de demonstrar recursividade, a sua utilização no mundo real não é muito prática já que essa função continuaria realizando o mesmo processo infinitamente - não foi passada nenhuma condição de saída - e não seríamos capazes de retirar valor da sua execução.

Para solucionar esse problema existem os base cases ou, em português, casos base. Mas o que são esses casos base? São uma forma de passar para a função uma condição de controle para a recursividade ou, em outras palavras, uma condição de saída.

Segue exemplo de caso base para função recursiva:

Abaixo é definida uma função para controlar a frequência com que os números são incrementados durante a execução da função recursiva incrementaNumero() que será definida a seguir:

```
function dorme(milissegundos) {
  return new Promise(resolve => setTimeout(resolve, milissegundos));
}
```


Aqui é implementada uma função recursiva com caso base:


```
async function incrementaNumero(numero){
  console.log(numero)
  await dorme(2000)
```


Aqui é implementada o caso base(base case) que fará com que a função pare a recursão quando o valor do parâmetro numero for igual a 10:


```
async function incrementaNumero(numero){
  console.log(numero)
  await dorme(2000)

  if (numero === 10) {
          return 'finalizou'
  }
  return incrementaNumero(numero + 1)
}

incrementaNumero(1)
```


A saída então será:

```
1
2
3
4
5
6
7
8
9
10
```


É importante lembrar que a função recursiva é aquela que chama a si mesma até encontrar uma condição de saída/parada. A recursividade é uma técnica muito aplicada em estruturas de dados, algoritmos e gráficos.

Por exemplo, é recursão o efeito de tela infinita que surge em suas chamadas de vídeo ou quando você coloca um espelho em frente ao outro. No entanto, temos a possibilidade e obrigação de inserir uma verificação que interrompa este comportamento, ou então a função entrará em loop infinito.

## Para saber mais: Além do console.log()


Acredite ou não, o objeto console do nosso amigo JavaScript tem muito mais métodos do que o log().

Ele também conta com um método chamado trace() que, além de imprimir mensagens, também fornece um stack trace, uma espécie de rastro de execução das funções executadas.

De forma bem simples, o trace() vai mostrar o caminho percorrido pelo programa até chegar ao ponto em que a função console.trace() é chamada.

Vamos ver no código?
Para fazermos um teste, vamos criar um arquivo index.js e nele uma função chamada ola() e outra chamada mundo():


```
function ola(){
    function mundo() {
        console.trace('Ola Mundo');
      }
  mundo();
}

ola();
```


A saída no seu terminal será assim:

```
Trace: Ola Mundo
    at mundo (file:///<diretorio>/index.js:3:15)
    at ola (file:///<diretorio>/index.js:5:1)
    at file:///<diretorio>/index.js:8:1
    at ModuleJob.run (internal/modules/esm/module_job.js:140:23)
    at async Loader.import (internal/modules/esm/loader.js:165:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
```


Como podemos ver, o método console.trace() imprime a mensagem "Ola Mundo" no topo e depois apresenta todo o caminho percorrido nos locais em que o console.trace() foi chamado.

Aqui a função ola() é chamada primeiro e a função mundo() é chamada posteriormente (observe que na lateral direita aparece o número da linha em que o console.trace() é chamado, que é o número "3").

O console.trace() é muito vantajoso quando pensamos em cenários complexos, pois fornece um stack trace (rastreamento de pilha) completo, com informações sobre os locais, módulos ou arquivos em que os métodos são chamados.

Esse método funciona como ferramenta importante para encontrarmos bugs e atua de mãos dadas com o interpretador. Essa prática é possível graças ao motor de interpretação do JavaScript (também chamado de engine) que utiliza uma pilha de chamadas (call stack) como regra de execução de funções. A pilha de chamadas trabalha com a estrutura de dados conhecida como pilha, que tem como regra que "o último a entrar é o primeiro a sair" - uma sigla conhecida na programação como LIFO, last-in-first-out.

Isso significa que, sempre que executarmos um script, o motor JavaScript organiza a execução de forma global e insere a execução da última função chamada no topo de pilha de chamadas.

Imagine blocos empilhados um em cima do outro, ou uma pilha de pratos. Se tentarmos retirar o último bloco ou o último prato, o que acontece? Certamente tudo irá desmoronar, e é assim que a pilha de chamadas funciona também; o motor JavaScript executa a última função chamada e se uma função chamar outra em seu escopo, um novo contexto de execução será criado e colocará a nova função no topo da pilha de chamadas.

O script só finaliza a execução quando a pilha de chamadas estiver vazia.

Que tal pesquisar um pouco mais?

[console.trace()](https://developer.mozilla.org/en-US/docs/Web/API/console/trace_static)
[Call stack (Pilha de chamadas)](https://developer.mozilla.org/pt-BR/docs/Glossary/Call_stack)

# 3. QUICK SORT

## Posicionando um Pivô

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/ab8e7c14-4439-47b9-ad90-8092ddfb84d5)

Segue mais ou menos a mesma linha do merge sort.

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/797ca312-3532-4f3b-9337-35c0323d7d92)


## Ordenação pelo Pivô


Nesse momento já sabemos quantos elementos têm valor menor do que um dado elemento escolhido na nossa lista, que chamamos de pivô.

Esse código sozinho por enquanto não está fazendo muita coisa. Nós temos que usar a posição do pivô para posicionar o restante dos elementos de um lado ou do outro. Podemos dizer que ficam à esquerda do pivô os menores e à direita do pivô os maiores.

 Por enquanto só conseguimos posicionar o pivô no lugar dele trocando ele de lugar com outro elemento. No caso do exemplo usamos o Java como pivô, um elemento de 30, que podemos chamá-lo pelo seu valor, e localizamos cinco elementos com valor menor do que 30. A partir daí trocamos o Java de lugar com o elemento que estava na posição que ele deveria estar por enquanto.

E agora o que temos que fazer é a evolução, a próxima parte desse algoritmo, que é realmente empurrar todo mundo que tem valor menor para antes do pivô e quem tem valor maior para depois.

 Usamos o Java nessa simulação, e agora vamos fazer isso de uma forma um pouco diferente no algoritmo. Então vamos para o código.

 Eu vou começar criando mais uma função que eu vou chamar de function divideNoPivo().

O que recebemos nessa função por parâmetro? Um dos parâmetros é o array que essa função vai trabalhar; e poderíamos passar o pivô também, como tínhamos feito anteriormente passando o Java que era a posição 2 do array que estávamos trabalhando.

 Em termos de código, se formos pensar, o código vai ficar mais simples se pedirmos para pegar o primeiro elemento, por exemplo. Pegar sempre o primeiro elemento do array e usar como pivô, porque a posição do pivô vai andar, vai ser modificada.

 Mas não costuma ser uma boa ideia fazer isso, porque nós nunca sabemos qual é o array que vamos receber para trabalhar. E se o array já tiver internamente algum tipo de ordenação, pegar pelo primeiro vai resultar no algoritmo se comportando da pior maneira possível.

 O que podemos fazer é pegar o último elemento, pegar um elemento aleatório, considerando o começo e o fim do array, ou pegar sempre do meio.

 Já que nós já sabemos pegar o elemento do meio de um array, vamos manter o nosso código pegando sempre o elemento do centro.

 Então dentro da função “divideNoPivo” eu vou criar uma let que vou chamar de pivô mesmo, e ela vai receber o número do índice que corresponde ao meio do array, então let pivo = Math.floor(array.length / 2);. Passamos isso dentro de um método “Math.floor” para termos um valor arredondado para baixo.

 Agora já temos o pivô. Já vou pedir no final da função para retornar o array dividido com return array;.

 Então agora vamos pensar no que temos que fazer. Dava já para chamar função “encontraMenores”, que é a função que está trocando o pivô de lugar e o colocando no lugar certo dele.

 Então podemos chamar a função “encontraMenores”. E para funcionar ela precisa dos parâmetros pivô e array: encontraMenores(pivo, array);.

 Esses dois nós já temos, o array que será recebido como parâmetro da função mais externa, “divideNoPivo”; e a let pivo que acabamos de criar, que vai sempre pegar o elemento do meio e posicioná-lo no lugar dele, pensando que o elemento do meio não vai ficar no meio. Ele será usado como pivô e vai se movimentar de acordo com a quantidade de maiores e menores que o código vai descobrir que tem no array.

 Como funciona mesmo o “encontraMenores”? Ele vai contando a quantidade de elementos menores do que o pivô que tem no array. A partir disso ele sabe quantas posições tem que ter antes do elemento selecionado e posiciona.

 Então para conseguirmos passar os menores para o lado certo do array, que é a esquerda do pivô, podemos continuar usando a mesma lógica.

 Só que dessa vez vamos criar dentro da função “divideNoPivo” uma outra variável para ir controlando quantos menores nós encontramos.

Então vou criar uma let chamada “valoresMenores”, que vai começar com 0, que vai ser a primeira posição do array: let valoresMenores = 0;. Começamos com zero, e se já encontrou alguém menor, já coloca no 0.

E vamos aumentar, e se encontrar outro menor coloca no 1, coloca no 2 etc., é uma lógica bem parecida com a que utilizamos no “encontraMenores”. E agora vamos fazer um for para ir rodando esse array e vendo o que é maior e o que é menor.

Vou chamar a variável de controle do for de “analisando”: for(let analisando = 0;). Ela começa no índice 0 porque é o índice que estaremos analisando no momento.

 Enquanto “analisando” for menor do que o comprimento do array, vamos incrementar analisando no final de cada iteração: for(let analisando = 0; analisando < array.length; analisando++).

 Então já temos os índices que vamos trabalhar, lembrando que além dos índices precisamos puxar o dado, o objeto que vamos trocar de lugar ou não, analisar ou pegar o preço.

 Então dentro do for eu vou criar uma let atual, que vai ser o dado, o objeto que estaremos trabalhando no momento.

 E ele vai ser o resultado de array na posição “analisando”: let atual = array[analisando];. Lembrando que quando fazemos isso, o que está guardado dentro da let atual é o dado, o objeto com chave e valor.

E agora, dentro desse for nós colocamos nossa condição de comparação de preço, que é o valor que estamos usando para comparar.

 Então if(atual.preco < pivo.[preco]). Quando o valor atual que está sendo analisado é menor do que o pivô, ele tem que estar deslocado para a esquerda do pivô.

Lembrando que vai ter uma quantidade x de lugares, de elementos que vão estar antes. Então o nosso atual tem que ir para a posição que detectamos como menor. Lembra que começamos no zero.

 Então vamos chamar de novo a função “trocaLugar”, que precisa de array como primeiro parâmetro. O segundo parâmetro é onde o elemento que será trocado está no momento em que ele está na posição “analisando”, que é a posição do loop no momento.

 Então ele passa de analisando, que é o número do índice, e vai passar para “valoresMenores”, muito parecido com o que fizemos na função “encontraMenores”. Ele está no momento na posição analisando e ele passa para a posição “valoresMenores”: trocaLugar(array, analisando, valoresMenores).

 Lembrando que ambos os valores são números referentes ao índice do array que estamos trabalhando. Eu vou corrigir o meu pivo.preco que ficou escrito errado.

 E uma outra coisa que tem que acontecer dentro desse if é que se “valoresMenores” começa com 0 e colocamos um elemento, temos que atualizar o valor dessa variável, porque senão sempre que tiver um valor menor ela vai tentar entrar no índice 0.

 Então se já tem um elemento na primeira posição, no índice 0 do array, ele tem que depois ir para o índice 1. Então vamos aumentar: valoresMenores++.

 E o próximo elemento que tiver o valor menor do que pivô, ele vai executar o troca de lugar passando “valoresMenores”. Só que o “valoresMenores” terá o valor de 1. E ele vai entrar como segundo elemento do array, no índice de número 1.

 Então só tem uma coisa que precisamos fazer: no nosso if tem uma verificação a ser feita. Nós vamos passando pelo array, mas não podemos fazer o pivô comparar com ele mesmo.

 Então dentro do if vamos colocar “&&”, com a condição “e”, dizendo que o atual tem que ser diferente do pivô, então if(atual.preco < pivo.preco && atual !== pivo). O atual não pode ser o pivô, porque senão vai tentar mudar o pivô que já estava no lugar certo, e não queremos isso.

Vamos testar no final do arquivo: console.log(divideNoPivo(listaLivros));. Vamos no terminal então. Já estou na pasta certa, vou executar node encontraMenores.js.

 Tem um erro no meu código, vamos dar uma olhada. Tem um erro que eu já percebi: a nossa condição não precisa ser exatamente menor, ele pode ser menor ou igual, então fica if(atual.preco <= pivo.preco && atual !== pivo).

 Essa foi a primeira coisa que eu vi, mas não é disso que ele está reclamando. Ele está reclamando que a propriedade preço não existe no tipo number.

 Na linha 26, na primeira linha dessa função, eu passei a variável pivô, e ela está guardando um número. Só que ela deveria guardar um valor, não um número, deveria guardar um dado.

 Inclusive porque no if da linha 32 eu chamo pivo.preco, e obviamente, se a minha variável pivô é o resultado de array.length / 2, vai ser um número.

 Então isso não deveria ser um número. A let pivô deveria ser array na posição Math.floor(array.length / 2). Então corrigindo fica let pivo = array[Math.floor(array.length / 2)];.

 Aí sim vai pegar o valor do array, dividir por 2, arredondar para baixo, isso vai virar um número, um índice, que é a posição desse índice no array. Então o que terá salvo em pivô é um dado. Podemos inclusive fazer um console.log(pivo) para ver se está tudo certo.

Agora já deve ter corrigido. Vamos tentar rodar mais uma vez. Então node encontraMenores.js. O pivô é um dado, vamos ver se deu tudo certo.

 Voltando no array original, o objeto que tinha o livro Rust é o meio do array. Vamos ver a situação que está agora. No array ordenado ele passou para o terceiro elemento, o elemento no índice 2. Nosso array está ordenado, e antes dele tem apenas dois outros livros, de valores 15 e 20.

 Realmente, se formos olhar todos os valores do array, são os únicos dois livros que têm valores menores que 22. No caso tem que ser menor ou igual, mas não tinha nenhum igual.

 Então agora sim o nosso array está ordenado, nosso código está funcionando. Nosso código “divideNoPivo” consegue separar os menores dos maiores.

 Nós ainda não cuidamos da organização interna, da ordenação entre as partes menores e maiores, mas calma que vamos chegar lá.


Resultado:
![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/3593f5c1-06ad-4b11-b8d5-3fd12885994c)


## Quick Sort


![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/e406d8b1-66d6-4649-a942-f66118b452df)


![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/dce63957-627e-48be-873d-53d215773f36)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/b23e6a28-f5a7-489c-87ce-b63997b48a62)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/d3ffda9f-1666-46e6-9c8e-cb4fb6d38cec)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/45fb2c97-58bf-479a-ab39-ac657950e833)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/1cd32ac2-d5f4-4526-b996-48a7828f8e30)


Vejamos então como aproveitar toda essa lógica que construímos até agora para não só a partir de um pivô separar valores menores e valores maiores, mais sim terminar ordenando o array completamente.

 Vão existir ocasiões em que pode ser útil você apenas separar menores para um lado e maiores para o outro, mas vamos considerar o caso de uma ordenação completa.

 O pivô do array que trabalhamos no código anterior começa no elemento de valor 22, que é o Rust. É o meio da lista.

 Se considerarmos esse pivô e ordenarmos como já fizemos, nós descobrimos que só existem dois elementos com valor menor do que o de Rust na lista.

 E a partir do momento em que identificamos que só tem dois elementos menores, conseguimos posicionar o Rust no lugar dele, o terceiro elemento do array, que é o índice 2, trocando ele de lugar com o elemento que estava anteriormente, que é o Java de 30. Então os dois elementos trocaram de lugar e agora o pivô está posicionado no lugar dele com relação ao array completo.

 Como conseguimos expandir isso? Pensando da mesma forma que fizemos anteriormente, em que tanto a lista que está para a esquerda quanto a lista que está para a direita são duas listas separadas. E conseguimos aproveitar a lógica para cada uma delas, sempre começando do lado esquerdo.

 Então vamos terminar o que tem para o lado dos menores que o pivô. Nesse pequeno array de dois elementos, que são os menores, vamos estabelecer um novo pivô, que é o Python, o segundo elemento do array, o elemento de número 1.

 Então a partir dele como pivô conseguimos organizar esse array, fazendo da mesma forma que fizemos anteriormente, jogando para a esquerda os maiores e para a direita os menores.

 Só que agora só temos dois elementos, um de cada lado. Nesse caso, em que estamos trabalhando com um array de poucos elementos, é mais fácil de cair nas coincidências. Por coincidência a ordenação já colocou 15 e 20, os dois em ordem. Mas como eu disse, é uma coincidência, mesmo assim o código vai passar para fazer essa verificação.

 Então temos um novo pivô, a partir desse pivô um array de dois elementos, um está para um lado e um para o outro. Conseguimos ordenar esses dois. E agora todo o lado esquerdo, o lado de menores do que o nosso pivô original, que foi Rust, já está ordenado.

 O que sobra são todos os elementos do lado direito, os elementos maiores do que o pivô original. E agora temos o que podemos considerar como um array somente desses elementos. Vamos ver como fica então.

 Criando a partir só dos elementos do lado direito, rodamos a lógica novamente, e temos um novo pivô, no caso, o Ruby de 28.

 Vamos fazer mais uma verificação, olhar nessa lista de todos os que sobraram quantos elementos tem de valor menor do que 28.

 Só tem um, que é o JavaScript. Nós sabemos que nesse array menor temos um espaço de um elemento e o Ruby é o segundo elemento, que seria do índice 1. Nós trocamos de lugar. Então o que estava antes nesse lugar era o Elixir, trocou de lugar com o Ruby.

 E a partir disso é a mesma lógica: os menores vão para a esquerda e os maiores para a direita. Agora só temos um elemento menor, que é o JavaScript, que ficou no lugar dele.

 E o que nós temos agora é mais uma lista pequena, com menos elementos, mas que também vamos repetir o mesmo processo.

 Agora a partir do pivô dessa lista menor, temos só o JavaScript para o lado esquerdo. Ele está sozinho, não tem com quem “pivotar”, então ele já está ordenado.

 E agora novamente, verificamos quantos elementos existem nesse pequeno trecho de array dos que são menores do que 45. Temos um de 30, um de 40, um de 33 e um de 35.

 Então sabemos que Go se posiciona como o quinto elemento depois dos 4 menores. Ele vai para o lugar, trocando de lugar com o elemento anterior.

No caso, temos para a direita de Go dois elementos menores do que ele. Então na hora que essa troca é feita, o código primeiro vai trocar o Go de lugar com o C#, e depois, na hora que for passar o Elixir como o único elemento maior, ele vai também trocar de lugar com C# e depois trocar de lugar com o C++ e fica tudo no lugar.

Continuando, agora nós temos do lado direito do Go um elemento só, que não tem com quem “pivotar”, ele já está ordenado. E para o lado esquerdo temos quatro elementos, e vamos repetir o processo.

 Agora o pivô é o C#. Colocando o C# no lugar, nós temos só um elemento de valor menor do que o C#. O C# custa 33, e só tem o Java de 30.

Então sabemos que tem espaço de um elemento e o C# tem que ser o segundo. Posicionamos o C#, trocando ele de lugar com o que estava anteriormente, que é o Scala.

 Quando a lógica é processada, o Java, que é o único elemento de valor menor do que 33, vai para o lugar dele na esquerda, e agora é um só. E do lado direito nós temos apenas dois elementos que sobraram.

 E agora, a partir desse momento só temos um elemento do lado esquerdo, que já está ordenado e não tem com quem “pivotar”.

 E do lado direito o pivô agora é o C++, ele é menor do que Scala. Agora temos um elemento de cada lado, eles podem trocar de lugar e automaticamente dessa forma ordenar só essa parte que falta.

 E o resultado final é um array completamente ordenado, onde começamos a partir de um pivô, fazemos tudo para a esquerda, depois fazemos tudo para direita.
 E qual é a intenção dessa lógica? É ir reduzindo aos poucos o tamanho de cada pequeno array até que tenha apenas dois elementos. Quando você tem só dois elementos você troca os elementos de lugar se for necessário.

 Então essa é a base de um algoritmo de ordenação que chamamos de quick sort, de ordenação rápida, que é particionar a partir de um pivô, ordenar à esquerda, ordenar à direita até que o array esteja reduzido a um elemento. Com um elemento de cada lado você consegue ordenar e trocá-los de lugar se necessário.

 Agora podemos começar em pequenos passos a pensar em como implementar isso em código.



## Entendendo o código

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/52004800-1896-4fa3-9346-bbf7c8cf677c)


Vamos então fazer a implementação desse algoritmo que conversamos no JavaScript. Na pasta da aula eu vou criar um novo arquivo chamado “quickSort.js”. E já na primeira linha não podemos esquecer de importar a nossa lista de livros: const listaLivros = require(‘./array’);.

A primeira coisa que eu vou fazer é criar a função do quick sort. Vamos lembrar um pouco do merge sort que trabalhamos anteriormente.

 A primeira coisa que eu vou fazer é criar uma função parecida com merge sort, só que agora vamos trabalhar com outro algoritmo. Mas o princípio será muito parecido: é uma função que, como temos que pegar um array e ir dividindo e diminuindo, vamos trabalhar com o mesmo princípio de recursão.

 Então vou criar primeiro uma função que eu vou chamar de quick sort: function quickSort(). Essa função precisa receber o array que ela vai trabalhar, e também, lembrando que estamos trabalhando com um array só, precisa passar a posição onde ela começa a trabalhar e onde ela termina de trabalhar, ou seja, o índice de início e o de final.

 No quick sort trabalhamos muito com o conceito de parte da esquerda e da direita do pivô. Então vamos passar como segundo e terceiro parâmetro “esquerda” e “direita”, que é a parte esquerda, o índice de início, e a parte direita, onde seria o índice de final onde o array precisa encontrar o pivô e fazer a ordenação. Então function quickSort(array, esquerda, direita).

 Na última linha da função já vou pedir para retornar o array que será o array organizado, ordenado: return array;. E na última linha do arquivo já deixo o quick sort chamado com “listaLivros”, então faço console.log(quickSort(listaLivros)).

 E como na última linha do arquivo é onde será feita a primeira chamada da função, já passamos o índice de início, que é o 0, a primeira posição do array e o final, que é listaLivros.length.

 Porém, passamos listaLivros.length - 1 porque length é uma propriedade que traz a quantidade de elementos. E não queremos a quantidade de elementos, queremos o índice do array. Lembrando que o array começa com 0, então é length -1.

 Como já tínhamos visto anteriormente, temos que diminuir o array até que ele seja um array de um elemento, para então você fazer a comparação entre dois.

 Então vamos dizer que só vai executar o que está dentro da função quick sort se o array.length que for passado como parâmetro for maior do que 1: if (array.length > 1).

 Se for menor, já vai retornar só o que tem no array, o elemento dele. Então dentro desse if é que vamos desenvolver toda a parte de recursão, de ficar chamando a função.

 E dentro, da mesma forma que fizemos com o merge sort, vamos fazer as chamadas recursivas e fazer a parte de ordenação. Então a primeira coisa que temos que pegar no nosso quick sort é criar uma let que eu vou chamar de var temporária, porque ainda não sabemos o que virá.

 E dentro dessa var temporária eu vou criar uma função parecida com a função “ordena” que é chamada no merge sort, só que eu vou chamar essa função de “particiona”, que é o que ela está fazendo na verdade: let varTemp = particiona().

Essa função “particiona” também vai receber o array que ela vai trabalhar, a parte esquerda, onde tem que começar, e a parte direita onde tem que parar: let varTemp = particiona(array, esquerda, direita).

 Lembrando que cada vez que essa função for chamada ela vai receber novos valores de início e de fim do array.

 Agora vamos escrever a nossa função particiona. Então function particiona(). Ela vai receber o array, a parte esquerda e a parte direta do array, que é o índice onde ele para de percorrer: function particiona(array, esquerda, direita).

 A primeira coisa que tem que fazer na hora que pegamos um array para fazer o quick sort é achar o pivô. E o pivô pode ser encontrado de várias maneiras, colocado no começo do array, colocado no final, um número aleatório, mas vamos manter no meio.

 Então vou criar uma let pivô, lembrando que queremos pegar o dado, porque o objeto é onde tem o valor, o título e o valor do livro, que é o que queremos comparar.

 Então tem que ser array na posição Math.floor para trazer um número arredondado. E vai ser o resultado de (esquerda + direita) / 2, colocando “esquerda + direita” entre parênteses para que essa operação seja feita primeiro: let pivo = array[Math.floor((esquerda + direita) / 2)].

 Ou seja, vamos somar o índice passado como esquerda e passado como direita e dividir por 2. E assim conseguimos ter o número, o valor do pivô. Ou seja, quando fizermos a primeira chamada da função, vai começar no zero, que é o primeiro índice, vai terminar no 10, porque estamos trabalhando com uma lista de 11 elementos.

0 + 10 dá 10, dividindo por 2 dá 5. Então vai estar no índice 5, o sexto elemento. E sucessivamente, a partir do momento que formos diminuindo o array, vai ser a mesma lógica.

 E agora vamos pensar um pouco melhor em como vai funcionar esse particiona. Para fazer um for que percorre todos os elementos, vê quantos tem menor, encontra a posição do pivô e só depois movimenta o pivô é muita coisa. Vamos tentar fazer isso de uma forma um pouco diferente e mais performática.

 Vamos pensar dessa forma: temos uma lista de 10 elementos que começa no zero e vai até o 10, que é onde queremos começar. Fazendo isso, encontramos o pivô no elemento de valor 22, que é o sexto elemento, ou elemento de índice 5.

 Nós sabemos que tudo que tem valor menor do que 22 tem que estar à esquerda do pivô, e tudo que tem valor maior tem que estar à direita. Então começamos verificando quais elementos do lado esquerdo não deveriam estar lá, ou seja, os elementos de valor maior.

 Nós começamos a fazer isso a partir do índice 0, a partir de onde começa o nosso trecho de array.

Então logo o primeiro elemento já tem valor maior, porque 45 é um valor maior do que o pivô, que é 22. Então já temos um elemento que está no lugar errado. Vamos parar por aqui, vamos segurar o índice desse elemento, que é o índice 0.

 Vamos então passar para o outro lado e ver se eu tenho algum elemento do lado direito que não deveria estar lá, porque assim eu posso trocar os dois de lugar.

 Já o último elemento do array, o elemento de índice 10, já é menor do que o pivô, então ele também está no lugar errado. O que fazemos então? Trocamos esses dois elementos de lugar.

 Trocamos o de 20 e o de 45. Vamos continuar percorrendo para a esquerda, lembrando que sempre começamos na esquerda.

 O próximo elemento do índice 1, o 35, já é maior do que 22, então 35 também está no lugar errado. Segura esse elemento, esse índice. Vamos ver se podemos trocá-lo de lugar com alguém que está do lado direito.

 Do lado direito temos 33, que não é menor do que 22, então está no lugar certo. 25 não é menor do que 22, também está no lugar certo. Temos 28, depois 40 e chegamos no pivô.

O pivô não tem valor menor do que o pivô, podemos considerar que tem valor igual. Mas ele ainda está no lugar errado com relação ao 35, que é onde paramos na esquerda. Então trocamos eles de lugar também.

Vamos trocar o pivô de lugar. Lembrando que o pivô se movimenta também. Ele começa no centro, mas não quer dizer que vai ficar no centro. Mas nessa iteração ele continua sendo o pivô.

 O atual da esquerda é o 30. 30 é maior do que 22. Apesar de eles terem trocado de lugar, 30 ainda é maior do que 22. Então vamos segurar esse elemento. A comparação ainda está sendo feita com o pivô, então segura o 30.

 35 é maior, então está certo, a parte da direita está certa ainda. 50 é maior do que 22, está certo ainda. Lembrando que estamos diminuindo, decrementando o índice.

 Chegamos no 15. 15 é menor do que 22. Então podemos fazer a mesma coisa que fizemos anteriormente. Vamos trocar o índice atual que está guardado na esquerda com o índice atual da direita. Então trocamos Java com PHP.

 Continuamos andando, só que se continuarmos decrementando a direita e incrementando a esquerda, eles se cruzam. A partir do momento que ele se cruzam, se continuamos com essa mesma lógica, essas variáveis vão ficar andando de um lado para o outro.

 Então a partir do momento que ele se cruzam, que o valor do índice da esquerda não é mais menor do que o índice da direita é a hora que temos que parar essa iteração e ver o que aconteceu.

 Para a esquerda do meu índice atual eu tenho já três elementos que são menores, 20, 22 e 15. E esses elementos não estão ordenados entre si. Então nesse momento nós paramos e passamos o valor atual da minha variável que está controlando os índices da esquerda como referência para a próxima iteração, para a próxima chamada da função.

 Então a próxima chamada da função vai ser do 0 até um índice antes do que paramos. Então ele vai percorrer o índice 0, o índice 1 e o índice 2.

 No final desse processo teremos nosso pequeno array de três elementos, 20, 22 e 15, alinhados entre si. E é fazendo essas pequenas partes de alinhamento que esse algoritmo vai funcionar.


## IMplementando o codigo

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/1910f0ad-97db-4788-85e8-ad800e71404d)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/396eac35-3f30-43dd-b6d6-de0ce34140ee)

Então se o índice da atual esquerda for menor ou igual ao índice da atual direita, nós trocamos de lugar: if (atualEsquerda <= atualDireita). E já temos um algoritmo pronto para trocar de lugar, que está dentro do meu arquivo “trocaMenores”, é a função “trocaLugar”.

 O que podemos fazer então no final do arquivo “encontraMenores.js” é um module.exports = trocaLugar;.

 E importamos dentro de “quickSort.js” a função “trocaLugar” para podermos usá-la. Então no começo do arquivo fazemos const trocaLugar = require(‘./encontraMenores’);. E vamos usar essa função dentro do nosso if. Se for menor nós chamamos a função “trocaLugar”.

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/3e72f087-8b9f-4d91-9b4d-3fea7fa3aa76)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/96b77cfc-55b6-4624-be48-a81b9f64c72d)

testa no terminal, e ele deve retornar um array ordenado.



## Para saber mais: Uma implementação “oficial”?

Durante o curso, temos abordado cada algoritmo a partir do conceito, passando pela representação em diagrama/teste de mesa, para só depois implementar o código. O que pode gerar a pergunta: Existe mais de uma forma de implementar um algoritmo?

A resposta é: sim. O código, com suas funções e métodos utilizados, pode variar e depende inclusive da linguagem utilizada. É possível encontrar o mesmo algoritmo implementado de formas diferentes. Porém, a lógica de funcionamento do algoritmo sempre permanece a mesma. Por esse motivo não começamos direto pelo código e sim entendendo como o algoritmo é pensado e como ele deve se comportar.

Durante o curso, desenvolvemos primeiramente um código mais “agnóstico”, para em seguida utilizar mais métodos como, por exemplo, array.push(). Mas seria possível desacoplar ainda mais, abstraindo funções de comparação para não depender de uma propriedade objeto.preco, por exemplo.

Você pode testar suas próprias ideias ou pesquisar outras implementações. 

## Faça como eu fiz: Revisando valoresMenores


Durante a aula, utilizamos a variável valoresMenores na função divideNoPivo(). Vamos analisar esta variável para entender como ocorre a troca de posições no array.

A primeira coisa que a função divideNoPivo() faz é localizar o pivô no meio do array (no array que usamos na aula é a posição listaLivros[5], ou seja: { titulo: “Rust”, preco: 22 }. Em seguida, chama a função encontraMenores() que vai contar quantos elementos com valor menor que 22 existem no array, para em seguida trocar o pivô de lugar com o elemento que está na posição seguinte à quantidade de elementos menores.


```
function divideNoPivo(array) {
 let pivo = array[Math.floor(array.length / 2)];
 encontraMenores(pivo, array);

 return array;
}
```


Em seguida, é feito um loop para passar os elementos com valor menor que o pivô para a esquerda dele, e os de valor maior para a direita.

A variável atual guarda o objeto referente ao elemento que será comparado com o valor do pivô, e é dessa variável que pegaremos a propriedade preco.


```
function divideNoPivo(array) {
 let pivo = array[Math.floor(array.length / 2)];
 encontraMenores(pivo, array);
 let valoresMenores = 0;

 for(let analisando = 0; analisando < array.length; analisando++) {
   let atual = array[analisando];
 }

 return array;
}
```

Chegamos à condicional `if`, que faz a comparação do preco entre o pivô e o atual. Caso o preço do elemento atual seja menor, chamamos a função trocaLugar para trocar a posição do elemento atual com o elemento na posição valoresMenores - lembrando que o valor inicial dessa variável é `0`, o que corresponde ao índice do primeiro elemento do array.

Em seguida, o valor da variável `valoresMenores` é incrementado.


```
function divideNoPivo(array) {
 let pivo = array[Math.floor(array.length / 2)];
 encontraMenores(pivo, array);
 let valoresMenores = 0;

 for(let analisando = 0; analisando < array.length; analisando++) {
   let atual = array[analisando];
   if(atual.preco <= pivo.preco && atual !== pivo) {
     trocaLugar(array, analisando, valoresMenores)
     valoresMenores++
   }
 }

 return array;
}
```


Destrinchando o intuito da variável valoresMenores: ela está controlando a posição onde serão inseridos os elementos com valores menores que o pivô - lembrando que nesse momento o pivô já está posicionado em seu índice correto.

Por esse motivo valoresMenores é iniciada no índice 0: durante o laço for, cada elemento do array tem sua propriedade preco comparada com preco do elemento pivô. Quando é encontrado o primeiro elemento com valor menor (PHP no índice 3), o código entra no bloco if e chama a função trocaLugar() passando como parâmetros de troca a posição do elemento atual e a posição 0, que é o valor da variável valoresMenores neste momento da execução.

Isso vai fazer com que um elemento de valor menor que o pivô assuma o lugar de um elemento de valor maior.

Ou seja, após a primeira execução da função saímos de:

```
[
 {
   titulo: "Go",
   preco: 45
 },
 {
   titulo: "C++",
   preco: 35
 },
 {
   titulo: "Java",
   preco: 30
 },
 {
 titulo: "PHP",
 preco: 15
 },
 {
   titulo: "Elixir",
   preco: 50
 },
 {
   titulo: "Rust",
   preco: 22
 },
 // restante dos elementos
]COPIAR CÓDIGO
Após o posicionamento do pivô:

[
 {
   titulo: "Go",
   preco: 45
 },
 {
   titulo: "C++",
   preco: 35
 },
 {
   titulo: "Rust",
   preco: 22
 },
 {
 titulo: "PHP",
 preco: 15
 },
 {
   titulo: "Elixir",
   preco: 50
 },
 {
   titulo: "Java",
   preco: 30
 },

 // restante dos elementos
]
```


E quando o for chega no quarto elemento (índice 3), localiza pela primeira vez um elemento do array com valor menor que o pivô. Então o valor de valoresMenores é `0` e o elemento PHP de valor 15 trocará de lugar com Go de 45.

```
[
 {
   titulo: "PHP",
   preco: 15
 },
 {
   titulo: "C++",
   preco: 35
 },
 {
   titulo: "Rust",
   preco: 22
 },
 {
   titulo: "Go",
   preco: 45
 },
 {
   titulo: "Elixir",
   preco: 50
 },
 {
   titulo: "Java",
   preco: 30
 },

 // restante dos elementos
]
```


Após a troca, valoresMenores é incrementada em `1` (com a linha valoresMenores++). Dessa forma, da próxima vez que o for localizar um elemento com valor menor que o pivô, ele será trocado pelo elemento que está no índice `valoresMenores` ou seja, `1`.


## OBS: NAO ESTA DANDO O MESMO RESULTADO DA PROF. REVER TODO O CODIGO.


# 4. BUSCA BINARIA

## Dividir para Buscar


![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/80ef0ea4-43d6-4832-9acc-09ec2e49dbbe)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/9069e541-c3d6-47ba-bc54-8c572ebe5a5e)


![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/7f55cd9a-c669-4933-8d3b-5f2eba972171)


![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/08c55f69-1dce-4df4-abc8-f8f9b4f2c6ce)


![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/16dbcd13-7602-46cb-8f34-62e93478a77e)

 como seria se, ao invés de um algoritmo de ordenação, tentássemos utilizar isso em uma busca?

[00:10] Por exemplo, até agora nos algoritmos de busca que vimos, aquele primeiro que pensamos em implementar com for vai percorrer todo um array para encontrar e devolver o elemento, ou ir até o final para dizer que não encontrou o elemento.

[00:29] Se tentássemos dividir a busca em partes, será que funcionaria melhor? Vamos ver então com um exemplo mais do mundo real.

[00:39] É possível que você já tenha feito a seguinte brincadeira: eu vou pensar num número de 1 a 10 ou de 1 a 100, tanto faz, e você vai tentar adivinhar qual é esse número com a menor quantidade de chutes necessária.

[00:53] Então se meu número é 50 e você chuta 25, eu falo “mais”, se for um número maior, ou “menos”, se for um número menor.

[01:03] Como seria a melhor estratégia para um jogo como esse? Normalmente a pessoa vai ajudar quem está tentando chutar dizendo “menos” ou “mais”. E se simulássemos esse jogo com um número de 1 a 10 para ficar mais fácil de visualizar, ao invés de 1 a 100?

[01:25] Vamos tentar simular e pensar assim: a pessoa pensou no número 7, e eu vou começar a chutar. Eu chuto o número 5, por exemplo. E a pessoa vai falar “mais”, porque eu chuto no 5 e o número é 7.

[01:42] Nesse momento nós descartamos automaticamente tudo que é de 5 para baixo, porque ela falou que é mais, então não tem porque eu ficar chutando 3, por exemplo, que não tem nada a ver.

[01:55] E se é uma lista de 10 números e eu chuto bem no meio e erro, eu já consigo descartar metade de uma lista, ou para cima ou para baixo, depende se a pessoa fala “mais” ou “menos”.

[02:08] E como seria o próximo chute? Nós podemos seguir sequencialmente, chutando 6, 7 e assim por diante, mas não é a melhor alternativa. Nós poderíamos aplicar essa mesma lógica para chutar 8, que é mais ou menos no meio, e tentar descartar novamente metade da lista.

[02:25] Eu chuto 8, a pessoa vai falar “menos”. Só que com essa abordagem, com dois chutes eu já descartei quase todos os números. Sobrou apenas 6 e 7.

[02:36] Ou seja, eu consigo acertar um número em no máximo três chutes. Descartei a metade, depois descartei metade da metade, e apenas com 3 chutes no máximo eu consigo acertar, porque eu vou direto no número certo ou eu vou descartar o número que está errado e ter o número certo por redução de possibilidades.

[02:59] Se aplicássemos isso, por exemplo, para uma lista telefônica ou uma lista de produtos ordenados por preço, nós meio que já utilizamos essa lógica sem perceber na cabeça.

[03:13] Então se eu estou procurando numa lista um produto de R$ 30, eu dou uma olhada no começo da lista e o primeiro preço é 15, olho o último preço e é 50, nós meio que já sabemos mais ou menos onde procurar. Nós não vamos passar por 15, 20, 21, 22, 23, nem o contrário. Nós encurtamos, fazendo isso mentalmente. Eu vou direto na margem mais ou menos onde está o 30.

[03:44] É a mesma coisa numa lista ordenada em ordem alfabética. Se seu nome começa com J você não começa procurando o seu nome na lista no A. Você não precisa, você pode ir direto no começo do J e encontrar.

[03:55] Se é “Ju” de Juliana, então não está no “Ja”, de Janaína, eu posso tentar achar o final dos que começam com J, porque é mais provável que o meu nome esteja lá.

[04:04] E nós já fazemos isso normalmente na nossa cabeça. E da mesma forma que fizemos com o jogo de acertar o número, nós conseguimos reduzir uma lista. Por exemplo, se eu quero mais ou menos no meio, tiro os muito baratos e os muito caros, e conseguimos acertar com uma quantidade bem menor de chutes.

[04:21] Ou seja, no código nós conseguiríamos acertar o elemento que estamos buscando com uma quantidade bem menor de operações do que ficar procurando A, B, C, D, E quando eu quero o J, ou no 1, 2, 3, 4, 5 quando eu quero o 20, por exemplo.

[04:38] Se considerarmos um array de mil elementos, a lógica vai ser parecida: dividimos de mil para 500, de 500 para 250, de 250 para 175 e por aí vai.

[04:48] Vamos sempre diminuindo a lista, ou seja, numa quantidade muito menor de operações fica bem menor, mas mesmo assim o crescimento em quantidade maior de operações também não vai ser tanto assim.

[04:59] Vamos tentar implementar um algoritmo que traduza essa divisão para conquista para fazer uma busca.

## Busca Binária

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/3500b1f3-7b1f-4fe6-baed-ce8294b805d2)


![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/28e9a38b-1ad9-41a8-b16d-ce026761fb57)

Testa no terminal.

Vamos tentar rodar com um valor que nao existe na lista:

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/91d7e94e-86ce-48b2-a93a-ba46a2fce13c)

Vamos fazer essa implementação em código do que nós vimos anteriormente. Eu já vou deixar pronto também um arquivo chamado “arrayOrdenado.js” com a lista de livros que já estamos trabalhando, porém agora já ordenada, pronta para fazer a busca. Dentro da pasta eu vou criar um arquivo que eu vou chamar de “busca.js”.

[00:21] A primeira coisa a fazer, como sempre, é importar a nossa lista livros: const listaLivros = require(‘./arrayOrdenado’);. E vamos criar a nossa função: function busca(). E o que essa função precisa receber? A primeira coisa será o array que vamos trabalhar: function busca(array, ).

[00:40] E lembrando do que fizemos anteriormente no merge sort e no quick sort, a cada vez que executarmos a função busca, ela terá que fatiar o array e trabalhar com partes cada vez menores. Então começa com o array inteiro, e se o valor buscado for menor vamos cancelar toda a parte direita do array.

[01:04] Então a cada chamada de função nós precisamos passar para ela o que eu vou chamar de “de” e “até”, ou seja, o índice onde começa a fazer a busca e o índice até onde vai, porque estaremos trabalhando com fatias do array.

[01:19] Então o segundo parâmetro eu vou chamar de “de” e o terceiro de “até”: function busca(array, de, ate).

[01:26] E o quarto parâmetro será o valor buscado, porque obviamente precisamos passar alguma coisa para essa função buscar para nós e eu vou pedir para retornar o índice onde está o elemento; ou não, se não encontrar nada. Então fica function busca(array, de, ate, valorBuscado).

[01:39] Revisando então como o algoritmo tem que funcionar: a cada vez que chamamos a função, tem que pegar um elemento sempre do meio do array e verificar. Por exemplo, se o elemento buscado é de 22 e o do meio é de 30, significa que o elemento buscado tem um valor menor, então ele estará à esquerda do elemento do meio. Lembrando que estamos trabalhando com um array já ordenado.

[02:07] E o contrário, se por exemplo, o valor buscado é 40 e valor do meio é 30, significa que o valor buscado está em algum lugar à direita, então temos que procurar à direita do meio e podemos descartar todo o resto.

[02:23] Então o que temos que fazer primeiro é encontrar o meio. Então vou criar uma const meio. Agora não é mais pivô, porque sempre estaremos trabalhando com o meio do array, e esse meio do array não vai se movimentar durante o processamento da função a cada iteração. O meio é sempre o meio.

[02:41] E será o resultado de Math.floor, e passamos “(de + até)”, a mesma coisa que fizemos anteriormente. Passamos o índice de começo e o de final e dividimos por dois. Eu vou englobar “de + até” com parênteses para fazer essa operação primeiro, então const meio = Math.floor((de + ate) / 2);. E com isso já temos o meio.

[03:03] Eu vou criar outra const que eu vou chamar de atual, que será o array na posição meio, porque temos o objeto e conseguimos acessar a propriedade preço para fazer a comparação: const atual = array[meio];.

[03:14] A partir disso temos três coisas possíveis que podem acontecer. A primeira coisa que pode acontecer é o elemento do meio ser exatamente o elemento que estamos buscando. Então pode acontecer da primeira vez ou podemos percorrer esse array até que isso aconteça.

[03:33] Então se o valor buscado for igual ao preço atual, nós só retornamos o meio, porque já é o índice onde está o valor que estamos buscando: if (valorBuscado === atual.preco) { return meio; }. Acabou processamento por aqui e saiu da função.

[03:55] Temos outros dois casos possíveis. Um deles é se o valor buscado for menor do que o preço atual. Isso significa que temos que procurar em alguma parte do array: if (valorBuscado < atual.preco).

[04:08] E o outro caso é se o valor buscado for maior do que o preço atual, e então temos que buscar em outra parte do array: if (valorBuscado > atual.preco).

[04:20] E agora nós vamos usar a recursão para fazer a busca se chamar da mesma forma que fizemos com o merge sort e o quick sort. Porque cada vez que chamarmos a função busca, vamos passar valores atualizados de início e de fim do array para fazer a busca dentro dele.

[04:41] E vamos fatiar esse array até que caia na situação de valor buscado ser igual ao preço atual, e nesse caso em que encontrou o elemento, retorna o índice do elemento e fecha o processamento.

[04:57] Então dentro do primeiro if, em que o valor buscado é menor do que o preço atual, nós temos que retornar busca, passando agora como parâmetro array: return busca(array, ).

[05:09] E vamos ver quais são os valores de “de” e de “até” que temos que passar. Se o valor buscado for menor do que o preço atual, isso significa que podemos descartar tudo que está à direita do valor do meio, inclusive ele.

[05:30] Então nesse caso quais seriam os valores atualizados de “de” e de “até”? O de “de” continua sendo o primeiro índice que passamos, o índice 0, no caso da primeira chamada da função.

[05:45] Nós continuamos trabalhando com o mesmo “de”, no caso, o índice 0 que depois vai mudar. Só que agora até onde vai nossa busca? Nossa busca não precisa mais ir até o final, ela pode parar antes do meio, porque o meio para o final já foi descartado.

[06:02] Então a nossa busca vai começar onde já estava começando, no caso, no índice 0, e depois vai continuando, e vai parar antes do meio.

[06:14] Ou seja, a condição de início continua sendo “de”, só que agora a condição de parada vai ser meio menos um: return busca(array, de, meio -1).

[06:30] Então vamos começar onde já estava começando, só que agora paramos antes do meio, descartando toda a parte do meio para a direita. E o valor buscado continua sendo o mesmo, e retorna esse valor: return busca(array, de, meio -1, valorBuscado);.

[06:48] A outra condição, que é valor buscado maior do que o preço atual, vai ser a mesma lógica, só que vamos buscar numa parte diferente do array. Começamos passando o array como parâmetro: return busca(array, ).

[07:05] O “de” agora não é mais o começo. Se o valor buscado for maior do que o meio, fazemos o contrário: descartamos do começo até o meio. Então nosso valor de início passa a ser 1 depois do meio, porque nós descartamos o meio e tudo que vem antes dele. Então o valor de início agora, ao invés de “de”, é “meio + 1”: return busca(array, meio + 1).

[07:32] E o índice de parada, até o final do array, é “até”, que já era onde estávamos parando: return busca(array, meio + 1, ate). E o valor buscado continua sendo o mesmo: return busca(array, meio + 1, ate, valorBuscado).

[07:46] Agora vamos testar a função, passando console.log(busca(listaLivros)). A condição de início da primeira chamada da função é o índice 0, o final vai ser listaLivros.length -1, como já fizemos nas outras vezes: console.log(busca(listaLivros, 0, listaLivros.length -1)).

[08:12] E o valor buscado vamos fazer um teste com o 40. Vou passar o 40, que é o índice 8 do nosso array. Então vou passar 40, que é o valor buscado: console.log(busca(listaLivros, 0, listaLivros.length -1, 40)).

[08:29] E vamos para o terminal. Eu já estou na pasta certa, vou chamar node busca.js. E ele retornou o índice 8, ou seja, está funcionando. Mas o que acontece se de repente passarmos um valor que não existe?

[08:48] Eu vou tentar antes passar novamente essa função com um valor menor para ver se funciona. Então vou tentar, por exemplo, o 20, que é o índice 1. Então vou chamar a mesma função passando 20 como parâmetro: console.log(busca(listaLivros, 0, listaLivros.length -1, 20)).

[09:01] Rodamos novamente no terminal e ele retorna o índice 1. Está funcionando. Só que o que acontece se eu passar, por exemplo, 60, que é um valor que não tem? Vamos tentar rodar novamente com 60.

[09:13] Ele deu um stack overflow, aconteceu um erro. Quando o node entra num loop infinito ele vê que já não dá mais para colocar processamento nessa pilha, então ele para de executar. Vamos ver o que aconteceu no próximo vídeo.


## Refatorando a Busca

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/bf41ffc2-98f5-46f8-b31d-e22808193e32)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/9e21c95c-9dc5-4af4-8c3e-ede8b905fa62)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/c8d46393-0939-45be-9607-028fba4783e4)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/15518941-1fdf-4001-8b38-e19793fe0ee9)


Implementamos o algoritmo da nossa busca, porém, o que acontece quando passamos um elemento que não existe na lista? Ele deu erro. E pode acontecer quando fazemos uma busca de o elemento não existir. E não pode dar erro nesses casos.

[00:19] O que tivemos nessa situação foi um erro de pilha. Quando não estabelecemos para a recursão uma condição de parada de chamada, quando a função tem que parar de se chamar, acontece um processo parecido com o que chamamos de loop infinito quando usamos um for, por exemplo.

[00:40] As funções vão se empilhando para serem executadas, e chega uma hora que aquilo explode, então o problema para. O erro que temos é que excedeu a quantidade máxima de processos que estão na pilha para serem executados. É basicamente isso.

[01:00] Eu vou deixar um material sobre esse erro no material extra dessa aula. Mas enfim, tivemos um erro de stack overflow.

[01:09] Vamos ver o que fazemos então para corrigir isso. Para entendermos o que está acontecendo e porque eu falei que não demos condição de parada para a recursão, eu vou colocar um console.log na primeira linha dentro da função busca.

[01:30] Eu vou pedir para esse console passar o que está chegando em cada chamada da função busca nos parâmetros “de” e “até”: console.log(‘de, ate’, de, ate);.

[01:41] Vamos rodar novamente. Antes de dar o stack error ele foi fazendo várias chamadas e ele começou a colocar na pilha de execução e tentar ficar chamando a função passando os valores de parâmetro “de” 11 e “até” 10.

[02:10] Só que se formos ver, o valor de início não pode ser maior do que o valor de fim de um array. Temos que começar sempre num índice que é menor do que o índice onde para, porque estamos indo ordenadamente.

[02:32] Agora que já sabemos o que está acontecendo, o que podemos fazer para lidar com esse erro? Voltando no código, o elemento que não existe no caso que tentamos chamar era um elemento maior, ele teria que estar à direita do meio.

[02:48] Quando foram feitas as divisões, sempre tentando achar um número maior do que o maior número que existe, foi-se acrescentando um no valor de “de”. Então “de” sempre começava com mais 1, até que o “de” extrapolou o valor de “até”.

[03:10] Então podemos pensar que quando isso acontece é que não encontrou o elemento. Então se não encontrou elemento, retorna alguma mensagem só para conseguirmos um retorno de função que faça com que ela pare de ser executada.

[03:27] Vamos fazer então da seguinte forma: antes de começarmos o primeiro if que faz as comparações de valores, vamos colocar um if a mais. Eu vou dizer que se “de” for maior do que “até”, eu vou pedir para retornar -1: if (de > ate) { return -1; }. - 1 é o número de índice que o JavaScript costuma retornar nas suas funções de sort quando não encontra nada.

[03:54] Então se encontra um índice ele retorna o número do índice. Se não encontra nada que foi buscado retorna -1. Então vamos retornar -1 se “de” for maior do que “até”.

[04:08] Vou limpar o console e testar novamente. Agora o console alertou o que estava acontecendo. Estava tentando primeiro de 0 a 10, depois de 6 para 10, depois de 9 para 10, depois de 10 para 10, e ele foi para frente até que “de” ficou maior do que o “até”. E então ele retornou para nós o -1.

[04:27] Podemos apagar o console que colocamos de verificação para deixar o código um pouco mais limpo.

[04:34] E agora eu acho que a nossa função de busca está completa. O que acabamos de desenvolver é uma busca chamada de busca binária, porque ela sempre divide a lista em duas partes e procura em uma das duas.

[04:49] Então divide em duas, procura em uma das duas partes; divide essa parte em mais duas e procura em cada uma delas; divide em mais duas e procura em cada uma delas.

[04:57] Dá para perceber que com esse método o computador vai fazer menos operações do que se fosse pesquisando um por um, passando por todos os elementos. Numa lista de mil elementos ele vai fazer mil processamentos, mas com a busca binária vai fazer bem menos. Primeiro vai dividir, vai pegar só 500 elementos; depois vai dividir de novo e assim por diante.

[05:22] Nós temos a impressão de que esse algoritmo é melhor, mas vamos ver agora em seguida se realmente ele é melhor e porque.


## Para saber mais: Outros erros da busca binária
PRÓXIMA ATIVIDADE

Durante a aula, vimos que, se não colocamos a condição de > ate e tentarmos buscar um número inexistente maior do que qualquer um da lista, o resultado será um erro do tipo RangeError: Maximum call stack size exceeded.

Vamos falar um pouco mais sobre este erro em seguida. Mas agora, vamos testar mais dois casos: Um elemento inexistente menor do que qualquer um da lista, e outro inexistente no meio, ou seja, entre os valores da lista.

Valor menor:
Vamos chamar a função passando 1 como valor buscado:

console.log(busca(listaLivros, 0, listaLivros.length - 1, 1));COPIAR CÓDIGO
Executando o código, temos o seguinte retorno no terminal:

/<diretório>/aula-4/busca.js:11
  if (valorBuscado === atual.preco) {
                             ^

TypeError: Cannot read property 'preco' of undefinedCOPIAR CÓDIGO
Ué, não deveríamos ter recebido um erro do tipo rangeError? O que aconteceu de diferente?

Vamos conferir o que a função busca() está recebendo como parâmetro a cada chamada:

function busca(array, de, ate, valorBuscado) {
 console.log('de, ate', de, ate)
 //restante do código
}COPIAR CÓDIGO
E executar novamente:

de, ate 0 10
de, ate 0 4
de, ate 0 1
de, ate 0 -1COPIAR CÓDIGO
No caso de valores menores, o código do algoritmo chama a função busca() passando sempre o valor do parâmetro ate diminuindo um número:

 if (valorBuscado < atual.preco) {
   return busca(array, de, meio - 1, valorBuscado);
 }COPIAR CÓDIGO
Quando o valor atinge -1, que não é um valor válido de índice de array, o resultado de atual.preco retornará undefined.

Valor inexistente no meio do array
Vamos chamar a função passando 36 como valor buscado. Não é menor do que todos nem maior do que todos, porém não existe nenhum objeto com esse valor no array:

console.log(busca(listaLivros, 0, listaLivros.length - 1, 36));COPIAR CÓDIGO
Executando o código, temos o seguinte retorno no terminal:

RangeError: Maximum call stack size exceededCOPIAR CÓDIGO
Dessa vez, voltamos a receber o rangeError. Observando o `console.log(‘de, ate’, de, ate), os valores finais retornados são:

de, ate 8 7
de, ate 8 7
de, ate 8 7
de, ate 8 7COPIAR CÓDIGO
Até atingir call stack size exceeded, da mesma forma que ocorreu quando passamos o valor de 60, maior do que o maior elemento do array.

Faça a conferência em seu projeto!

## Para saber mais: Maximum call stack size
PRÓXIMA ATIVIDADE

Vamos ver um pouco mais a fundo o que significa o erro RangeError: Maximum call stack size exceeded visto anteriormente.

A pilha de chamadas
Em programação, uma pilha é uma estrutura de dados onde o último item adicionado é o primeiro a ser removido - como uma pilha de livros no mundo real, por exemplo. Também nos referimos como pilha (ou stack) a estrutura onde estão “empilhados” os processos que estão sendo executados em um programa.

Nem todo interpretador ou linguagem de programação lida da mesma forma com os processos que devem ser executados por um programa. O NodeJS trabalha com o paradigma de programação orientada a eventos (event driven programming), e o gerenciamento dos processos ocorre através do que chamamos de loop de eventos.

Não vamos entrar em detalhes aqui sobre como ocorrem a entrada e a saída de processos deste loop e a forma como o Node trabalha com threads e programação assíncrona - são assuntos complexos o suficiente para terem seus próprios cursos. Porém, vale mencionar aqui que, assim como em outras linguagens de programação, o JavaScript também trabalha com pilhas de chamadas. No NodeJS, esta pilha faz parte da estrutura do loop de eventos; quando uma função é chamada por um programa ela entra na stack, ou seja, na pilha de execução, onde apenas um processo é executado por vez e o próximo processo só é executado após a finalização do processo atual.

Esta pilha tem uma quantidade limitada de processos que podem ser empilhados (o que depende de muitos fatores, como memória disponível, arquitetura, etc); caso o interpretador não consiga limpar a pilha, ou seja, executar e finalizar os processos/funções que estão empilhados, ao atingir o limite o programa cai no chamado erro de estouro de pilha, também chamado de stack overflow (daí o nome do famoso [fórum de programação](https://stackoverflow.com/)).

Um dos motivos mais comuns para o estouro de pilha são justamente as chamadas recursivas onde o caso base (como vimos na atividade “Para Saber Mais” da aula 2) não existe ou não foi definido da forma correta. Sem o caso base, as funções recursivas não param de ser chamadas e vão se empilhando na pilha de chamadas, até que não haja mais recursos para processar o programa.

No caso do exemplo visto durante a aula, o NodeJS retorna o erro RangeError: Maximum call stack size exceeded, ou “tamanho máximo da pilha de chamadas excedido” e encerra a execução.

Por isso, é muito importante sempre testar as funções recursivas e definir quando interromper a recursividade.

# 5. Analise dos Algoritmos

## Analise da Busca

Algoritmo de crescimento linear --> de um em um da lista

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/52db1371-b0e5-4ed1-ae1c-624ae2f54be6)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/3c3cd16b-03f4-41e3-b579-e220cd4bbb7d)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/0598bf13-edb8-4e48-8d50-b0ad67b3eaa7)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/069da77b-fb02-4ae8-b52a-f238c0dbf404)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/b26bea0f-0ee4-4497-8ae9-d00d64aea5ad)

log na base 2

o numero de operações cresce de acordo com o log de n.

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/34963a50-3842-4499-826d-4e7d9e365782)

![image](https://github.com/FlavianaFXT/algoritmos-js-II/assets/113718720/f1d9dafe-e434-4545-ac72-bb706df18454)

Quando buscamos algo em uma lista utilizando uma busca linear, o programa tem que percorrer todos os elementos da lista até encontrar o que queremos.

[00:11] Claro que o elemento buscado pode, por exemplo, estar na primeira posição ou ser uma das primeiras posições.

[00:16] Mas quando estamos pensando em cálculo de complexidade de algoritmo isso é meio que irrelevante. Não podemos levar isso em consideração, mesmo porque o elemento pode não existir na lista.

[00:29] E se o elemento não existe na lista o programa só vai retornar essa informação depois que passar por todos os elementos, do índice 0 até o último índice, não importa se for uma lista de 10, mil, 10 mil ou 100 mil elementos. Então numa lista de 100 mil elementos são 100 mil operações; numa lista de 20 mil elementos, 20 mil operações.

[00:50] Esse algoritmo que pula de elemento em elemento nós dizemos que é um algoritmo de crescimento linear, porque ele cresce em complexidade numa relação direta com a quantidade de elementos que tem na lista. Nós veremos isso num gráfico daqui a pouco.

[01:11] E a busca binária que acabamos de fazer? Vamos ver como ela funciona. Na busca binária nós pegamos um array, dividimos em dois e localizamos se está para a esquerda ou para a direita do meio. E nessa única operação já descartamos metade de uma lista.

[01:29] Então numa lista de mil elementos já descartamos de uma vez só 500 elementos. No caso da nossa lista de 11 elementos, vai dividir no meio e descartar de uma vez seis elementos.

[01:41] E vamos, por exemplo, continuar buscando o elemento que está no índice 8, o nono elemento, de valor 40. Começamos dividindo no índice 5, o sexto elemento. Nessa já jogamos todos os seis da esquerda para fora.

[02:04] Na próxima vez que formos executar esse algoritmo nossa lista já diminuiu. Dividimos em dois elementos para um lado, três elementos para o outro. Já cortou mais dois e deixou os três da direita.

[02:20] Na próxima vez teremos só três elementos para dividir em um de um lado e dois do outro. E nessa já podemos fechar esse algoritmo, porque o elemento buscado já foi encontrado, ele é o único elemento que sobrou do lado dele.

[02:38] Então vamos colocar isso de uma outra forma. Nós podemos dizer então que para uma lista de dois elementos precisamos de uma operação para encontrar o elemento certo em uma busca linear.

[02:49] Se dobrarmos essa lista para quatro elementos, precisamos de duas operações no máximo. Porque a primeira operação vai quebrar o array de quatro elementos em dois, ficando dois para cada lado. E tendo dois para cada lado, com uma operação eu resolvo, lembrando sempre que um dos lados é sempre descartado.

[03:09] Dobrando de novo para 8 elementos, agora eu tenho uma operação para dividir em dois arrays de quatro. Um dos arrays de quatro elementos já é descartado e eu fico com um deles. Eu divido ele novamente em dois elementos e uma operação resolve.

[03:27] Eu acho então que tem um padrão. Para dois elementos uma operação. Para quatro elementos duas operações. Para oito elementos três operações. Para 16 elementos quatro operações, se seguirmos essa lógica.

[03:45] Expressando isso de uma forma matemática podemos dizer que com uma operação conseguimos analisar uma lista de 2 elevado a um elemento. Ou seja, dois elementos.

[03:58] Com duas operações, dois elevado a dois elementos, ou seja, quatro elementos. Com três operações, dois elevado a três, então oito elementos. Com quatro operações, dois elevado a quatro, então 16 elementos. Com 10 operações são dois elevado a 10, que dá 1024 elementos.

[04:23] Então para uma lista de 1024 elementos, uma busca linear levaria 1024 operações para encontrar um elemento qualquer. E numa busca binária eu só preciso de 10 operações.

[04:38] E como chegamos a esse número de quantas operações são necessárias para n elementos, digamos assim? Esse número é um log na base 2. Colocando de outra forma, dizemos que o número que está colocado como potência resulta na quantidade de elementos que estamos buscando.

[04:59] Ou seja, 2 elevado a que número dá 1024 elementos? É 10. Então concluímos que o número de operações cresce de acordo com o log desses elementos. Ou seja, é um algoritmo que cresce e expressamos a complexidade desse algoritmo como O log de N.

[05:25] Vamos uma olhada no gráfico que já trabalhamos no curso anterior para ver isso colocado com números.

[Aula5_video1_imagem2]

[05:34] Então eu tenho na minha planilha já uma coluna com a quantidade de elementos, e eu coloquei n, que é linear. Então eu tenho um elemento e uma operação; 32 elementos e 32 operações.

[05:49] E no gráfico está mostrando a linha reta, por isso o nome, de crescimento desse algoritmo, que é a busca linear.

[05:59] Agora, para calcular o log de N, vamos passar o valor como sendo A2, que na minha planilha é a casa onde está o número de elementos. E a base é sempre dois, então =log(A2, 2).

[06:18] Eu vou usar o recurso de auto completar da planilha. E conseguimos ver no gráfico que o crescimento em complexidade do algoritmo linear é muito maior do que se trabalharmos com um algoritmo de crescimento logarítmico.

[06:38] Eu vou diminuir um pouco a quantidade de elementos e deixar só 32 para conseguirmos visualizar melhor o gráfico.

[06:47] Conseguimos ver a curva de crescimento de um algoritmo que é O log de n, que cresce em complexidade de uma forma muito mais suave do que um algoritmo linear, que vai percorrer uma lista completa de mil, 2 mil ou 5 mil elementos.

[07:07] Então duas coisas que já temos na cabeça: primeiro que é muito importante sabermos como calcular a complexidade de um algoritmo, porque isso impacta na performance do programa que vai utilizar esse algoritmo.

[07:24] E vimos também que a busca binária trabalha com um nível de complexidade bem menor do que a busca linear. Ou seja, é muito melhor você fazer 10 operações para uma lista de 1024 elementos do que você fazer 1024 operações para uma lista de 1024 elementos.

[07:43] E já descobrimos como relacionar o número de base 2 elevado a n e como isso consegue representar a quantidade de elementos que conseguimos trabalhar, de quantas operações para qual quantidade de elementos.

[08:00] Então agora para uma lista de 5 mil ou de 10 mil elementos, nós conseguimos descobrir quantas operações precisamos fazer através do log.

[08:11] Mas lembrando que para a busca binária funcionar o array precisa estar ordenado. Então agora precisamos analisar a complexidade de algoritmo das ordenações que trabalhamos anteriormente durante esse curso.


## Analise das Ordenações

Já fizemos então a análise do algoritmo de busca linear e busca binária, que foi a que desenvolvemos agora nesse curso.

[00:09] Vamos então fazer a análise dos algoritmos de ordenação, merge sort e quick sort, que desenvolvemos durante o curso. Começando pelo merge sort, vamos dar uma olhada no código dele.

[00:21] O código que desenvolvemos para o merge sort está em boa parte baseado numa função que chamamos de “ordena”. Essa função “ordena” percorre toda a lista em um loop while, então podemos considerar que os elementos serão percorridos de forma linear, um por um. Ela vai percorrendo, comparando e empurrando para o array de resultados.

[00:51] E cada vez que a função merge sort é chamada de forma recursiva, ela divide o array em duas partes cada vez menores. Então o que temos nesse algoritmo é um processamento que acontece de forma linear, ou seja, n, que cresce linearmente; e também um algoritmo que cresce de forma logarítmica, log de n na base 2. Então o que podemos concluir é que nós temos um algoritmo que é n vezes log de n.

[01:29] Vamos então comparar isso com um algoritmo de complexidade quadrática, que foi o que vimos no curso anterior, que executa loop dentro de loop, for dentro de for, while dentro de while e etc.

[01:47] Na planilha nós temos a coluna com a quantidade de elementos de uma lista, parando em 2048, e uma coluna com o resultado do cálculo de complexidade quadrática, ou seja, for dentro de for e loop dentro de loop, que foi o que concluímos que é a complexidade de algoritmos, por exemplo, como selection sort e insertion sort, usados no curso anterior.

[02:17] E podemos ver que, por exemplo, em 2048 elementos temos uma quantidade de operações de 4.194.304, porque fazemos a quantidade de elemento vezes a quantidade de elemento. Então 64 x 64, 128 x 128. Quando isso vai para 2048 é 2048 x 2048.

[02:42] E um array de 2000 elementos não é um array tão grande assim. Qualquer escola de tamanho pequeno tem uma quantidade maior até de alunos, só para termos um exemplo de onde uma lista poderia ser aplicada.

[02:56] Então a diferença de 4 milhões de operações num selection sort, por exemplo, utilizando um algoritmo de ordenação que cresce de complexidade logarítmica, nós decrescemos essa complexidade de 4 milhões para 22.528 operações, para uma lista de 2048 elementos.

[03:22] E nesse caso não é log de n, é n vezes log de n. Já estamos considerando o while, aquele loop que será executado pela função “ordena”.

[03:34] Algo parecido acontece na estrutura do quick sort. Vamos dar uma olhada no código que desenvolvemos para o quick sort. O quick sort tem uma função que, ao invés de “ordena”, chamamos de “particiona”. A função “particiona” vai dividindo, vai particionando o array e fazendo as trocas de lugar.

[03:56] E dentro da função “particiona”, de forma parecida com o que temos na função “ordena”, nós temos um while.

[04:04] Então também podemos dizer que esse while vai ficar percorrendo os elementos, então ele é linear, porque ele precisa comparar cada um dos elementos de um lado para encontrar os maiores ou os menores.

[04:16] E enquanto isso a função quick sort vai também funcionar de forma recursiva, chamando a função “particiona”, de forma bem parecida com o que fizemos no merge sort.

[04:27] Então podemos dizer que o quick sort também é um algoritmo n vezes log de n. Mas tem dois whiles dentro do while principal. Não teria que ser n quadrático vezes log de n?

[04:49] Na verdade os dois whiles de dentro nós não consideramos um loop completo, passando por todos os elementos do array, porque esses whiles que estão dentro do while principal percorrem apenas o trecho necessário. Eles não percorrem o array inteiro. Então ele vai pegar um pedaço, outro pedaço, e assim por diante.

[05:13] Então os loops que eles tão fazendo dentro do while principal não são relevantes em termos de quantidade de operações que estão sendo feitas nesse algoritmo.

[05:24] Ou seja, assim como o merge sort, o quick sort também é um algoritmo n vezes log de n. Nós utilizamos a notação o vezes log de n. E no gráfico tanto de um quanto do outro a curva de complexidade também é muito menor do que o quadrático.

[05:51] Eu vou tirar um pouco de elemento e deixar só 16 elementos na lista para vermos melhor no gráfico como isso ocorre.

[05:57] Dá para analisar que só com 16 elementos a diferença de crescimento entre os dois algoritmos é gritante. Passamos de 64 operações para 256 operações para 16 elementos.

[06:16] Então se merge sort e quick sort são iguais, como é que comparamos e escolhemos entre eles? Nesse caso, como eles crescem em complexidade basicamente da mesma forma, passamos para alguns outros detalhes, por exemplo, a quantidade de trocas internas que o algoritmo faz.

[06:36] Pode ser 2n. 2n e 3n, como vimos no curso anterior, não diferem em muita coisa. Mas num universo de comparação de algoritmo podemos usar como base de comparação.

[06:50] Então no final o teste será feito com base em dados do mundo real, lembrando que cada caso é um caso.

[06:56] Na média o que se vê é que o quick sort acaba sendo um pouco mais rápido e performático do que o merge sort. Na média ele acaba fazendo menos operações.

[07:08] Todos os exemplos de algoritmos que vimos nesse curso partem de um princípio que chamamos de dividir para conquistar, onde um problema grande é dividido em partes pequenas. E ao resolver essas partes pequenas resolvemos o problema por inteiro.

[07:27] Porque tentar atacar um problema grande de uma vez só, como faz, por exemplo, o selection sort e o insertion sort, é mais lerdo. Vai ter mais operações para serem feitas, isso reflete em mais processamento, e já vimos anteriormente como isso impacta na performance de um programa.

[07:46] É bom sempre questionarmos qual é o algoritmo que está sendo utilizado para resolver algum problema. Eles resolvem problema de computação, buscar, ordenar etc.

[07:57] Muitas linguagens de programação já têm os seus métodos de ordenação e de busca implementados. E uma coisa interessante é descobrirmos o que está por trás dos métodos.

[08:09] Por exemplo, o JavaScript tem seu próprio método array.sort. Qual é o algoritmo que faz com que o sort do JavaScript funcione? Essa é uma coisa bacana de pesquisarmos e entendermos.

[08:23] Porque por trás de toda implementação, mesmo dos métodos que as linguagens já trazem prontos para nós, existe um algoritmo.

[08:32] E agora que já sabemos melhor como funcionam os conceitos que estão por trás do desenvolvimento de um algoritmo, conseguimos ir atrás e entender melhor como eles funcionam, quais são os melhores para as nossas necessidades e para as necessidades dos nossos projetos.

## Para saber mais: Métodos do JavaScript
PRÓXIMA ATIVIDADE

No dia a dia do trabalho, é muito comum usarmos métodos nativos - ou seja, aqueles que já são próprios da linguagem e só precisam ser “chamados” como funções - para que nosso código fique mais legível ou então para simplificar o trabalho. Exemplos bem comuns são os métodos sort() e find(), respectivamente usados para ordenação e busca.

O método sort() molda elementos de um array em strings e os ordena em ordem crescente. Vamos ver um exemplo?

let numeros = [1, 2, 3, 101, 20, 3, 30, 31, 40];
numeros.sort();
console.log(numeros);

// Saída
// [1, 101, 2, 20, 3, 3, 30, 31, 40]COPIAR CÓDIGO
Observe que a saída mostra a classificação dos números um pouco diferente do esperado. Isso ocorre pois o método trata os elementos do array como strings e os coloca em ordem sequencial de acordo com sua posição na [tabela ASCII](https://www.asciitable.com/), onde 20 vem antes de 3.

Para que o sort() funcione de acordo com o esperado, precisamos passar os parâmetros de comparação de forma explícita:

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// Saída 
//[1, 2, 3, 4, 5]COPIAR CÓDIGO
Você pode conferir com detalhes o uso do sort() em JavaScript na documentação do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

Indo além do uso do método no dia a dia, já imaginou como esses métodos funcionam “por baixo dos panos”? Não é somente uma palavra para complementar seu código, pois assim como criamos funções, os métodos nativos da linguagem também possuem lógica e algoritmos por trás. Vamos conhecer um pouco mais?

No JavaScript, a forma como o método é implementado depende do motor que faz a interpretação. A partir de cada versão aprovada do JavaScript pelo ECMA, as empresas ou fundações responsáveis pelos navegadores/interpretadores (chamadas de vendors no jargão da área) decidem e fazem a implementação das funcionalidades.

No caso do motor V8, utilizado pelo Chrome/NodeJS, o sort() tem em sua implementação os algoritmos quick sort - ordenação rápida e insertion sort - ordenação por inserção, e funcionam da seguinte maneira:

 function QuickSort(a, from, to) {
    var third_index = 0;
    while (true) {
      // Insertion sort is faster for short arrays.
      if (to - from <= 10) {
        InsertionSort(a, from, to);
        return;
      }COPIAR CÓDIGO
Por outro lado, no motor SpiderMonkey, utilizado pelo Firefox, o algoritmo utilizado por trás do método sort() é o merge sort, implementado abaixo em C++:

JSBool
js::array_sort(JSContext *cx, uintN argc, Value *vp)
{
    jsuint len, newlen, i, undefs;
    size_t elemsize;
    JSString *str;

    Value *argv = JS_ARGV(cx, vp);
    Value fval;
    if (argc > 0 && !argv[0].isUndefined()) {
        if (argv[0].isPrimitive()) {
            JS_ReportErrorNumber(cx, js_GetErrorMessage, NULL, JSMSG_BAD_SORT_ARG);
            return false;
        }
        fval = argv[0];     /* non-default compare function */
    } else {
        fval.setNull();
    }

    JSObject *obj = ToObject(cx, &vp[1]);
    if (!obj)
        return false;
+
−    if (!js_GetLengthProperty(cx, obj, &len))
        return false;
    if (len == 0) {
        vp->setObject(*obj);
        return true;
    }

    /*
     * We need a temporary array of 2 * len Value to hold the array elements
     * and the scratch space for merge sort. Check that its size does not
     * overflow size_t, which would allow for indexing beyond the end of the
     * malloc'd vector.
     */
#if JS_BITS_PER_WORD == 32
    if (size_t(len) > size_t(-1) / (2 * sizeof(Value))) {
        js_ReportAllocationOverflow(cx);
        return false;
    }COPIAR CÓDIGO
Esse conhecimento é importante para escolhermos os métodos nativos que aplicamos em nosso código e também para entendermos certos comportamentos dos programas e aplicações ao serem interpretados pelos motores.

Você pode conferir aqui o código-fonte implementado pelo motor [SpiderMonkey](https://hg.mozilla.org/mozilla-central/file/28be8df0deb7/js/src/jsarray.cpp) e pelo motor [V8](https://github.com/v8/v8/blob/fe598532ec1317e8b85343133be9fb708e07bd2e/src/js/array.js#L768).

Bônus: ordenação estável
Algoritmos de ordenação podem ser estáveis ou instáveis. Caso queira começar neste assunto, este tópico do [Stack Overflow](https://pt.stackoverflow.com/questions/188646/o-que-define-um-algoritmo-de-ordena%C3%A7%C3%A3o-est%C3%A1vel) tem informações em português para começar; em seguida você pode conferir os [testes de estabilidade do método array.sort() em diferentes navegadores (em inglês)](https://stackoverflow.com/questions/3026281/what-is-the-stability-of-the-array-sort-method-in-different-browsers).

## Para saber mais: Melhor caso versus pior caso


Durante o desenvolvimento do código do quick sort, comentamos sobre o pior caso de execução de um algoritmo.

Em algoritmos, os termos melhor caso e pior caso se referem à quantidade de recursos a ser utilizado na execução, que pode ser tempo de execução ou memória.

Uma maneira adotada para mensurar a eficiência dos algoritmos, tendo em vista tempo de execução e espaço de memória, é por meio da notação Big O, que realiza a comparação desses dois parâmetros.

Lembrando que a notação [Big O](https://estevestoni.medium.com/iniciando-com-a-nota%C3%A7%C3%A3o-big-o-be996fa3b47b) se refere a uma classificação de algoritmos de acordo com o tempo de execução, à medida em que aumenta a quantidade de dados a serem manipulados e a quantidade de memória exigida.

Dessa forma, teremos o melhor caso de algoritmo quando ele apresenta a mesma quantidade de tempo para executar, independente do tamanho da entrada. E um pior caso quando se tem um maior tempo de execução considerando todas as possíveis entradas.

Exemplo de Big O em algoritmos de ordenação:

Algoritmo	estrutura	Complex. tempo: melhor caso	Complex. tempo: pior caso	Complex. espaço: pior caso
Quick Sort	Array	O(n log(n))	O(n²)	O(n log(n))
Merge Sort	Array	O(n log(n))	O(n log(n))	O(n)
Heap Sort	Array	O(n log(n))	O(n log(n))	O(1)
Smooth Sort	Array	O(n)	O(n log(n))	O(1)
Bubble Sort	Array	O(n)	O(n²)	O(1)
Insertion Sort	Array	O(n)	O(n²)	O(1)
Selection Sort	Array	O(n²)	O(n²)	O(1)
Onde:

O(1): notação de Big O que representa um algoritmo que é executado em tempo constante.

O(n): algoritmo que é executado em tempo linear, ou seja, as execuções aumentam de acordo com as entradas - como a busca linear.

O(n log(n)): representa um algoritmo que reduz pela metade uma lista a cada vez que é executado - como o merge sort e o quick sort.

O(n²): algoritmo com o tempo quadrático que por sua vez, significa que assim que o número de elementos na entrada aumenta, as execuções aumentam quadraticamente. Por isso, devemos evitar códigos com essa notação de Big O, pois o número de operações aumenta significativamente a cada entrada - como o selection sort e o insertion sort.


## Para saber mais: Logaritmo binário


Em computação sempre é utilizado o logaritmo com base 2 (e, consequentemente, o inverso é a potência de 2). Assim, log n representa de forma abreviada log2 n, ou seja, log de n na base 2.

Esta característica está ligada ao sistema numérico utilizado pelos computadores: o sistema binário (ou de base 2), onde todos os valores são representados pelos números 0 e 1.

Assim, sempre que trabalharmos com valores O(log n), estamos nos referindo a base 2.


## Projeto Final do Curso [AQUI](https://github.com/alura-cursos/2360-algoritmos-js-II/tree/aula-4)

## CONCLUSÃO

Aprendemos a fazer a análise assintótica do algoritmo de busca binária e por que este é considerado um algoritmo de complexidade logarítmica, em comparação com a busca linear que é um algoritmo de complexidade linear;
Fizemos a análise assintótica dos algoritmos de ordenação quick sort e merge sort e analisamos o código para entendermos por que são considerados algoritmos de complexidade linear-logarítmica;
E o que significa, em termos de performance, a diferença entre algoritmos de crescimento linear, quadrático e logarítmico.










