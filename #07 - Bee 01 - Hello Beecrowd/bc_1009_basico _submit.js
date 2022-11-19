// Salário com Bônus

function main(){

    //Entrada
    const nome_vendedor = Number(lines[0])
    const salario_fixo = Number(lines[1])
    const total_vendas = Number(lines[2])

    //Processamento
    const TOTAL = salario_fixo + (total_vendas * 0.15)

    //Saida 
    console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`)
}

main()