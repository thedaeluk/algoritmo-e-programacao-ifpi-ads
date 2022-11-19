import { input } from '../io_utils.js';

function main() {
    const numero = Number(input('Digite um número: '));
    let numero_anterior = numero - 1;
    let fatorial = numero;

    while (numero_anterior >= 1) {
        fatorial *= numero_anterior;
        numero_anterior--;
    }

    console.log(`Seu fatorial é: ${fatorial}`); 
}

main(); 