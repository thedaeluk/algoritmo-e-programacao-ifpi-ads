import { input } from '../../io_utils.js'

/* 19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa 
corpórea (IMC = peso / altura°). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 
25), obeso (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30). */

function main(){
    const altura = Number(input('Digite a altura (m): '))
    const peso = Number(input('Digite o peso (kg): '))

    const imc = calcular_imc(peso, altura)

    console.log(`Seu IMC é ${imc.toFixed(1)}`)

    if(imc < 25){
        console.log('Peso normal')

    } else if(imc >= 25 && imc <= 30){
        console.log('Obeso')

    } else{
        console.log('Obsesidade mórbida')
    }
}

function calcular_imc(peso, altura){
    return peso / (altura * altura)
}

main()