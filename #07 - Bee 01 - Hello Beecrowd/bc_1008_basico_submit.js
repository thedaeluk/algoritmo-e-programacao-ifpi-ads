// Salário

function main(){

    //Entrada
    const numero_funcionario = Number(lines[0])
    const horas_trabalho = Number(lines[1])
    const valor_hora = Number(lines[2])
    
    //Processamento
    const SALARY = horas_trabalho * valor_hora

    //Saida 
    console.log(`NUMBER = ${numero_funcionario}`)
    console.log(`SALARY = U$ ${SALARY.toFixed(2)}`)
}

main()