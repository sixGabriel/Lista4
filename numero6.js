const prompt = require('prompt-sync')({ sigint: true });


var capital, juros, montante, tempo, deposito
    capital = parseFloat(prompt("Capital: "))
    tempo = parseInt(prompt("Quanto tempo em meses: "))
    deposito = parseFloat(prompt("Digite o depósito mensal: "))
    juros = 50/10000
    montante = (capital + deposito) * (Math.pow((1 + juros), tempo))
    for (i = 0; i <= tempo; i++) {
       var montante_tratado = montante.toFixed(1)
        console.log("Montante = ", montante_tratado)
        montante = montante + (montante * juros)
    }
