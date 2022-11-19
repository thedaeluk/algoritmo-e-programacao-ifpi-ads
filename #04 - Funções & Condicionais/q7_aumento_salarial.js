import {input, print} from "../io_utils.js";

function main (){
    const salario = Number(input("Digite o salário do colaborador: "));

    let percentual_aumento, aumento, novo_salario;

    print(`Salário atual: R$ ${salario.toFixed(2)}`);
    
    if (salario <= 280) {
        print("Percentual de aumento: 20%");
        percentual_aumento = 20 / 100;
        
    } else if (salario > 280 && salario <= 700) {
        print("Percentual de aumento: 15%");
        percentual_aumento = 15 / 100;

    } else if (salario > 700 && salario < 1500) {
        print("Percentual de aumento: 10%");
        percentual_aumento = 10 / 100;

    } else if (salario >= 1500) {
        print("Percentual de aumento: 5%");
        percentual_aumento = 5 / 100;
    }
    
    aumento = calcularAumentoSalarial(salario, percentual_aumento);
    novo_salario = calcularNovoSalario(salario, aumento);

    print(`Aumento salarial: R$ ${aumento.toFixed(2)}`);
    print(`Novo salário: R$ ${novo_salario.toFixed(2)}`);

}

function calcularAumentoSalarial(salario, percentual_aumento) {
    return salario * percentual_aumento;
}

function calcularNovoSalario(salario, aumento) {
    return salario + aumento;
}
main();
