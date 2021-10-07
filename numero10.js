const prompt = require('prompt-sync')({ sigint: true })


var valorUsuario, quinto, quarto, terceiro, segundo, primeiro

valorUsuario = parseInt(prompt("Informe um valor inteiro de 5 casas: "))
console.log(valorUsuario)

quinto = valorUsuario % 10;
valorUsuario /= 10;

quarto = valorUsuario % 10;
valorUsuario /= 10;

terceiro = valorUsuario % 10;
terceiro = terceiro + 0;// isso é besteira, somente para não exibir Warning
valorUsuario /= 10;

segundo = valorUsuario % 10;
valorUsuario /= 10;

primeiro = valorUsuario % 10;

    if (primeiro = quinto && segundo = quarto) {


        console.log("O número é um palíndromo!");
        
    } else {

        console.log("O número não é um palíndromo!");
    
    }
   
