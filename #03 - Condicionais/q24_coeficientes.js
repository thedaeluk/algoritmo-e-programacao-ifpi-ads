import { input } from '../../io_utils.js'

/* 24. Leia os coeficientes (A, B e C) de uma equações de 2º grau e escreva suas raízes. Vale lembrar 
que o coeficiente A deve ser diferente de 0 (zero). */

function main(){
    const coeficiente_a = Number(input('Digite o coeficiente A: '))
    const coeficiente_b = Number(input('Digite o coeficiente B: '))
    const coeficiente_c = Number(input('Digite o coeficiente C: '))

    const resultados_raizes = calcular_raizes(coeficiente_a, coeficiente_b, coeficiente_c)

    console.log(resultados_raizes)
}

function calcular_raizes(a, b, c){
    const delta = (b * b) - 4 * a * c

    if(a == 0){
        return 'O valor do coeficiente A deve ser diferente de 0.'

    } else if(delta > 0){
        const x1 = (-b - Math.sqrt(delta)) / (2 * a)
        const x2 = (-b + Math.sqrt(delta)) / (2 * a)
        return `As raizes são ${x1} e ${x2}.`

    } else if(delta == 0) {
        const x = -b / (2 * a)
        return `A raiz é ${x}.`

    } else{
        return 'Não existe raiz real.'
    }
        
}

main()