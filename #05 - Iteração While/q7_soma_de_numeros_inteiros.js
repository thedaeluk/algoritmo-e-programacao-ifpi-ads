import { input } from '../io_utils.js';

function main() {
    const numero_inteiro = Number(input('Digite N: '));
    let i = 1;
    let soma = 0;

    while (i <= numero_inteiro) {
        soma += i;
        i++;
    }

    console.log(`A soma de todos os números inteiros entre 1 e N é: ${soma}`);
}

main(); 