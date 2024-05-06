console.log("Maria");
var nome = "Maria";
 
console.log(nome);
nome = "Ronaldo";
 
// concatenação de strings
console.log("nome trocado " + nome);
 
// inicializar variável sem valor
let numero;
console.log(numero);  //undefined
 
let numero1 = null;
console.log(numero1); //null = nulo
 
// == consider o valor de cada variável
if(numero == numero1){
	console.log("é verdade");
} else {
	console.log("é falso");
}
 
// === considera o tipo de cada variável
if(numero === numero1){
	console.log("é verdade");
} else {
	console.log("é falso");
}
 
// != diferente
if(numero != numero1){
	console.log("é verdade");
} else {
	console.log("é falso");
}
 
// != diferente
if(numero !== numero1){
	console.log("é verdade");
} else {
	console.log("é falso");
}
 
// atribuir valores
numero = "0";
numero1 = 0;
 
if(numero == numero1){
	console.log("é verdade");
} else {
	console.log("é falso");
}
 
if(numero === numero1){
	console.log("é verdade");
} else {
	console.log("é falso");
}
 
if(numero > 0){
	// maior que zero?
} else if(numero < 0){
	// menor que zero?
} else if(numero >= 0){
	// maior ou igual a zero?
} else if(numero <= 0){
	// menor ou igual a zero?
} else if(numero != 0){
	// valor diferente de zero?
} else if(numero !== 0){
	// tipo e valor diferente de zero?
} else if(numero == 0){
	// valor igual a zero?
} else if(numero === 0){
	// tipo e valor igual a zero?
} else {
	// nenhuma das opções válidas!
}
 
var palavra = "retomada";
 
let frase = "retomada de conteúdo";
 
const PI = 3.14;
 
palavra = "cantada";
frase = "troquei a palavra";
PI = 4.23;