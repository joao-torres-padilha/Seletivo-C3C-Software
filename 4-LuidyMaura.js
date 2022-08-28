/*
Criar um método que irá receber um valor inteiro como argumento e retornar um array 
com uma contagem até o argumento como limite.

Quando o número for divisível por 5, deve-se substituir o número pela String “ Luidy” 
e caso o número seja divisível por 9, deve-se substituir o número por  “Moura”.
Se o número for divisível por ambos deve-se colocar “LuidyMoura”.
*/

const luidyMoura = (valorLimite) => {

    let lista = []
 
    for( let item = 1; item <= valorLimite; item++){
 
         if(item % 5 == 0){
            lista.push("Luidy");

         }else if(item % 9 == 0){
            lista.push("Moura");

         }else if (item % 5 == 0 && item % 9 == 0){
            lista.push("LuidyMoura");

         }else if (item % 5 != 0 || item % 9 != 0){
            lista.push(item);
         }
 
    }
    return (lista);
 }

teste = luidyMoura(45);
console.log(teste);