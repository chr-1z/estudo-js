var jogador1 = 2;
var jogador2 = 3;
var placar;


// jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos!') : console.log('Jogadores Inválidos');
// mesmo if acima
if (jogador1 != 0 && jogador2 != 0){
    if (jogador1 > 0){
        console.log("Jogador 1 marcou ponto!");
        placar = jogador1 > jogador2;
    } else if (jogador2 > 0){
        console.log("Jogador 2 marcou ponto!");
        placar = jogador2 > jogador1;
    } else {
        console.log("Ninguém marcou ponto!");
    }
}

// switch case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou!');
        break;
    default:
        console.log('Ninguém ganhou!'); 
}

// laços de repetição

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3' }


// for - funciona até que a repetição da instrução seja falsa
for (let indice = 0; indice < array.length; indice++){
    console.log(indice);
}


// for/in - executa a repetição a partir de uma propriedade
// com array
for (let i in array) {
    console.log(i);
}

// com object 
for (i in object) {
    console.log(i);
}


// for/off - executa a repetição a partir de valor
// com array
for (i of array) {
    console.log(i);
}

// com object - não da de usar o for/off com objetos, conferir o console.log()
for (i of object.propriedade1) {
    console.log(i);
}


// while - executa uma instrução enquanto determinada condição for verdadeira
var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

// do/while

do {
    a++;
    console.log(a);
} while (a < 20)