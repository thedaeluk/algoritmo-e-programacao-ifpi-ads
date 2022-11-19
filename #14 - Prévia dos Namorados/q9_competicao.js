/*
Iteração While - Fábio 04
Questão 9

Primeiro Passo:
- Ler o número da prova e a quantidade de nadadores;

Segundo Passo:
- Iniciar um iteração para repetir o trabalho enquanto o número da prova e a quantidade de nadadores for diferente de 0;

Terceiro Passo:
- Iniciar outra iteração na anterior (de acordo com a quantidade de nadadores), lendo os dados para cada nadador (nome, classificação, tempo,
clube (A ou B);

Quarto Passo:
- De acordo com o clube que pertencem, calcular a pontuação de cada nadador com base em sua classificação;

Quinto Passo:
- Calcular a soma das pontuações de cada clube;

Sexto passo:
- Mostrar o total de pontos de cada clube e exibir o clube vencedor;
*/

import { input, pressContinue } from '../input_utils.js'

function main(){
    let numero_da_prova = Number(input('Número da Prova: '))
    let quantidade_de_nadadores = Number(input('Quantidade de Nadadores: '))

    while (numero_da_prova !== 0 && quantidade_de_nadadores !== 0){
        let nome, classificacao, tempo, clube
        let pontos_a = 0
        let pontos_b = 0

        let i = 1
        while (i <= quantidade_de_nadadores){
            console.log(`\nDados do nadador ${i}:`)
            nome = input('Nome: ')
            classificacao = Number(input('Classificação: '))
            tempo = Number(input('Tempo: '))
            clube = input('Clube (A ou B): ').toUpperCase()

            if (clube === 'A'){
                pontos_a += calcular_pontuacao(classificacao)

            } else if (clube === 'B'){
                pontos_b += calcular_pontuacao(classificacao)
            }

            i++
        }  

        showPoints(pontos_a, pontos_b)
        determinar_clube_vencedor(pontos_a, pontos_b)

        pressContinue()

        numero_da_prova = Number(input('Número da Prova: '))
        quantidade_de_nadadores = Number(input('Quantidade de Nadadores: '))
    }
}

function determinar_clube_vencedor(pontos_a, pontos_b){
    if (pontos_a > pontos_b){
        console.log('\nO clube A é o vencedor!')

    } else {
        console.log('\nO clube B é o vencedor!')
    }
}

function showPoints(pontos_a, pontos_b){
    console.log(`\nO clube A obteve ${pontos_a} pontos.`)
    console.log(`O clube B obteve ${pontos_b} pontos.`)
}

function calcular_pontuacao(classificacao){
    let i = 1
    let pontos = 9
    let criterio = 3
    
    if (classificacao > 1){ 
        while (i < classificacao){
            pontos = pontos - criterio
            i++
            criterio--
        }

    } else {
        pontos = 9
    }

    console.log(`${pontos} pontos`)
    return pontos
}

main()