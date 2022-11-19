
// Conversão de Tempo

function main(){

    //Entrada
    const valor_tempo = Number(lines[0])

    // Processamento
    const valor_horas = Math.trunc(valor_tempo / 3600)
    const resto_horas = valor_tempo % 3600

    const valor_minutos = Math.trunc(resto_horas / 60)
    
    const valor_segundos = resto_horas % 60
    
    //Saída
    console.log(`${valor_horas}:${valor_minutos}:${valor_segundos}`)
    
}

main()