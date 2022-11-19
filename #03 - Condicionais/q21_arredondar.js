import { input } from '../../io_utils.js'

/* 21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte 
fracionaria for maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente 
superior, caso contrario, é arredondado para o inteiro imediatamente inferior. */

function main(){
    //Entrada
    const num = Number(input('Digite um número: '))

    //Processamento
    const numero_arredondado = fazer_arredondamento(num)

    //Saída
    console.log(numero_arredondado)
    
}

function fazer_arredondamento(num){
    let num_arredondado = Math.trunc(num)
    const num_fracionado = num - num_arredondado

    if(num_fracionado >= 0.5){
        num_arredondado += 1
        return num_arredondado
        
    } else{
        num_arredondado -= 1
        return num_arredondado
    }
}

main()