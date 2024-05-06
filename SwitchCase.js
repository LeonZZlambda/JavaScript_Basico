// Switch Case - Selecione caso
var canalDaTelevisao = 13;
var nomeDoCanal = "";
 
switch(canalDaTelevisao){
  case 2: 
    nomeDoCanal = "Cultura";
    break;
  case 4:
    nomeDoCanal = "SBT";
    break;
  case 5:
    nomeDoCanal = "Globo";
    break;
  case 7:
    nomeDoCanal = "Record";
    break;
  case 9:
    nomeDoCanal = "Rede TV";
    break;
  case 11:
    nomeDoCanal = "Gazeta";
    break;
  case 13:
    nomeDoCanal = "Bandeirantes";
    break;
  default:
    nomeDoCanal = "Não escolhido";
    break;
}
 
console.log(nomeDoCanal);