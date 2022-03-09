/*
PRIMEIRA FORMA
let aluno = new Array('Maria', 'João', 'Lucas', 'Vini')
console.log(aluno[3])
*/

/*
SEGUNDA FORMA COM A EXPLICAÇÃO DA PROPRIEDADE LENGTH
let aluno = ['Maria', ' João', 'Lucas', 'Vini']
console.log(aluno.length) 
//A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0.
*/

/*
TERCEIRA MANEIRA USANDO O FOR 
let aluno = ['Maria', 'João', 'Lucas', 'Vini']

for(let i = 0; i < aluno.length;i++){
    console.log(aluno[i])
}
*/

//MANEIRA MAIS FACIL
let aluno = ['Maria', 'João', 'Lucas','Vini']

for(let i in aluno){
    console.log(aluno[i])
}

