prompt = require('prompt-sync')();

let n1 = Number(prompt("Digite o primeiro número inteiro: "));
let n2 = Number(prompt("Digite o segundo número inteiro: "));
let soma = 0;

for(i = n1; i <= n2; i++){
soma = soma + i;
}
console.log('A soma entre os numeros de '+n1,'até '+n2, 'é '+soma); 