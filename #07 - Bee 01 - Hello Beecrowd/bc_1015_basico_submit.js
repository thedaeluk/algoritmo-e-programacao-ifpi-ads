// Distância Entre Dois Pontos

function main(){

    //Entrada
    const p1 = lines[0].split(' ')
    const x1 = Number(p1[0])
    const y1 = Number(p1[1])

    const p2 = lines[1].split(' ')
    const x2 = Number(p2[0])
    const y2 = Number(p2[1])

    //Processamento
    const distancia = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))

    //Saida
    console.log(`${distancia.toFixed(4)}`)
     
}

main()