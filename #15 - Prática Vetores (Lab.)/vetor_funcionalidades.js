import { readFileSync } from 'fs'
import { novo_vetor, mostrar_vetor } from './vetor_utils.js'
import { pedir_numero } from './utils.js'

export function gerar_vetores_automaticamente(tamanho, max, min){
    const vetor = novo_vetor(tamanho)

    for (let i = 0; i < vetor.length; i++){
        vetor[i] = Math.floor(Math.random() * (max - min)) + min
    }

    return vetor
}

export function informar_valores_do_vetor(tamanho, max, min){
    const vetor = novo_vetor(tamanho)

    for (let i = 0; i < vetor.length; i++){
        vetor[i] = pedir_numero(`Vetor ${i}: `)

        while (vetor[i] > max || vetor[i] < min ){
            vetor[i] = pedir_numero(`Digite o vetor ${i} dentro do intervalo definido: `)

            if (!(vetor[i] > max || vetor[i] < min)){
               break
            }
        }
    } 
    
    return vetor
}

export function carregar_arquivo(nome_arquivo){
    let arquivo = readFileSync(nome_arquivo, "utf8")
    let valores_carregados = arquivo.split("\n")

    return valores_carregados
}

export function carregar_vetores_de_um_arquivo(tamanho){
    const vetor = novo_vetor(tamanho)
    const vetor_carregado = carregar_arquivo('vetores.txt').map(Number)

    for (let i = 0; i < vetor.length; i++){
        vetor[i] = vetor_carregado[i]
    }

    return vetor
}

export function resetar_vetor(vetor){
    let valor_padrao = pedir_numero('Valor padrão: ')

    for (let i = 0; i < vetor.length; i++){
        vetor[i] = valor_padrao
    }

    mostrar_vetor(vetor)
}

export function ver_quantidade_de_itens_no_vetor(vetor){
    console.log(`\nQuantidade de itens no vetor: ${vetor.length}`)
}

export function definir_maior_menor_e_posicoes(vetor){
    let maior = vetor[0]
    let menor = vetor[0]
    let posicao_maior = 1
    let posicao_menor = 1

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > maior){
            maior = vetor[i]
            posicao_maior = i + 1
        }

        if (vetor[i] < menor){
            menor = vetor[i]
            posicao_menor = i + 1
        }
    } 
    
    console.log(`\nMaior valor: (posição ${posicao_maior}) ${maior}`)
    console.log(`Menor valor: (posição ${posicao_menor}) ${menor}`)
}

export function calcular_media_dos_valores(vetor){
    let soma = 0
    
    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    let media = soma / vetor.length

    console.log(`\nMédia dos valores: ${media}`)  
}

export function calcular_somatorio_dos_valores(vetor){
    let somatorio = 0

    for (let i = 0; i < vetor.length; i++){
        somatorio += vetor[i]
    }

    console.log(`\nSomatório dos valores: ${somatorio}`)
}

export function mostrar_valores_positivos_e_quantidade(vetor){
    let vetor_positivo = novo_vetor()
    let qtd_positivos = 0
    let index = 0

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > 0){
            vetor_positivo[index] = vetor[i]
            qtd_positivos++
            index++
        }
    }
    console.log(`\nQuantidade de números positívos: ${qtd_positivos}.`)
    mostrar_vetor(vetor_positivo)
}

export function mostrar_valores_negativos_e_quantidade(vetor){
    let vetor_negativo = novo_vetor()
    let qtd_negativos = 0
    let index = 0

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0){
            vetor_negativo[index] = vetor[i]
            qtd_negativos++
            index++
        }
    }
    console.log(`\nQuantidade de números negativos: ${qtd_negativos}.`)
    mostrar_vetor(vetor_negativo)
}
