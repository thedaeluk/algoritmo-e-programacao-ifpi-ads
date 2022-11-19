// 43. Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const coefa = Number(input('Escreva o coeficiente a: '))
    const coefb = Number(input('Escreva o coeficiente b: ')) 
    const coefc = Number(input('Escreva o coeficiente c: ')) 
    const coefd = Number(input('Escreva o coeficiente d: '))
    const coefe = Number(input('Escreva o coeficiente e: ')) 
    const coeff = Number(input('Escreva o coeficiente f: ')) 


    // Processamento 
    const x = (coefc * coefe) - (coefb * coeff) / (coefa * coefe) - (coefb * coefd)
    const y = (coefa * coeff) - (coefc * coefd) / (coefa * coefe) - (coefb * coefd)
   
    //Saída 
    print(`O valores de x e y são, respectivamene: ${x.toFixed(2)} e ${y.toFixed(2)}`)
    
}

main()