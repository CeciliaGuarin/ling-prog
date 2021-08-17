function exe1(){
  //recupera os dados do usuário
  //vamos converter o que o usuário digita, que é um texto, para um número
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
  //processamento
    let resultado = nro1 - nro2
  //mostrar resultado
    document.getElementById("resultado").innerHTML = resultado  
}

function exe2(){
    //entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    //processamento
    let resultado = nro1 * nro2 *nro3
    //resultado
    document.getElementById("resultado").innerHTML = resultado

}

function exe3(){
    //entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    //estrutura de seleção
    if(nro2 == 0){//compara com zero
        document.getElementById("resultado").innerHTML = "Impossível dividir por zero"
    }
    else{
        let resultado = nro1 / nro2
        document.getElementById("resultado").innerHTML = resultado
    }

}

function exe5(){
    //entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    //processamento
    let resultado = nro1 - (10 / 100 * nro1)
    //saída de dados
    document.getElementById("resultado").innerHTML = resultado

}

function exe8(){
    //entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    //processamento
    let resultado = nro1 * 1000
    document.getElementById("resultado").innerHTML = resultado
}

function exe10(){
    //entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    //processamento
    let resultado = nro1 * nro1
    //saída de dados
    document.getElementById("resultado").innerHTML = resultado

}