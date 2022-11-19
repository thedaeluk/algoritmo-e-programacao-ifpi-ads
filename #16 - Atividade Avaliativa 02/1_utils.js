import prompt from 'prompt-sync'
var input = prompt()

function main(){
    // a.
    let numero = pedir_numero('Número: ')
    console.log(numero)

    console.log()

    // b.
    let numero_positivo = pedir_numero_positivo('Número positivo: ')
    console.log(numero_positivo)

    console.log()

    // c.
    let numero_negativo = pedir_numero_negativo('Número negativo: ')
    console.log(numero_negativo)

    console.log()

    // d.
    let numero_nao_nulo = pedir_numero_nao_nulo('Número não nulo: ')
    console.log(numero_nao_nulo)

    console.log()

    // e.
    let valor_minimo1 = pedir_numero('Valor mínimo: ')
    let numero_minimo = pedir_numero_com_valor_minimo('Número com valor mínimo: ', valor_minimo1)
    console.log(numero_minimo)

    console.log()

    // f.
    let valor_maximo1 = pedir_numero('Valor máximo: ')
    let numero_maximo = pedir_numero_com_valor_maximo('Número com valor máximo: ', valor_maximo1)
    console.log(numero_maximo)

    console.log()

    // g.
    let valor_minimo2 = pedir_numero('Valor mínimo: ')
    let valor_maximo2 = pedir_numero('Valor máximo: ')
    let numero_entre_faixa = pedir_numero_entre_m_e_n('Número com valor máximo: ', valor_minimo2, valor_maximo2)
    console.log(numero_entre_faixa)

    console.log()

   // h.
   let texto1 = pedir_texto('Texto: ')
   console.log(texto1)

   console.log()
   
   // i.
   let n1 = pedir_numero('Tamanho mínimo: ')
   let texto2 = pedir_texto_com_tamanho_minimo('Texto: ', n1)
   console.log(texto2)

   console.log()

   // j.
   let n2 = pedir_numero('Tamanho máximo: ')
   let texto3 = pedir_texto_com_tamanho_maximo('Texto: ', n2)
   console.log(texto3)
    
   console.log()

   // k.
   let m1 = pedir_numero('Tamanho mínimo: ')
   let n3 = pedir_numero('Tamanho máximo: ')
   let texto4 = pedir_texto_entre_m_e_n('Texto: ', m1, n3)
   console.log(texto4)

   console.log()

   // l.
   let n4 = pedir_numero('Tamanho máximo: ')
   let texto5 = pedir_texto_com_palavras_maximas('Texto: ', n4)
   console.log(texto5)

   console.log()

   // m.
   let n5 = pedir_numero('Tamanho mínimo: ')
   let texto6 = pedir_texto_com_palavras_minimas('Texto: ', n5)
   console.log(texto6)

   console.log()

   // n.
   let opcoes = pedir_texto('Opções: ').split(' ')
   console.log(opcoes)
   let texto7 = pedir_texto_com_opcoes('Texto: ', opcoes)
   console.log(texto7)

}

function pedir_numero(msg){
    let valor = Number(input(msg))

    if (isNaN(valor)){
        console.log('Por favor, digite um valor numérico...')
        valor = pedir_numero(msg)
    }
    return valor
}

function pedir_numero_positivo(msg){
    let numero = pedir_numero(msg)

    while (numero < 0){
        console.log('Por favor, digite um número positivo...')
        numero = pedir_numero(msg)
    }
    return numero
}

function pedir_numero_negativo(msg){
    let numero = pedir_numero(msg)

    while (numero > 0){
        console.log('Por favor, digite um número negativo...')
        numero = pedir_numero(msg)
    }
    return numero
}

function pedir_numero_nao_nulo(msg){
    let numero = pedir_numero(msg)

    while (numero === 0){
        console.log('Por favor, digite um número não nulo...')
        numero = pedir_numero(msg)
    }
    return numero
}

function pedir_numero_com_valor_minimo(msg, min){
    let numero = pedir_numero(msg)

    while (!(numero >= min)){
        console.log(`Por favor, digite um número maior ou igual a ${min}`)
        numero = pedir_numero(msg)
    }
    return numero
}

function pedir_numero_com_valor_maximo(msg, max){
    let numero = pedir_numero(msg)

    while (!(numero <= max)){
        console.log(`Por favor, digite um número menor ou igual a ${max}`)
        numero = pedir_numero(msg)
    }
    return numero
}

function pedir_numero_entre_m_e_n(msg, m, n){
    let numero = pedir_numero(msg)

    while (!(numero >= m && numero <= n)){
        console.log(`O número deve estar entre ${m} e ${n}.`)
        numero = pedir_numero(msg)
    }
    return numero
}

function pedir_texto(msg){
    const valor = input(msg)

    if (valor.length === 0){
        console.log('Digite algo...')

        return pedir_texto(msg)
    }
    return valor
}

function pedir_texto_com_tamanho_minimo(msg, n){
    let valor = pedir_texto(msg)

    while (valor.length < n){
        console.log(`Digite algo com no mínimo ${n} caracteres...`)

        valor = pedir_texto(msg)
    }
    return valor
}

function pedir_texto_com_tamanho_maximo(msg, n){
    let valor = pedir_texto(msg)

    while (valor.length > n){
        console.log(`Digite algo com no máximo ${n} caracteres...`)

        valor = pedir_texto(msg)
    }
    return valor
}

function pedir_texto_entre_m_e_n(msg, m, n){
    let valor = pedir_texto(msg)

    while (!(valor.length >= m && valor.length <= n)){
        console.log(`O texto deve ter entre ${m} e ${n} caracteres.`)
        valor = pedir_texto(msg)
    }
    return valor
}

function pedir_texto_com_palavras_maximas(msg, n){
    let valor = pedir_texto(msg).split(' ')

    while (valor.length > n){
        console.log(`Digite algo com no máximo ${n} palavras...`)

        valor = pedir_texto(msg).split(' ')
    }
    return valor
}

function pedir_texto_com_palavras_minimas(msg, n){
    let valor = pedir_texto(msg).split(' ')

    while (valor.length < n){
        console.log(`Digite algo com no mínimo ${n} palavras...`)

        valor = pedir_texto(msg).split(' ')
    }
    return valor
}

function pedir_texto_com_opcoes(msg, opcoes){
    let valor = pedir_texto(msg).split(' ')

    for (let i = 0; i < opcoes.length; i++){
        if (valor[i] !== opcoes[i]){
            console.log('Opções incorretas...')
            valor = pedir_texto(msg).split(' ')
        }
    }
    console.log('Opções corretas!')
    return valor
}


main()