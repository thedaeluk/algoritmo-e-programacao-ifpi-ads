/*
Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
numero de identificação e o peso do boi mais magro e do boi mais gordo.
*/

import {input} from '../io_utils.js'

function main(){
    const numero_de_fichas = Number(input('Número de Fichas: '))

    let identificação, nome, peso
    let maior_peso = 0
    let menor_peso
    let maior_boi, menor_boi

    let i = 1
    while (i <= numero_de_fichas){
        let peso_anterior = peso
        let identificação_anterior = identificação

        console.log(`\nBoi ${i}`)
        identificação = Number(input(`Número de Identificação: `))
        nome = input('Nome: ')
        peso = Number(input('Peso (em kg): '))

        if (peso > maior_peso){
            maior_peso = peso
            maior_boi = identificação
            menor_peso = peso_anterior
            menor_boi = identificação_anterior

        } else {
            menor_peso = peso
            menor_boi = identificação
        }

        i++
    }

    console.log(`\nBoi mais gordo: ${maior_boi} com ${maior_peso} kg`)
    console.log(`Boi mais magro: ${menor_boi} com ${menor_peso} kg`)
}

main()