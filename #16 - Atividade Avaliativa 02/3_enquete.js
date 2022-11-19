import prompt from 'prompt-sync'
export var input = prompt()

function main(){
    const qtd_candidatos = pedir_numero('Quantidade de candidatos: ')

    const vetor_candidatos = criar_vetor(qtd_candidatos)

    for (let i = 0; i < vetor_candidatos.length; i++){
        vetor_candidatos[i] = pedir_texto(`Nome do candidato ${i}: `)
    }

    mostrar_candidatos(vetor_candidatos)
    
    let vetor_votos = criar_vetor_com_valor_padrao(qtd_candidatos, 0)
    
    let count_null = 0
    let count_blank = 0
    let count_not = 0
    let count_eleitores = 0
    let count_votos = 0

    let codigo = Number(input('Código: '))

    while (codigo !== -1){
        for (let i = 0; i < vetor_votos.length; i++){
            if (codigo === i){
                vetor_votos[i]++
                count_votos++

            }else if (codigo === vetor_votos.length + 1){
                count_blank++

            }else if (codigo === vetor_votos.length + 2){
                count_null++

            }else if (codigo === vetor_votos.length + 3){
                count_not++
            }
        }

        console.log(vetor_votos)

        count_eleitores++
        count_votos++
        codigo = Number(input('Código: '))
    }

    let percentual_brancos = calculatar_porcentagem(count_blank, count_votos)
    let percentual_nulos = calculatar_porcentagem(count_null, count_votos)
    let percentual_nao_opinaram = calculatar_porcentagem(count_not, count_votos)

    console.log(`${count_eleitores} pessoas entrevistadas`)

    let percentual_votos
    for (let i = 0; i < vetor_votos.length; i++){
        percentual_votos = calculatar_porcentagem(vetor_votos[i], count_votos)
        console.log(`Candidato ${i} : ${vetor_votos[i]} votos (${percentual_votos.toFixed(2)}%)`)
    }

    console.log(`${count_blank} votos em branco (${percentual_brancos.toFixed(2)})%`)
    console.log(`${count_null} votos nulos (${percentual_nulos.toFixed(2)})`)
    console.log(`${count_not} não opinaram (${percentual_nao_opinaram.toFixed(2)})%`)
}

function mostrar_candidatos(vetor_candidatos){
    let menu = '***** Enquete Eleitoral *****'
    for (let i = 0; i < vetor_candidatos.length; i++){
        menu += `\n Candidato ${i}: ${vetor_candidatos[i]}`
        
    }
    menu += `\n ${vetor_candidatos.length} BRANCO`
    menu += `\n ${vetor_candidatos.length + 1} NULO`
    menu += `\n ${vetor_candidatos.length + 2} NÃO-OPINAR`

    console.log(`\n${menu}`)
}

function criar_vetor(tamanho){
    const vetor = new Array(tamanho)

    return vetor
}

function criar_vetor_com_valor_padrao(tamanho, valor_padrao){
    const vetor = criar_vetor(tamanho)
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = valor_padrao
    }
    return vetor
}

function pedir_texto(msg){
    const valor = input(msg)

    if (valor.length === 0){
        console.log('Digite algo...')

        return pedir_texto(msg)
    }
    return valor
}

function pedir_numero(msg){
    let valor = Number(input(msg))

    if (isNaN(valor)){
        console.log('Por favor, digite um valor numérico...')
        valor = pedir_numero(msg)
    }
    return valor
}

function calculatar_porcentagem(quantidade, total){
    return 100 * (quantidade / total) 
}

main()