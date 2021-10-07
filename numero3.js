const prompt = require('prompt-sync')({sigint: true});

var i=0
	
	for(i=1; i<50; i++){
		if(i%2 == 0){            
			console.log(i + " é par")
		}
	}
	