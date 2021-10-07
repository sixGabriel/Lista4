const prompt = require('prompt-sync')({sigint: true});

var a

var i = 0 
for(i = 0; i < 5; i++) {
    a = parseInt(prompt("digite um valor: "));
    if (a < 0) {
       var cont = cont + 1
        console.log(a + " é negativo!")
    }
}