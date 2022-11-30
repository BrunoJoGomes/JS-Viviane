function soma(){

    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = parseInt(n1) + parseInt(n2)
    document.querySelector("#resultado").innerHTML = `Resultado: ${resultado}`
    
}

let paragrafo = document.createElement("p")

paragrafo.innerText = "Segunda-feira tem jogo!"

document.body.appendChild(paragrafo)

function minhaFuncao(){
    document.getElementById('minhaDiv').classList.add('classe1','classe2','classe3')
}

function voltarNormal(){
    document.getElementById('minhaDiv').classList.remove('classe1','classe2','classe3')
}