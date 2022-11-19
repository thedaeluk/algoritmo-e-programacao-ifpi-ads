import { input } from '../../io_utils.js'

/* 17. Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela 
segunda for l escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o 
primeiro e o segundo valor são pares ou ímpares; se for igual a 3 multiplique a soma dos valores 
lidos pelo primeiro; se for igual a 4 divida a soma dos números lidos pelo segundo, se este for 
diferente de zero. Em qualquer outra situação escreva o quadrado dos números lidos. */

function main(){
    //Entrada
    const valor1 = Number(input('Digite o primeiro valor inteiro: '))
    const valor2 = Number(input('Digite o segundo valor inteiro: '))

    //Processamento
    const resto = resto_divisao(valor1, valor2)
    console.log(`O resto é ${resto}.`)

    if(resto == 1){
        const soma_resto = soma(valor1, valor2) + resto
        console.log(`A soma das variáveis mais o resto é ${soma_resto}.`)
    
    } else if(resto == 2){
        if(eh_par(valor1)){
            console.log(`O valor ${valor1} é par!`)
        } else{
            console.log(`O valor ${valor1} é impar!`)
        }

        if(eh_par(valor2)){
            console.log(`O valor ${valor2} é par!`)
        } else{
            console.log(`O valor ${valor2} é impar!`)
        }

    } else if(resto == 3){
        const multiplicacao_valores = soma(valor1, valor2) * valor1
        console.log(`A multiplicação da soma dos valores lidos pelo primeiro valor é ${multiplicacao_valores}.`)

    } else if(resto == 4){
        const divisao_valores = soma(valor1, valor2) / valor2
        console.log(`A divisão da soma dos números lidos pelo segundo valor é ${divisao_valores.toFixed(2)}.`)

    } else{ 
        const quadrado_valor1 = quadrado(valor1)
        const quadrado_valor2 = quadrado(valor2)

        console.log(`O quadrado dos números lidos é ${quadrado_valor1} e ${quadrado_valor2}.`)
    }
}

function resto_divisao(num1, num2){
    return num1 % num2
}

function soma(num1, num2){
    return num1 + num2
}

function eh_par(num){
    if(num % 2 == 0){
        return true
    } else{
        return false
    }
}

function quadrado(num){
    return num * num
}

main()