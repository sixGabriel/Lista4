const prompt = require('prompt-sync')({ sigint: true })


var n, i, soma, val
n = parseInt(prompt("digite um valor de repetições: "))
soma = 0
i = 0
while (i < n)
{
    val = parseInt(prompt("digite um valor: "))
    i = i + 1;
    soma = soma + val;
}
console.log (soma)

