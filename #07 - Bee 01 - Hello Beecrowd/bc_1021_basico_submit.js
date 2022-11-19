// Notas e Moedas

function main(){

    //Entrada
    const valor_decimal = Number(lines[0])

    // Processamento 
    const valor_inteiro = valor_decimal * 100

    const nota_100 = Math.trunc(valor_inteiro / (100 * 100))
    const rest_100 = valor_inteiro % (100 * 100)

    const nota_50 = Math.trunc(rest_100 / (50 * 100))
    const rest_50 = rest_100 % (50 * 100)

    const nota_20 = Math.trunc(rest_50 / (20 * 100))
    const rest_20 = rest_50 % (20 * 100)

    const nota_10 = Math.trunc(rest_20 / (10 * 100))
    const rest_10 = rest_20 % (10 * 100)

    const nota_5 = Math.trunc(rest_10 / (5 * 100))
    const rest_5 = rest_10 % (5 * 100)

    const nota_2 = Math.trunc(rest_5 / (2 * 100))
    const rest_2 = rest_5 % (2 * 100)

    const coin_1 = Math.trunc(rest_2 / (1 * 100))
    const rest_1 = rest_2 % (1 * 100)

    const coin_05 = Math.trunc(rest_1 / (0.5 * 100))
    const rest_05 = rest_1 % (0.5 * 100)
    
    const coin_025 = Math.trunc(rest_05 / (0.25 * 100))
    const rest_025 = rest_05 % (0.25 * 100)

    const coin_010 = Math.trunc(rest_025 / (0.10 * 100))
    const rest_010 = rest_025 % (0.10 * 100)

    const coin_005 = Math.trunc(rest_010 / (0.05 * 100))
    const rest_005 = rest_010 % (0.05 * 100)

    const coin_001 = Math.trunc(rest_005 / (0.01 * 100))
    
   
    //Saída 
    console.log(`NOTAS:`)
    console.log(`${nota_100} nota(s) de R$ 100.00`)
    console.log(`${nota_50} nota(s) de R$ 50.00`)
    console.log(`${nota_20} nota(s) de R$ 20.00`)
    console.log(`${nota_10} nota(s) de R$ 10.00`)
    console.log(`${nota_5} nota(s) de R$ 5.00`)
    console.log(`${nota_2} nota(s) de R$ 2.00`)

    console.log(`MOEDAS:`)
    console.log(`${coin_1} moeda(s) de R$ 1.00`)
    console.log(`${coin_05} moeda(s) de R$ 0.50`)
    console.log(`${coin_025} moeda(s) de R$ 0.25`)
    console.log(`${coin_010} moeda(s) de R$ 0.10`)
    console.log(`${coin_005} moeda(s) de R$ 0.05`)
    console.log(`${coin_001} moeda(s) de R$ 0.01`)
    
}

main()