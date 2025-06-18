prompt = require('prompt-sync')();

let anos = Number(prompt('Informe a quantidade de anos: '));


let resultado = anos * 3153600;

console.log('O coração humano bate em média: '+resultado,'vezes em '+anos,'anos');
