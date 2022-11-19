import { input } from "../io_utils.js";

function main() {
    let [M, N] = input("Digite M e N: ").split(" ").map(Number);
    let menor, maior;
    let sequencia;
    let soma;

    while (M > 0 && N > 0) {
        sequencia = "";
        soma = 0;

        if (M > N) {
            maior = M;
            menor = N;
            
        } else {
            maior = N;
            menor = M;
        }

        while (menor <= maior) {
            soma += menor;
            sequencia += `${menor} `; 
            menor++;
        }

        console.log(`${sequencia}Sum=${soma}`);

        [M, N] = input("Digite M e N: ").split(" ").map(Number);
    }
}

main();