import { input } from '../../io_utils.js'

/* 13. Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os 
valores são diferentes. */

function main(){
    //Entrada
    const [num1, num2, num3, num4, num5] = input('Digite cinco números (valores diferentes): ').split(' ').map(Number)

    //Processamento
    const maior = determinar_maior(num1, num2, num3, num4, num5)
    const menor = determinar_menor(num1, num2, num3, num4, num5)

    //Saída
    console.log(`O maior número é ${maior}.`)
    console.log(`O menor número é ${menor}.`)
}

function determinar_maior(num1, num2, num3, num4, num5){
    let num_maior = num1

    if(num2 > num_maior){
        num_maior = num2  
    } 
    
    if(num3 > num_maior){
        num_maior = num3
    } 

    if(num4 > num_maior){
        num_maior = num4
    } 

    if(num5 > num_maior){
        num_maior = num5  
    }

    return num_maior
    
}
    
function determinar_menor(num1, num2, num3, num4, num5){
    let num_menor = num1

    if(num2 < num_menor){
        num_menor = num2
    } 

    if(num3 < num_menor){
        num_menor = num3
    } 

    if(num4 < num_menor){
        num_menor = num4
    } 

    if(num5 < num_menor){
        num_menor = num5
    }

    return num_menor
   
}
    
main()