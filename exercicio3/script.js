const nome = prompt('Qual seu nome')

const nascimento = prompt('Sua data de nascimento')

const endereço = prompt('Qual seu endereço?')

const cpf = prompt('CPF')

let escolaridade = prompt('Qual seu nível de escolaridade?')

const cnh = prompt('Possui CNH?')

let filhos = prompt('Possui filhos?')

let cargo = prompt('Qual seu cargo atual?')

let salario = prompt('Qual seu atual salário?')

let comissao = prompt('Recebe comição? Se sim, informe a porcentagem, casoo não, responda com zero')

const admissao = prompt('Informe a data de admissão')

const textoNascimento = String(nascimento)
const textoCpf = String(cpf)
const textoCnh = String(cnh)
let textoSalario = String(salario)
let textoComissao = String(comissao)
const textoAdimissão = String(admissao)

console.log('nome', typeof nome)
console.log('nascimento', typeof nascimento)
console.log('endereço', typeof endereço)
console.log('cpf', typeof cpf)
console.log('escolaridade', typeof escolaridade)
console.log('cnh', typeof cnh)
console.log('filhos', typeof filhos)
console.log('cargo', typeof cargo)
console.log('salario', typeof salario)
console.log('comissao', typeof comissao)
console.log('admissao', typeof admissao)

console.log('Nome:', nome, 'Data de nascimento:', nascimento,
'Endereço:', endereço, 'CPF:', cpf, 
'Escolaridade:', escolaridade, 'Carteira de habilitação', cnh,
'Filhos', filhos, 'Cargo atual:', cargo, 
'Salário atual:', salario, 'Recebe comissão:', comissao, 
'Ano de admissão:', admissao)





