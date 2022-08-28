/*
Construa um código JS que receba uma valor através de um input para um sistema de notas 
de uma instituição que possui a seguinte política de classificação: 

* Todo aluno recebe uma nota de 0 a 100. 

* Alunos com nota abaixo de 40 são reprovados. 

* As notas possuem a seguinte regra de arredondamento: 

* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, 
  arredondar a nota para esse próximo múltiplo de 5. 

* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta 
  nota resulta na reprovação do aluno. 
*/

function sistemaNotas(nota){
    const notaCorrecao = arredondamento(nota);

    if (notaCorrecao < 40){
        console.log(`O aluno foi REPROVADO! Sua nota é: ${notaCorrecao}`);
    }else{
        console.log(`O aluno foi APROVADO! Sua nota é: ${notaCorrecao}`);
    }
}

function arredondamento (nota){

    if (nota < 38){
        return nota
    }else if (nota % 5 >= 3 ){
        return nota = nota + (5 - (nota % 5))
    }else{
        return nota = nota - (nota % 5)
    }
}

sistemaNotas(84);
sistemaNotas(29);
sistemaNotas(38);