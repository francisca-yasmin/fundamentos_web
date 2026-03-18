
//variavies
nome = "franzinha"
console.log("ola", nome)

//var -> var nome = "fran" =-> antiga, não esta em uso
//let -> let nome = "fran"
//const -> const nome = "fran"

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//string
let nome = "fran"
console.log(typeof nome)

//numero
let idade = 20
console.log(typeof idade)

//variavel booleana
let estaChovendo = false
console.log(typeof estaChovendo)

//variavel nula
let var_nula = null
console.log(typeof var_nula)

let simbolo = Symbol()
console.log(typeof simbolo)

//----------------------------------------------------------------------------

//lista ou array
let minha_lista = ["morango", "banana", "maça", "uva"] 
console.log(minha_lista)
console.log(minha_lista[2]) //indice dentro da minha lista
minha_lista.splice(2,1)
console.log(minha_lista)

let meu_objeto = {
    nome: "Yasmin",
    idade: 20,
    altura: 1.63

}
console.log(meu_objeto)
console.log(meu_objeto.altura)

const keys = Object.keys(meu_objeto)
const values = Object.values(meu_objeto)
console.log(keys)
console.log(values)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const n1 = 100
const n2 = 2

const soma = n1 + n2
console.log("resultado:", soma)

const sub = n1 - n2
console.log("resultado:", sub)

const divisao = n1 / n2
console.log("resultado:", divisao)

const mult = n * n2
console.log("resultado:", mult)

const modulo = n1 % n2
console.log("reultado:", modulo)

let cont = 0
cont += 3

console.log("contador:", cont)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//== ;
console.log(n1 === n2)
console.log(n1 < n2)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//AND -> && ; OR -> || ; NOT
const age = 18
const maior_idade = age >= 18
const tem_cnh = false

console.log("pode dirigir: ", maior_idade && tem_cnh)
console.log("viajar sozinho: ", maior_idade || tem_cnh)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const minha_idade = 13

if(minha_idade > 18){
    console.log("maior de idade")
}else{
    console.log("menor de idade")
}

if(minha_idade < 18){
    console.log("maior de idade")
}else if (minha_idade > 60){
    console.log("idoso")
}else{
    console.log("nada")
}
//+++++++++++++++++++++++++++++++++++++

let i = 0

while(i < 10){
    console.log(i)
    i++
}

let nome1 = "fran"
console.log(name1.length)

for (let letra = 0; letra < name1.length; letra++){
    console.log(nome1[letra])
}

//-------------------------------------------
function somando(n1, n2){
    let soma = n1 + n2
    console.log(soma)
}

somando(5,5)
//+++++++++++++++++++++++++++++++++++++++++++



//--------------------------------------------
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        console.log("par:", num[i])
    } else {
        console.log("impar:", num[i])
    }
}