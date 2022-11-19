import { input } from '../io_utils.js';

function main(){
    const limite_superior = Number(input('Limite Superior: '));
    let limite_inferior = Number(input('Limite Inferior: '));

    let valor_inicial = limite_inferior;
    
    while (valor_inicial <= limite_superior){
        if (eh_primo(valor_inicial)) {
            console.log(valor_inicial);
        }

        valor_inicial++;
    }
}

function eh_primo(valor){
    if (quantidade_de_divisores(valor) === 2){
        return true; 

    } else {
        return false;
    }
}

function quantidade_de_divisores(valor){
    let divisor = 1;
    let quantidade_de_divisores = 0;

    while (divisor <= valor){
        if (valor % divisor === 0) {
            quantidade_de_divisores++;
        }

        divisor++;
    }

    return quantidade_de_divisores;
}

main();