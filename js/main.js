let botao = document.getElementById("botao_gato").textContent = "oi fran"

// 

// function play_som(itemId){
//     document.getElementById(itemId).play()
// }


let listaDeTeclas = document.querySelectorAll(".tecla")

botao.onclick = function(){
    play_som(itemId)
}

let botao = listaDeTeclas[0]
let itemId = listaDeTeclas[0].classList[1]

console.log(botao)
console.log(itemId)
