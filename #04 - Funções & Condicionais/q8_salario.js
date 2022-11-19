import {input, print} from "../io_utils.js";

function main() {
    const valor_hora = Number(input("Digite o valor da hora: "));
    const horas_trabalhadas = Number(input("Digite as horas trabalhadas: "));

    const salario_bruto = valor_hora * horas_trabalhadas;
    print(`\nSalário Bruto (${valor_hora} * ${horas_trabalhadas})    :R$ ${salario_bruto.toFixed(2)}`);

    let desconto_IR;

    if (salario_bruto <= 900) {
        desconto_IR = 0
        print(`(-) IR    :Isento`);

    } else if (salario_bruto <= 1500) {
        desconto_IR = salario_bruto * (5 / 100);
        print(`(-) IR (5%)     :R$ ${desconto_IR.toFixed(2)}`);
        
    } else if (salario_bruto <= 2500) {
        desconto_IR = salario_bruto * (10 / 100);
        print(`(-) IR (10%)     :R$ ${desconto_IR.toFixed(2)}`);
       
    } else if (salario_bruto > 2500) {
        desconto_IR = salario_bruto * (20 / 100);
        print(`(-) IR (20%)     :R$ ${desconto_IR.toFixed(2)}`);
    }

    const desconto_INSS = calcularINSS(salario_bruto);
    const desconto_FGTS = calcularFGTS(salario_bruto);
    const total_de_descontos =  desconto_IR + desconto_INSS;
    const salario_liquido = salario_bruto - total_de_descontos;

    print(`(-) INSS (10%)      :R$ ${desconto_INSS.toFixed(2)}`);
    print(`FGTS (11%)      :R$ ${desconto_FGTS.toFixed(2)}`);
    print(`Total de descontos     :R$ ${total_de_descontos.toFixed(2)}`);
    print(`Salário Líquido     :R$ ${salario_liquido.toFixed(2)}`);
}

function calcularINSS(salario_bruto) {
    return salario_bruto * (10 / 100);
}

function calcularFGTS(salario_bruto) {
    return salario_bruto * (11 / 100);
}

main();