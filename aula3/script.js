function calculo(){
    let nome = document.getElementById('nome').value
    let altura = document.querySelector("#altura").value
    let peso = document.querySelector("#peso").value

    if(nome !== '' && altura !== '' && peso !== ''){

        // let imc = parseFloat(peso) / Math.pow(parseFloat(altura),2)
        let imc = (parseFloat(peso) / parseFloat(altura * altura) * 10000).toFixed(1)

        let resposta

        if(imc <= 18.5){
            resposta = "Você está abaixo do peso"
        }
        
        else if(imc >= 18.6 && imc < 24.9){
            resposta = "Você está com o peso ideal"
        }

        else if(imc >= 25 && imc < 29.9){
            resposta = "Você está levemente acima do peso"
        }

        else if(imc >= 30 && imc < 34.9){
            resposta = "Você está com obesidade grau I"
        }

        else if(imc >= 35 && imc < 39.9){
            resposta = "Você está com obesidade grau II (severa)"
        }

        else if(imc >= 40){
            resposta = "Você está com obesidade grau III (mórbida)"
        }

            
        document.querySelector("#resultado").innerHTML = `${nome}, seu IMC é: ${imc}. ${resposta}.`

    }

    else{document.querySelector("#resultado").innerHTML = "Preencha todos os campos!"}

}