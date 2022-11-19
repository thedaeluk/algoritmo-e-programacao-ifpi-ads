import { input } from '../../io_utils.js'

/* 28. Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois 
cantos de um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o 
valor da área não pode ser negativo. */

function main(){
    const p1 = input('Digite x1 e y1: ').split(' ')
    const x1 = Number(p1[0])
    const y1 = Number(p1[1])

    const p2 = input('Digite x2 e y2: ').split(' ')
    const x2 = Number(p2[0])
    const y2 = Number(p2[1])

    const area_retangulo = calcular_area(x1, y1, x2, y2)

    console.log(area_retangulo) 
}

function calcular_area(x1, y1, x2, y2){
    if(x1 < 0 || y1 < 0 || x2 < 0 || y2 < 0){
        x1 = Math.abs(x1)
        y1 = Math.abs(y1)
        x2 = Math.abs(x2)
        y2 = Math.abs(y2)

        const largura = x1 + x2
        const altura = y1 + y2

        const area = largura * altura

        return area

    } else{
        const largura = x1 + x2
        const altura = y1 + y2

        const area = largura * altura

        return area
    }
}

main()