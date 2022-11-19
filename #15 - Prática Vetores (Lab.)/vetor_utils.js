import { pedir_numero } from './utils.js'

export function novo_vetor(tamanho){
    const vetor = new Array(tamanho)

    return vetor
}

export function mostrar_vetor(vetor){
    console.log()
    console.log(vetor)
}

function map_vetor(vetor, operacao, valor){
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = operacao(vetor[i], valor)
    }

    return vetor
}

export function multiplicar_vetores_por_valor(vetor){
    let valor = pedir_numero('Valor: ')
    let vetor_multiplicado = map_vetor(vetor, multiplicar_vetor, valor)

    mostrar_vetor(vetor_multiplicado)
}

function multiplicar_vetor(vetor, valor){
    return vetor * valor
}

export function elevar_vetores_por_valor(vetor){
    let valor = pedir_numero('Valor: ')
    let vetor_elevado = map_vetor(vetor, elevar_vetor, valor)

    mostrar_vetor(vetor_elevado)
}

function elevar_vetor(vetor, valor){
    return vetor ** valor
}

export function reduzir_a_fracao(vetor){
    let somatorio = 0
    for (let i = 0; i < vetor.length; i++){
        somatorio +=  vetor[i]
    }
    let fracao = `${somatorio} / ${vetor.length}`

    console.log(fracao)
}

export function substituir_valores_negativos_por_numero_aleatorio(vetor, max, min){
    let numero_aleatorio = Math.floor(Math.random() * (max - min)) + min
    console.log(`Número aleatório: ${numero_aleatorio}`)

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0){
            vetor[i] = numero_aleatorio
        }
    }

    mostrar_vetor(vetor)
}

export function ordenar_vetores(vetor){
    for (let i = 0; i < vetor.length; i++){ 
        for (var j = 0; j < (vetor.length - i - 1); j++){ 
            if (vetor[j] > vetor[j + 1]){
                let auxiliar = vetor[j] 
                vetor[j] = vetor[j + 1] 
                vetor[j + 1] = auxiliar
            }
        }        
    }

    mostrar_vetor(vetor)
}

export function embaralhar_valores(vetor){
    for (let i = 0; i < vetor.length; i++){
        let j = Math.floor(Math.random() * (i + 1));
        [vetor[i], vetor[j]] = [vetor[j], vetor[i]]
    }

    mostrar_vetor(vetor)
}

export function adicionar_novos_valores(vetor){
    let vetor2 = novo_vetor(vetor.length + 1)
    let valor = pedir_numero('Novo valor: ')
    let j = 0

    for (let i = 0; i < vetor2.length; i++){
        if (i === vetor2.length - 1){
            vetor2[i] = valor
    
        }else{
            vetor2[i] = vetor[j]
            j++
        }
    }

    return vetor2
}

export function remover_itens_por_valor_exato(vetor){
    let vetor2 = novo_vetor(vetor.length - 1)
    let valor = pedir_numero('Valor a ser removido: ')
    let j = 0

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] !== valor){
            vetor2[j] = vetor[i]
            j++
        }
    }

    return vetor2
}

export function remover_itens_por_posicao(vetor){
    let vetor2 = novo_vetor(vetor.length - 1)
    let posicao = pedir_numero('Posição: ')
    let j = 0

    for (let i = 0; i < vetor.length; i++){
        if (i !== posicao){
            vetor2[j] = vetor[i]
            j++
        }
    }

    return vetor2
}

export function editar_valor_especifico_por_posicao(vetor){
    let vetor2 = novo_vetor(vetor.length)
    let posicao = pedir_numero('Posição: ')
    let valor = pedir_numero('Novo valor: ')
    let j = 0

    for (let i = 0; i < vetor.length; i++){
        if (i === posicao){
            vetor2[i] = valor

        }else{
            vetor2[i] = vetor[i]
            j++
        }
    }

    return vetor2
}


