// laço enquanto
 
var continua = 1;
 
while(continua != 0){
	console.log("laço rodando...");
  // condição de parada
  continua = prompt("Continua? 1-Sim 0-Não");
}

// laço faça enquanto
 
var contagem = 1;
 
do{
	console.log(contagem + "-Laço de contagem ...");
  // incremento - condição de parada
  contagem = contagem + 1;
}while(contagem < 10);

// vetor
var nomes = ["Marta", "Cristiane", "Formiga"];
// laço for
for(cont=0; cont<nomes.length; cont++){
	console.log(cont + "-" + nomes[cont]);
}
// laço forEach
console.log("---------------------------");
nomes.forEach(function (value){
	console.log(value);
});
// laço map
nomes.map((nome)=>console.log(nome));