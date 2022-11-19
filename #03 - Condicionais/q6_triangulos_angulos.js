import { input } from '../../io_utils.js'

/* 6. Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e 
escreva se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º). Se 
formam, verifique se formam um triângulo acutângulo (3 ângulos < 90º), retângulo (1 ângulo = 90º) 
ou obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau). */

function main(){

    // Entrada
    const [angulo1, angulo2, angulo3] = input('Digite os valores dos ângulos: ').split(' ').map(Number)

    // Processamento
    if(eh_triangulo(angulo1, angulo2, angulo3)){
        console.log('É um triângulo!')
        const tipo_triangulo = triangulo_tipo(angulo1, angulo2, angulo3)
        console.log(tipo_triangulo)

    } else{
        console.log('Não é um triângulo!')

    }

}

function eh_triangulo(angulo1, angulo2, angulo3){
    if(angulo1 == 0 || angulo2 == 0 || angulo3 == 0){
        return false

    } else if(angulo1 + angulo2 + angulo3 == 180){
        return true

    } else{
        return false
    }

}

function triangulo_tipo(angulo1, angulo2, angulo3){
    if(eh_acutângulo(angulo1, angulo2, angulo3)){
        return 'Triângulo Acutângulo'

    } else if(eh_retangulo(angulo1, angulo2, angulo3)){
        return 'Triângulo Retângulo'

    } else if(eh_obtusangulo(angulo1, angulo2, angulo3)){
        return 'Triângulo Obtusângulo'
    }

}

function eh_acutângulo(angulo1, angulo2, angulo3){
    if(angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
        return true

    } else{
        return false
    }
} 

function eh_retangulo(angulo1, angulo2, angulo3){
    if(angulo1 == 90 || angulo2 == 90 || angulo3 == 90){
        return true
        
    } else{
        return false
    }
} 

function eh_obtusangulo(angulo1, angulo2, angulo3){
    if(angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
        return true
        
    } else{
        return false
    }
} 

main()