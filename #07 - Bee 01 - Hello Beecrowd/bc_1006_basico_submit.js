// Média 2

function main(){

    //Entrada
    const a = Number(lines[0])
    const b = Number(lines[1])
    const c = Number(lines[2])

    //Processamento
    const MEDIA = ((a * 2) + (b * 3) + (c * 5)) / 10

    //Saída
    console.log(`MEDIA = ${MEDIA.toFixed(1)}`)
}

main()