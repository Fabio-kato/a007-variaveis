let nome;

let idade;

console.log(typeof nome) 
console.log(typeof idade)
// as variáveis são do tipo undefined por que não atribuímos um valor à elas 

nome = prompt('qual seu nome?')
idade = prompt('qual sua idade?')
console.log(nome)
console.log(idade)
console.log(typeof nome) 
console.log(typeof idade) 
console.log('olá', nome, 'você tem', idade, 'anos')



let perguntaA = 'Você possui algum pet?'
let respostaA = prompt(perguntaA)
console.log(perguntaA, respostaA)

let perguntaB = 'Você mora sozinho?'
let respostaB = prompt(perguntaB)
console.log(perguntaB, respostaB)

let perguntaC = 'Existem crianças na sua casa?'
let respostaC = prompt(perguntaC)
console.log(perguntaC, respostaC)