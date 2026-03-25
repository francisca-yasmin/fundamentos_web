// let botao = document.getElementById("botao_gato").textContent = "oi fran"


function play_som(itemId){
    document.getElementById(itemId).play()
}

let listaDeTeclas = document.querySelectorAll(".tecla")

for (let cont = 0; cont < listaDeTeclas.length; cont++){
    
    let botao =  listaDeTeclas[cont]
    let itemId = listaDeTeclas[cont].classList[1]

    botao.onclick = function(){
        play_som(itemId)
    }
}


console.log(botao)
console.log(itemId)
