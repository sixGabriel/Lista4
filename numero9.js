const prompt = require('prompt-sync')({ sigint: true });

var n, prod, soma

soma = 0
prod = 1

        n = parseInt(prompt("Escreva os números ou algum valor negativo pra sair: "))
   
    while(n > 0) {
       
        if(n % 2 == 0) {
            soma = soma + n
        } else {
            prod = prod * n
            
        }
         
         n = parseInt(prompt("Escreva os números ou algum valor negativo pra sair: "))
   
    }
      console.log("O produto dos numeros impares é: ", prod)
      console.log("A soma dos números pares é: ", soma)
    

