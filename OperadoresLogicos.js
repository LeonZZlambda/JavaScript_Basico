// Operadores matemáticos ou aritméticos
var numero1 = 5;
var numero2 = 2;
var soma = numero1 + numero2;
var subtracao = numero1 - numero2;
var produto = numero1 * numero2;
var divisao = numero1 / numero2;
var resto = numero1 % numero2;
var potencia = numero1 ** numero2;
var data = new Date();
var tempo = data.getTime();
var hoje = data.toString();

console.log("Resultado da soma = " + soma);
console.log("Resultado da subtração = " +subtracao);
console.log("Resultado da produto = " +produto);
console.log("Resultado da divisão = " +divisao);
console.log("Resultado da resto = " +resto);
console.log("Resultado da potenciação = " + potencia);
console.log("Tempo em milissegundos " + tempo);
console.log("Data de hoje: " + hoje);

var cinema = true;
var dinheiro = true;
var paiDeixou = false;
var maeDeixou = true;
 
if(cinema){
  if(dinheiro){
    if(paiDeixou == true || maeDeixou == true){
      console.log("Partiu cinema");
    } else {
      console.log("Autorização Negada!");
    }
  }
}
 
var saude = true;
var vontade = true;
if (saude == true && vontade == true){
  console.log("Bora jogar bola!");
} else {
  console.log("Bora se cuidar!");
}