import {input} from "../io_utils.js";

function main(){
    const nota1 = Number(input("Digite a primeira nota: "));
    const nota2 = Number(input("Digite a segunda nota: "));

    const media_das_notas = calcular_media(nota1, nota2);

    if (media_das_notas >= 9 && media_das_notas <= 10) {
        console.log(`\nPrimeira nota: ${nota1}` );
        console.log(`Segunda nota: ${nota2}` );
        console.log(`Média: ${media_das_notas}`);
        console.log("Conceito: A");
        console.log("APROVADO"); 

    } else if (media_das_notas >= 7.5 && media_das_notas < 9) {
        console.log(`\nPrimeira nota: ${nota1}` );
        console.log(`Segunda nota: ${nota2}` );
        console.log(`Média: ${media_das_notas}`);
        console.log("Conceito: B");
        console.log("APROVADO"); 

    } else if (media_das_notas >= 6 && media_das_notas < 7.5) {
        console.log(`\nPrimeira nota: ${nota1}` );
        console.log(`Segunda nota: ${nota2}` );
        console.log(`Média: ${media_das_notas}`);
        console.log("Conceito: C");
        console.log("APROVADO"); 

    } else if (media_das_notas >= 4 && media_das_notas < 6) {
        console.log(`\nPrimeira nota: ${nota1}` );
        console.log(`Segunda nota: ${nota2}` );
        console.log(`Média: ${media_das_notas}`);
        console.log("Conceito: D");
        console.log("REPROVADO"); 

    }else if (media_das_notas >= 0 && media_das_notas < 4) {
        console.log(`\nPrimeira nota: ${nota1}` );
        console.log(`Segunda nota: ${nota2}` );
        console.log(`Média: ${media_das_notas}`);
        console.log("Conceito: E");
        console.log("REPROVADO"); 
    }
}

function calcular_media(num1, num2) {
    return (num1 + num2) / 2; 
}

main();