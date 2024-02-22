# ALGORITMOS COM JAVASCRIPT II


# APRENDIZADOS

Podemos pensar em novas formas de “atacar” um problema de ordenação, começando a partir de partes menores já ordenadas e unindo estas partes em uma única lista ordenada;


Evoluímos o conceito e testamos o funcionamento do algoritmo com uma simulação sem código, similar ao “teste de mesa”, para entendermos quais operações deverão ser feitas pelo código durante o fluxo de execução do programa;


Após utilizarmos a simulação para entendermos o fluxo do algoritmo e o que ele deve fazer, desenvolvemos um código em JavaScript para implementá-lo através da função juntaListas(), que percorre cada uma das duas listas informadas por parâmetro, compara os valores de cada uma, posiciona estes valores em uma lista única de acordo com o resultado da comparação e, por fim, retorna a lista unida.

Expandimos o conceito de “dividir para conquistar”, reutilizando a lógica de ordenar duas listas, e desenvolvemos um algoritmo para ordenar uma única lista;

Utilizando o recurso das simulações e testes, entendemos o funcionamento de um algoritmo de ordenação muito utilizado no dia-a-dia, o Merge Sort;

Após entendermos o fluxo do algoritmo, fizemos a implementação do algoritmo Merge Sort com JavaScript, através da função mergeSort() que recebe um array e retorna este array ordenado;

Estudamos a ferramenta de recursão, como ela pode ser utilizada no algoritmo Merge Sort e as diferenças dessa ferramenta com relação aos laços de repetição.


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













