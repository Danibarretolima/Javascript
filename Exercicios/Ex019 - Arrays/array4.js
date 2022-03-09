/*
PRIMEIRA FORMA
var  aluno = new Array('Maria', 'João', 'Luan', 'Joana', 'Marcos')
console.log(aluno[2])
*/

/*
SEGUNDA FORMA
var aluno = ['Maria', 'João', 'Luan', 'Joana', 'Marcos']
console.log(aluno.length)
*/

/*
TERCEIRA FORMA
var aluno = ['Maria', 'João', 'Luan', 'Joana', 'Marcos']
for(var i = 0; i < aluno.length; i++){
    console.log(aluno[i])
}
*/
//QUARTA FORMA
var aluno = ['Maria', 'João', 'Luan', 'Joana', 'Marcos']
for(var i in aluno){
    console.log(aluno[i])
}
