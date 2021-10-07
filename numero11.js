const prompt = require('prompt-sync')({ sigint: true });

var numero = prompt("Digite um numero aleatório: ");

var confere = numero.indexOf('171');

if (confere != -1)
    console.log("É meliante!");
else
    console.log("Não é meliante!");