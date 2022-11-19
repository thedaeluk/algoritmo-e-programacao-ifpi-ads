// Gasto de Combustível

function main(){

    //Entrada
    const tempo_viagem = Number(lines[0])
    const velocidade_media =  Number(lines[1])

    //Processamento
    const distancia_percorrida = tempo_viagem * velocidade_media 
    const quantidade_litros = distancia_percorrida / 12
    
    //Saida
    console.log(`${quantidade_litros.toFixed(3)}`)
     
}

main()