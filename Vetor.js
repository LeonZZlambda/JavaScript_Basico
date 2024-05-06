// laços de repetição
// PARA FAÇA
// crescente - incremento
for(contador=1; contador <= 10; contador++){
    console.log(contador);
  }
  console.log("----------------------------------");
  // decrescente - decremento
  for(contador=10; contador > 0; contador--){
    console.log(contador);
  }
   
  // vetor
  var vetor = [2, 5, 56, 7, 8, 9];
  console.log(vetor);
   
  var notas = [];
  notas[0] = 5.6;
  notas[1] = 6.7;
  notas[2] = 8.9;
   
  console.log("Uma nota específica: " + notas[1]);
  console.log("Todas as notas " + notas);
   
  var frutas = [];
  frutas.push("maçã", "laranja", "pêra", "uva");
  console.log(frutas);
  console.log("O tamanho do vetor é " + frutas.length);
   
  // percorrer o vetor
  for(contador = 0; contador < frutas.length; contador++){
    console.log("Índice " + contador + ":-> " + frutas[contador]);
  }