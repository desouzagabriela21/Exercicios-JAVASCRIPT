prompt = require("prompt-sync")();

let numero = Number(prompt("Informe o valor do lado do quadrado (de 1 a 20): "));

while (numero > 20 || numero < 1){
    console.log('Tamanho inválido!');
    numero = Number(prompt("Informe o valor do lado do quadrado (de 1 a 20): "));
}


let i;
let cima = '';

for (i = 1; i <= numero; i++) {
cima = cima + '*';
}
console.log(cima);

let espaco = '';
for (i = 1; i < (numero - 2); i++){
espaco = espaco + ' '; 
}

for (i = 1; i <= (numero - 2); i++) {
console.log('*'+espaco,'*');
}
console.log(cima);
