prompt = require('prompt-sync')();

consumoPotenciaHora = Number(prompt('Informe a taxa de potência elétrica do refrigerador: '));
tempoLigado = Number(prompt('Informe as horas ligadas do refrigerador: '));
valorQuilowattHora = Number(prompt('Informe o valor do quilowatt hora: '));

energiaTotalGasta = (consumoPotenciaHora * tempoLigado) / 1000; 
valorPago = energiaTotalGasta * valorQuilowattHora;

console.log('A energia total gasta pelo refrigerador é de '+energiaTotalGasta,'kW. Deverão ser pagos companhia de Energia Elétrica R$'+valorPago.toFixed(2));