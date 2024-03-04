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



















