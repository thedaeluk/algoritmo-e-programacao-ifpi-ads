import { input } from '../../io_utils.js'

/* 7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se 
os 3 (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro 
lado). Se formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados 
iguais) ou escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero). */


function main(){

    // Entrada
    const [lado1, lado2, lado3] = input('Digite os valores dos lados: ').split(' ').map(Number)
    
    // Processamento
    if(eh_triangulo(lado1, lado2, lado3)){
        console.log('É um triângulo!')
        const tipo_triangulo = triangulo_tipo(lado1, lado2, lado3)
        console.log(tipo_triangulo)

    } else{
        console.log('Não é um triângulo!')

    }

}

function eh_triangulo(lado1, lado2, lado3){
    if(lado1 == 0 || lado2 == 0 || lado3 == 0){
        return false

    } else if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
        return true

    } else {
        return false
    }
}

function triangulo_tipo(lado1, lado2, lado3){
    if(eh_equilatero(lado1, lado2, lado3)){
        return 'Triângulo Equilátero'

    } else if(eh_isosceles(lado1, lado2, lado3)){
        return 'Triângulo Isosceles'

    } else if(eh_escaleno(lado1, lado2, lado3)){
        return 'Triângulo Escaleno'
    }
}

function eh_equilatero(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return true

    } else{
        return false
    }
} 

function eh_isosceles(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 != lado3 || lado1 == lado3 && lado3 != lado2 || lado2 == lado3 && lado3 != lado1){
        return true
        
    } else{
        return false
    }
} 

function eh_escaleno(lado1, lado2, lado3){
    if(lado1 !== lado2 && lado1 !== lado3 && lado2 !=lado3){
        return true
        
    } else{
        return false
    }
} 

main()