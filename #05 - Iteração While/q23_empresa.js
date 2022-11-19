/*
Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
horas trabalhadas e o seu número de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
líquido do funcionário.
*/

import {input, print} from '../io_utils.js'

function main(){
    const numero_de_funcionarios = Number(input('Número de funcionários: '))
    
    let i = 1
    while (i <= numero_de_funcionarios){
        print(`\nDados do funcionário ${i}`)
        let [codigo, numero_de_horas_trabalhadas, numero_de_dependentes] = obter_dados_dos_functionarios(i)

        let salario_total = calcular_salario_total(numero_de_horas_trabalhadas, numero_de_dependentes)

        let desconto_INSS = calcular_desconto_INSS(salario_total)
        let desconto_IR = calcular_desconto_IR(salario_total)

        let salario_liquido = salario_total - (desconto_INSS + desconto_IR)

        print(`\nDesconto INSS: R$ ${desconto_INSS.toFixed(2)}`)
        print(`Desconto IR: R$ ${desconto_IR.toFixed(2)}`)
        print(`Salário líquido do funcionário ${i} (código #${codigo}): R$ ${salario_liquido.toFixed(2)}`)

        i++
    }
}

function obter_dados_dos_functionarios(i){
    let codigo = Number(input(`Código do funcionário ${i}: #`))
    let numero_de_horas_trabalhadas = Number(input('Número de horas trabalhadas: '))
    let numero_de_dependentes = Number(input('Número de dependentes: '))

    return [codigo, numero_de_horas_trabalhadas, numero_de_dependentes]
}

function calcular_salario_total(numero_de_horas_trabalhadas, numero_de_dependentes){
    let salario = (12 * numero_de_horas_trabalhadas) + (numero_de_dependentes * 40)

    return salario
}

function calcular_desconto_INSS(salario){
    return salario * (8.5 / 100)
}

function calcular_desconto_IR(salario){
    return salario * (5 / 100)
}

main()