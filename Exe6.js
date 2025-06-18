prompt = require('prompt-sync')();

const pi = 3.1416;
let raio  = Number(prompt('Informe o raio da lata: '));
let altura  = Number(prompt('Informe a altura da lata: '));
let metroQuadrado = 100;
let area = (2 * (pi * (raio ** 2))) + (2 * (pi * raio * altura));

let resultado = metroQuadrado * area; 

console.log('O preço do alumínio para fabricar essa lata será de R$',resultado.toFixed(2));
