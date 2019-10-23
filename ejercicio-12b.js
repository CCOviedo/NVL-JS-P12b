var rnd;
var par = new Array();
var impar = new Array();
var cntA = 0, cntB = 0;

function numeroAleatorio(){
	rnd = Math.floor((Math.random() * 100)+1);
	return rnd;
}

function parImpar(numero){
	return (numero%2==0)
}

for(var i=0; i<=50; i++){
	numeroAleatorio();
	
	if(parImpar(rnd)){
		par[cntA] = rnd;
		cntA++;
	}else{
		impar[cntB] = rnd;
		cntB++;
	}
}

alert("Pares: " + par);
alert("Impares: " + impar);