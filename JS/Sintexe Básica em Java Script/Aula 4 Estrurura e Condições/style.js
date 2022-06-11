//Estrutura de decições do JS são semelhantes ao Python

var jogador1 = 0;
var jogador2 = 0;
var placar;

//Usando if
if (jogador1 > 0) {
    console.log("O jogador 1 Marcou Ponto")
}//Usando Else if
else if (jogador2 > 0) {
    console.log("O jogador 2 Marcou Ponto")
}
else {
    console.log("Ninguem Marcou Ponto")
}

//switch
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("O jogador 1 Ganhou");
        break;
        case placar = jogador2 > jogador1:
            console.log("O jogador 2 Ganhou");
            break;
        default:
        console.log("Ninguém ganhou")         
}

//For
var array = ['valor1', 'valor2', 'valor3', 'valor4'];
for(let i = 0; i < array.length; i++) {
    console.log(i)
}

//For in
for(let i in array) {
    console.log(i)
}

//while

var z = 1;

while(z < 11){
    z++;
    console.log(z);
}

do {
    r++;
    console.log(r);
}while (r < 10);