import {print, input} from './io_utils.js'

// Área

function main(){

    //Entrada
    const valores = input('Digite os três valores: ').split(' ')
    const a = Number(valores[0])
    const b = Number(valores[1])
    const c = Number(valores[2])
    
    //Processamento
    const area_triangulo = (a * c) / 2
    const area_circulo = 3.14159 * (c * c)
    const area_trapezio = ((a + b) * c) / 2
    const area_quadrado = b * b
    const area_retangulo = a * b 

    //Saida
    print(`TRIANGULO: ${area_triangulo.toFixed(3)}`)
    print(`CIRCULO: ${area_circulo.toFixed(3)}`)
    print(`TRAPEZIO: ${area_trapezio.toFixed(3)}`)
    print(`QUADRADO: ${area_quadrado.toFixed(3)}`)
    print(`RETANGULO: ${area_retangulo.toFixed(3)}`)
      
}

main()