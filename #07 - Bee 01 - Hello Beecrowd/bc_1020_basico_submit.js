// Idade em Dias

function main(){

    //Entrada
    const valor_idade = Number(lines[0])

    // Processamento
    const valor_anos = Math.trunc(valor_idade / 365)
    const resto_anos = valor_idade % 365

    const valor_meses = Math.trunc(resto_anos / 30) 

    const valor_dias = Math.trunc(resto_anos % 30)
    
    //Saída
    console.log(`${valor_anos} ano(s)`)
    console.log(`${valor_meses} mes(es)`)
    console.log(`${valor_dias} dia(s)`)
}

main()