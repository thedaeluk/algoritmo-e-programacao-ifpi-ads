import { input } from '../../io_utils.js'

/* 26. Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos. */

function main(){
    const [lado_a, lado_b, lado_c] = input('Digite os valores dos lados dos triângulos (A, B e C): ').split(' ').map(Number)

    if(eh_triangulo(lado_a, lado_b, lado_c)){
        const hipotenusa_triangulo = calcular_hipotenusa(lado_a, lado_b, lado_c)
        console.log(hipotenusa_triangulo)

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

function calcular_hipotenusa(lado1, lado2, lado3){
    let hipotenusa
    let catetos

    if(lado1 > lado2 && lado1 > lado3){
        hipotenusa = lado1
        catetos = [lado2, lado3]
        return `A (${hipotenusa}) é a hipotenusa  e B (${catetos[0]}) e C (${catetos[1]}) são os catetos.`

    } else if(lado2 > lado1 && lado2 > lado3){
        hipotenusa = lado2
        catetos = [lado1, lado3]
        return `B (${hipotenusa}) é a hipotenusa  e A (${catetos[0]}) e C (${catetos[1]}) são os catetos.`

    } else{
        hipotenusa = lado3
        catetos = [lado1, lado2]
        return `C (${hipotenusa}) é a hipotenusa  e A (${catetos[0]}) e B (${catetos[1]}) são os catetos.`
    } 
}

main()