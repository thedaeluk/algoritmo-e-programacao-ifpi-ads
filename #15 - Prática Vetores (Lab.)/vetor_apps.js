import { pedir_numero, pressContinue } from './utils.js'
import { 

    mostrar_vetor, 
    multiplicar_vetores_por_valor,
    elevar_vetores_por_valor,
    reduzir_a_fracao,
    substituir_valores_negativos_por_numero_aleatorio,
    ordenar_vetores,
    embaralhar_valores,
    adicionar_novos_valores,
    remover_itens_por_valor_exato,
    remover_itens_por_posicao,
    editar_valor_especifico_por_posicao

} from './vetor_utils.js'

import { 

    gerar_vetores_automaticamente, 
    informar_valores_do_vetor, 
    carregar_vetores_de_um_arquivo,
    resetar_vetor,
    ver_quantidade_de_itens_no_vetor,
    definir_maior_menor_e_posicoes,
    calcular_media_dos_valores,
    calcular_somatorio_dos_valores,
    mostrar_valores_positivos_e_quantidade,
    mostrar_valores_negativos_e_quantidade,

} from './vetor_funcionalidades.js'

function main(){
    let vetor

    mostrar_menu()
    console.log('------------------------------------------------------')

    let opcao = pedir_numero('Opção: ')

    while (opcao !== 0){
        let tamanho = pedir_numero('Tamanho do vetor: ')
        let max = pedir_numero('Máximo: ')
        let min = pedir_numero('Mínimo: ')

        if (opcao === 1){
            vetor = gerar_vetores_automaticamente(tamanho, max, min)

        }else if (opcao === 2){
            vetor = informar_valores_do_vetor(tamanho, max, min)

        }else{
            vetor = carregar_vetores_de_um_arquivo(tamanho)
        }

        console.clear()

        mostrar_vetor(vetor)

        mostrar_operacoes()
        console.log('------------------------------------------------------')

        let operacao = pedir_numero('Operação: ')

        while (operacao !== 0){
            if (operacao === 1){
               resetar_vetor(vetor)
    
            }else if (operacao === 2){
                ver_quantidade_de_itens_no_vetor(vetor)
    
            }else if (operacao === 3){
                definir_maior_menor_e_posicoes(vetor)
    
            }else if (operacao === 4){
                calcular_media_dos_valores(vetor)
    
            }else if (operacao === 5){
                calcular_somatorio_dos_valores(vetor)

            }else if (operacao === 6){
                mostrar_valores_positivos_e_quantidade(vetor)

            }else if (operacao === 7){
                mostrar_valores_negativos_e_quantidade(vetor)

            }else if (operacao === 8){
                multiplicar_vetores_por_valor(vetor)

            }else if (operacao === 9){
                elevar_vetores_por_valor(vetor)

            }else if (operacao === 10){
                reduzir_a_fracao(vetor)

            }else if (operacao === 11){
                substituir_valores_negativos_por_numero_aleatorio(vetor, max, min)

            }else if (operacao === 12){
                ordenar_vetores(vetor)

            }else if (operacao === 13){
                embaralhar_valores(vetor)

            }else if (operacao === 14){
                vetor = adicionar_novos_valores(vetor)
                mostrar_vetor(vetor)

            }else if (operacao === 15){
                vetor = remover_itens_por_valor_exato(vetor)
                mostrar_vetor(vetor)

            }else if (operacao === 16){
                vetor = remover_itens_por_posicao(vetor)
                mostrar_vetor(vetor)

            }else if (operacao === 17){
                vetor = editar_valor_especifico_por_posicao(vetor)
                mostrar_vetor(vetor)
            }

            pressContinue()
            mostrar_vetor(vetor)
            
            mostrar_operacoes()
            console.log('------------------------------------------------------')
            operacao = pedir_numero('Operação: ')
        }

        console.clear()
        
        mostrar_menu()
        console.log('------------------------------------------------------')

        opcao = pedir_numero('Opção: ')
    }
}

function mostrar_menu(){
    let menu = 'Inicializar Vetores:'
    menu += '\n\n1 - Vetor com dados automáticos'
    menu += '\n2 - Informar valores para o vetor'
    menu += '\n3 - Carregar valores de um arquivo'

    menu += '\n\n0 - Sair'

    console.log(`\n${menu}`)
}

function mostrar_operacoes(){
    let menu = 'Operações com Vetores:'
    menu += '\n\n1 - Resetar vetor'
    menu += '\n2 - Ver quantidade de itens no vetor'
    menu += '\n3 - Ver menor e maior valores e suas posições'
    menu += '\n4 - Média dos valores'
    menu += '\n5 - Somatório dos valores'
    menu += '\n6 - Mostrar valores positivos e suas quantidades'
    menu += '\n7 - Mostrar valores negativos e suas quantidades'
    menu += '\n8 - Multiplicar por um valor'
    menu += '\n9 - Elevar a um valor'
    menu += '\n10 - Reduzir a uma fração'
    menu += '\n11 - Substituir valores negativos por um número aleatório'
    menu += '\n12 - Ordenar vetores'
    menu += '\n13 - Embaralhar valores'
    menu += '\n14 - Adicionar novos valores'
    menu += '\n15 - Remover itens por valor exato'
    menu += '\n16 - Remover por posição'
    menu += '\n17 - Editar valor específico por posição'

    menu += '\n\n0 - Voltar ao menu anterior'

    console.log(`\n${menu}`)
}

main()

