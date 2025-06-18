prompt = require('prompt-sync')();

let nota1 = Number(prompt('Digite primeira nota: '));
let nota2 = Number(prompt('Digite segunda nota: '));
let nota3 = Number(prompt('Digite terceira nota: '));



let resultado;
resultado = (nota1 + nota2 + nota3) / 3


console.log('Média final: ', resultado);