import {input} from "../io_utils.js";

function main(){
    //Entradas
    const [A, B, C] = input("Digite o valor dos coeficientes A, B, e C: ").split(" ").map(Number);
    const delta = (B * B) - 4 * A * C;
    //Processamento e Saídas
    if (A === 0){
        console.log("Impossivel calcular");

    } else if (delta > 0){
        const raizes = calcular_raizes(A, B, delta);
        console.log(`R1 = ${raizes[0].toFixed(5)}`);
        console.log(`R2 = ${raizes[1].toFixed(5)}`);
        
    } else {
        console.log("Impossivel calcular");
    }
}

function calcular_raizes(A, B, delta){
    const R1 = (-B + Math.sqrt(delta)) / (2 * A);
    const R2 = (-B - Math.sqrt(delta)) / (2 * A);
    return [R1, R2];
}

main();