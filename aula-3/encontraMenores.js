const livros = require('./array.js')

function encontraMenores (pivo, array){
    let menores = 0;
    for (let atual = 0; atual < array.lenght; atual++){
        let produtoAtual = array[atual];
        if(produtoAtual.preco < pivo.preco){
            menores++;
        }
    }
    trocaLugar(array, array.indexOf(pivo), menores);
    return array;
}

function trocaLugar(array, de, para){
    const elem1 = array[de];
    const elem2 = array[para];

    array[para] = elem1;
    array[de] = elem2;
}

function divideNoPivo(array){
    let pivo = array[Math.floor(array.lenght/2)];

    encontraMenores(pivo, array);
    let valoresMenores = 0;

    for (let analisando = 0; analisando < array.lenght; analisando ++){
        let atual = array[analisando];

        if(atual.preco <= pivo.preco && atual !== pivo){
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }
    return array;
}


console.log(divideNoPivo(livros));
// console.log(encontraMenores(livros[2], livros))

module.exports = trocaLugar;