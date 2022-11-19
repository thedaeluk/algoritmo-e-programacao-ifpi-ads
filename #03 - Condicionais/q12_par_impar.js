import { input } from '../../io_utils.js'

//12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.

function main(){
    //Entrada
    const num_inteiro = Number(input('Digite um número inteiro: '))

    //Processamento
    if(eh_par(num_inteiro)){
        console.log('Esse número é par!')
    } else{
        console.log('Esse número é impar!')
    }
}

function eh_par(num){
    if(num % 2 == 0){
        return true
    } else{
        return false
    }
}

main()