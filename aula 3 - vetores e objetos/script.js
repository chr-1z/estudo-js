// o que são vetores ou arrays


// como declarar um array
let array = ['string', 1, true];
console.log(array);

// pode guardar vários tipos de dados
let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array2[3]);

// forEach
let array3 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
array3.forEach(function(item, index) {
    console.log(item, index)
});

// push - adiciona no final do array
let array4 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
array4.push('novo item');
console.log(array4);

// pop - remove do final do array
let array5 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
array5.pop();
console.log(array5);

// shift - remove do início do array
let array6 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
array6.pop();
console.log(array6);

// unshift - adiciona no início do array
let array7 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
array7.unshift();
console.log(array7);

// indexOf - retorna o índice de um valor
let array8 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array8.indexOf(true));

// splice - remove ou substitui um item pelo índice
let array9 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
array9.splice(0, 3);
console.log(array9);

// slice - retorna uma parte de um array existente
let array10 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
let novoArray = array10.slice(0, 3);
console.log(novoArray);


let object = { string: 'string', number: 1, boolean: true, array: }