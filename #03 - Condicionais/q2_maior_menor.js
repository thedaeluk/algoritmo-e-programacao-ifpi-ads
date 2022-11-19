import { input } from '../../io_utils.js'

// 2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

function main(){
    
    //Entrada
    const number1 = Number(input('Digite um número 1: '))
    const number2 = Number(input('Digite um número 2: '))

    //Processamento
    const maior_que = maior_menor(number1, number2)

    //Saída
    console.log(maior_que)
    
}

function maior_menor(number1, number2){
    if(number1>number2){
        return `${number1} é o maior e ${number2} é o menor.`

    } else if(number2>number1){
        return `${number2} é o maior e ${number1} é o menor.`
        
    } else{
        return 'Os números são iguais.'
        
    }
}

main()
