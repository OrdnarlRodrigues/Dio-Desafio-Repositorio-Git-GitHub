//Tipos primitivos

//Boleanos
var vOuF = false;
console.log(typeoF(vOuF));

//numeber
var nq = 1;
console.log(typeoF(nq));

//strige
var nome = Alex;
console.log(typeoF(nome));

//function
var funcao = function(){}
console.log(typeoF(funcao));

//Como declarar
var variavel = "Diana";
variavel = "Martine";
console.log(typeoF(variavel));

//Constante
var Constante = "Leandro";
Constante = "Lucas"
console.log(typeoF(Constante));

var escopolocal = "global";
console.log(typeoF(escopolocal));

function escopolocal() {
    let escopolocalinterno = "local"
    console.log(typeoF(escopolocalinterno))
}
escopolocal()