// Nao podemos criar constantes com palavras reservadas.
// constantes precisam ter nomes significativos

// nao pode comecar o nome de uma constante com numero
// nao pode conter espacos ou tracos
// utilizamos camelCase
// Case-sensitive
// Nao podemos modificar o valor de uma constante
// NAO UTILIZER VAR, UTILIZE CONST


// + - * /
const primeiroNumero = 5;
const segundoNumero = '10';
const result = primeiroNumero * segundoNumero;
const resultDuplicado = result * 2;
let resultTriplicado = result * 3;
console.log(resultTriplicado);

console.log(typeof primeiroNumero); // tipo do dado = Number
console.log(typeof segundoNumero); // tipo do dado = String
