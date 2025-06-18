prompt = require('prompt-sync')();

let nome1 = prompt('Informe o nome da primeira pessoa: ');
let idade1 = Number(prompt('Informe a idade da primeira pessoa: '));
let peso1 = Number(prompt('Informe o peso da primeira pessoa: '));

let nome2 = prompt('Informe o nome da segunda pessoa: ');
let idade2 = Number(prompt('Informe a idade da segunda pessoa: '));
let peso2 = Number(prompt('Informe o peso da segunda pessoa: '));

let nome3 = prompt('Informe o nome da terceira pessoa: ');
let idade3 = Number(prompt('Informe a idade da terceira pessoa: '));
let peso3 = Number(prompt('Informe o peso da terceira pessoa: '));

let mediaIdade = (idade1 + idade2 + idade3) / 3;
let mediaPeso = (peso1 + peso2 + peso3) / 3;

console.log('A média das idades entre '+nome1,','+nome2,'e '+nome3, 'é: ', mediaIdade);
console.log('A média dos pesos é: ', mediaPeso);
