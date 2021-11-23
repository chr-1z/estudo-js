// tipos primitivos 

// boolean 
var vOuF = false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string 
var nome = "Lyana";
console.log(typeof(nome));

// function 
var funcao = function() {}
console.log(typeof(funcao));

// como declarar uma variável
var variavel = "Dyana";
variavel = "Marta";
console.log(variavel);

let variavel2 = "Lucas";
variavel2 = "Pedro";
console.log(variavel2);

const constante = "777";
console.log(constante);

// exemplos variáveis
var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}
escopoLocal();

// atribuição
var atribuicao = "Diana";

// comparação 
var comparacao = '0' == 0;
console.log("Comparação: ", comparacao);

// comparação idêntica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adição
var adicao = 1 + 1;
console.log(adicao);

// subtração 
var subtracao = 2 - 1;
console.log(subtracao);

// multiplicação
var multiplicacao = 12 * 2;
console.log(multiplicacao);

// divisão
var divisao = 12 / 3;
console.log(divisao);

// divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// potenciação
var potenciacao = 2 ** 2;
console.log(potenciacao);

// maior que >
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor que <
var menorQue = 3 < 1;
console.log(menorQue);

// maior ou igual à >=
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor ou igual à <= 
var menorOuIgual = 3 <= 7;
console.log(menorOuIgual);

// Operadores Lógicos
var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);
