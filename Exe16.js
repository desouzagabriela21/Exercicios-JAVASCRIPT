prompt = require('prompt-sync')();

let n1 = Number(prompt("Informe um número para ver a tabuada: "));
let multiplicacao = 0;

for(i = 1; i <= 10; i++){
multiplicacao = n1 * i;
console.log(''+n1,'x '+i, '= '+multiplicacao); 
}
