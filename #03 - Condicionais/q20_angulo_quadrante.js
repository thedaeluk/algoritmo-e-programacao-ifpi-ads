import { input } from '../../io_utils.js'

/* 20. Leia a medida de um ângulo (entre 0 e 360º) e escreva o quadrante (primeiro, segundo, terceiro 
ou quarto) em que o ângulo se localiza. */

function main(){
    const medida_angulo = Number(input('Digite a medida do ângulo (entre 0° e 360°): '))

    const quadrante_angulo = determinar_quadrante(medida_angulo)

    console.log(quadrante_angulo)
}

function determinar_quadrante(angulo){
    if(angulo >= 0 && angulo <= 90){
        return 'Primeiro quadrante'
        
    } else if(angulo > 90 && angulo <= 180){
        return 'Segundo quadrante'

    } else if(angulo > 180 && angulo <= 270){
        return 'Terceiro quadrante'

    } else if(angulo > 270 && angulo <= 360){
        return 'Quarto quadrante'

    } else{
        return 'O ângulo é maior que 360°'

    }
}

main()
