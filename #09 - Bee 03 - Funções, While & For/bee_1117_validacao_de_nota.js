import { input } from "../io_utils.js"

function main(){
    const nota1 = validar_nota();
    const nota2 = validar_nota();
    
    const media_notas = calcular_media(nota1, nota2);
    
    console.log(`media = ${media_notas.toFixed(2)}`);
    
}

function validar_nota() {
    let nota = Number(input("Digite o valor da nota: "));

    while (nota < 0 || nota > 10) {
        console.log("nota invalida");
        nota = Number(input("Digite uma nota válida ([0,10]): "));
    }
    
    return nota;
}

function calcular_media(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

main();