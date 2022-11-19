/* Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
· 1, 2, 3 = voto para os respectivos candidatos;
· 9 = voto nulo;
· 0 = voto em branco;
Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
a) total de votos para cada candidato;
b) total de votos nulos;
c) total de votos em branco;
d) quem venceu a eleição. */

import {print} from '../io_utils.js'
import {get_number} from '../input_utils.js'

function main(){
    const numero_de_eleitores = get_number('Número de eleitores: ')

    let count_candidate1 = 0
    let count_candidate2 = 0
    let count_candidate3 = 0

    let count_null = 0
    let count_blank = 0

    show_options()

    let i = 1
    while (i <= numero_de_eleitores){
        print(`\nEleitor ${i}`)

        let codigo = get_number('Código: ')
        
        if (codigo === 1){
            count_candidate1++

        } else if (codigo === 2){
            count_candidate2++

        } else if (codigo === 3){
            count_candidate3++

        } else if (codigo === 9){
            count_null++

        } else {
            count_blank++
        }

        i++
    }

    print(`\nTotal de votos do candidato 1: ${count_candidate1} votos`)
    print(`Total de votos do candidato 2: ${count_candidate2} votos`)
    print(`Total de votos do candidato 3: ${count_candidate3} votos`)
    print(`Total de votos nulos: ${count_null}`)
    print(`Total de votos em branco: ${count_blank}`)

    determinar_candidato_vencedor(count_candidate1, count_candidate2, count_candidate3)
}

function show_options(){
    let options = '***** Urna Eletrônica *****'

    options += '\n\n1 - Candidato 1'
    options += '\n2 - Candidato 2'
    options += '\n3 - Candidato 3'
    options += '\n9 - Voto nulo'
    options += '\n0 - Voto em branco'

    print(`${options}`)
}

function determinar_candidato_vencedor(count_candidate1, count_candidate2, count_candidate3){
    if (count_candidate1 > count_candidate2 && count_candidate1 > count_candidate3){
        print('\nO candidato 1 venceu a eleição!')

    } else if ((count_candidate2 > count_candidate1 && count_candidate2 > count_candidate3)) {
        print('\nO candidato 2 venceu a eleição!')

    } else {
        print('\nO candidato 3 venceu a eleição!')
    }
}

main()