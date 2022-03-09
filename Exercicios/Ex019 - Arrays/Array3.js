/*
PRIMEIRA FORMA
var aluno = new Array('Maria', 'Joana', 'Vitor', 'Virginia', 'Caio')
console.log(aluno[2])
*/

/*
SEGUNDA FORMA
var aluno = ['Maria', 'Joana', 'Vitor', 'Virginia', 'Caio']
console.log(aluno.length)
//A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0.
*/

/*
TERCEIRA FORMA
var aluno = ['Maria', 'Joana', 'Vitor', 'Virginia', 'Caio']
for(var i = 0; i < aluno.length;i++){
    console.log(aluno[i])
}
*/

//QUARTA FORMA
var aluno = ['Maria', 'Joana', 'Vitor', 'Virginia', 'Caio']
for(var i in aluno){
    console.log(aluno[i])
}

