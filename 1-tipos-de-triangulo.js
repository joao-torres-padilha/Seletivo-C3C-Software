// Crie um código JS que receba os comprimentos dos lados de um triângulo através de 
// inputs e retorne sua classificação quanto ao tamanho de seus lados.(Neste exemplo 
// deve-se abstrair as condições matemáticas de existência de um triângulo)

const entrada = require('prompt-sync')({sigint: true});
// Pacote Sync que permite receber valores digitados pelo usuário no prompt

let ladoA = entrada("Digite o valor do lado A:");
let ladoB = entrada("Digite o valor do lado B:");
let ladoC = entrada("Digite o valor do lado C:");

if((ladoA+ladoB) > ladoC && (ladoB+ladoC) > ladoA && (ladoA+ladoC) > ladoB){ //condição de formação do triângulo

    if(ladoA == ladoB && ladoB == ladoC){
        console.log("É um triângulo EQUILÁTERO!");
    }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        console.log("É um triângulo ISÓSCELES!"); 
    }else{
        console.log("É um triângulo ESCALENO!");
    }

}else{
    console.log("Não forma um triângulo!");
}
