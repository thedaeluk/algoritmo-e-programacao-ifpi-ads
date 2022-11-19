import { input } from '../io_utils.js';

function main() {
    const n = Number(input('N: '));
    
    let i = 1;
    let soma = 0; 

    while (i <= n) {
        let numeros = Number(input(`Número ${i}: `));
        soma += numeros; 
        i++;
    }

    const media = soma / n;

    console.log(`Soma dos números: ${soma}`);
    console.log(`Média dos números: ${media}`);
}

main();