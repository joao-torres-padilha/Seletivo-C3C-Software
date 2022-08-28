/*
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. 
Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 

Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na 
equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, 
mesmo que os resultados sejam iguais.

Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é 
negativo”.
*/

function calculaBhaskara (a, b, c){
    let valorA = a;
    let valorB = b;
    let valorC = c;

    let delta = b**2 - (4*a*c);
    if (delta < 0){
        console.log("Delta é negativo");

    }else if (delta > 0){
        var r1 = (-b + Math.sqrt(delta)) / (2*a);
        var r2 = (-b - Math.sqrt(delta)) / (2*a);
        console.log("As raízes da equação são:\nr1 = " + r1.toFixed(2) + "\nr2 = " + r2.toFixed(2));

    }else{
        var r1 = (-b) / (2*a);
        var r2 = (-b) / (2*a);
        console.log("As raízes da equação são:\nr1 = " + r1.toFixed(2) + "\nr2 = " + r2.toFixed(2));
    }

}

bhask = calculaBhaskara(7,3,4);
console.log(bhask);