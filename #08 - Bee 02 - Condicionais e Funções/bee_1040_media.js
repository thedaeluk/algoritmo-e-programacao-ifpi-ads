import {input} from "../io_utils.js";

function main(){
    //Entrada
    const [nota1, nota2, nota3, nota4] = input("Digite as 4 notas do aluno: ").split(" ").map(Number);

    //Processamento
    const media_notas = calcular_media(nota1, nota2, nota3, nota4);
    console.log(`Media: ${media_notas.toFixed(1)}`);

    if(media_notas >= 7.0){
        console.log("Aluno aprovado.");

    } else if (media_notas >= 5.0 && media_notas <= 6.9){
        console.log("Aluno em exame.");

        const nota_exame = Number(input('Digite a nota do exame: '));
        console.log(`Nota do exame: ${nota_exame.toFixed(1)}`);

        const media_final = calcular_media_final(nota_exame, media_notas);

        if (media_final >= 5.0){
            console.log("Aluno aprovado.");
            console.log(`Media final: ${media_final.toFixed(1)}`);

        } else {
            console.log("Aluno reprovado.");
            console.log(`Media final: ${media_final.toFixed(1)}`);
        }   

    } else{
        console.log("Aluno reprovado.");
    }
}

function calcular_media(num1, num2, num3, num4){
    return ((num1 * 2) + (num2 * 3) + (num3 * 4) + (num4 * 1)) / 10;
}

function calcular_media_final(num1, num2){
    return (num1 + num2) / 2;
}

main();