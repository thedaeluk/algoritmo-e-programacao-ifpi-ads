// Área

function main(){

    //Entrada
    const valores = lines[0].split(' ')
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
    console.log(`TRIANGULO: ${area_triangulo.toFixed(3)}`)
    console.log(`CIRCULO: ${area_circulo.toFixed(3)}`)
    console.log(`TRAPEZIO: ${area_trapezio.toFixed(3)}`)
    console.log(`QUADRADO: ${area_quadrado.toFixed(3)}`)
    console.log(`RETANGULO: ${area_retangulo.toFixed(3)}`)
    
}

main()