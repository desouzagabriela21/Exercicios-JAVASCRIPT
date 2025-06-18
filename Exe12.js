prompt = require('prompt-sync')();

let nomeUsuario = Number(prompt('Informe seu nome de usuário: '));
let senha = Number(prompt('Informe sua senha: '));

do {
console.log('Nome de usuário e senha iguais.\nTente novamente!');
nomeUsuario = prompt('Informe seu nome de usuário: ');
senha = Number(prompt('Informe sua senha: '));
} while (nomeUsuario === senha);

console.log('Login efetuado com sucesso!');
 

