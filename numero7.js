const prompt = require('prompt-sync')({ sigint: true })
var quantFamilia = parseInt(prompt('Insira a quantidade de familias que serão inseridas: '));

var keep, salarioFam, numFil, mediaSal = 0, maiorSal = 0, mediaFil = 0, abaixo100 = 0, salarioMen = 100, i = 0

while (quantFamilia > i){


    numFil = parseInt(prompt('Insira a quantidade de filhos: '));
    salarioFam = parseInt(prompt('Insira o salário total em conjunto da sua família: '));

    mediaSal += salarioFam
    mediaFil += numFil;
    
    if(salarioFam <= salarioMen){

         abaixo100++
    }

    if(salarioFam > maiorSal){

        maiorSal = salarioFam;
    }

        keep = prompt('Você deseja inserir mais uma familia? [S/N] ').toUpperCase()
        
       
        
        if(keep == 'N'){

            break           
        }

        i++
    
}


console.log('A media do salário é: ', mediaSal);
console.log('A media de filhos é: ', mediaFil);
console.log('O maior salário é: ', maiorSal);
console.log('Numero de famílias com salário abaixo de 100 é: ', abaixo100);