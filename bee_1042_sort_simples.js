import { readFileSync } from 'fs'
var input = readFileSync('./entrada_1042.txt', 'utf8')
var lines = input.split('\n')

function main(){
    // Entrada
    const [num1, num2, num3] = lines[0].split(" ").map(Number);
    // Processamento
    const resultado_ordem = ordenador_crescente(num1, num2, num3);
    // Saídas
    console.log(resultado_ordem[0]);
    console.log(resultado_ordem[1]);
    console.log(resultado_ordem[2]);

    console.log();

    console.log(num1);
    console.log(num2);
    console.log(num3);
}

function ordenador_crescente(num1, num2, num3){
    let primeiro, segundo, terceiro;

    if (num1 < num2 && num1 < num3){
        primeiro = num1;

        if (num2 < num3){
            segundo = num2;
            terceiro = num3;
            return [primeiro, segundo, terceiro];
        } else {
            segundo = num3;
            terceiro = num2;
            return [primeiro, segundo, terceiro];
        }
        
    } else if (num1 > num2 && num1 > num3){
        terceiro = num1;

        if (num2 < num3){
            primeiro = num2;
            segundo = num3;
            return [primeiro, segundo, terceiro];
        } else {
            primeiro = num3;
            segundo = num2;
            return [primeiro, segundo, terceiro];
        }

    } else {
        segundo = num1;

        if (num2 > num3){
            primeiro = num3;
            terceiro = num2;
            return [primeiro, segundo, terceiro];
        } else {
            primeiro = num2;
            terceiro = num3;
            return [primeiro, segundo, terceiro];
        }
    }
}

main();