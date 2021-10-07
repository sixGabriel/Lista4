const prompt = require('prompt-sync')({sigint: true});

var chico = 1.50
var ze = 1.10
var anos = 0

while(chico >= ze)
{
   chico += 0.02
   ze += 0.03
   anos++
   
}console.log(anos)