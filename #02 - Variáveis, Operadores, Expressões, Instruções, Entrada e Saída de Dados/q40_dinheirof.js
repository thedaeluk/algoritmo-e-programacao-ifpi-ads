// 40. Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele fuma, o nº de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const anos_fumante = Number(input('Digite o número de anos como fumante: '))
    const cigarro_dia = Number(input('Digite o número de cigarros fumados por dia: '))
    const preco_carteira = Number(input('Digite o preço de uma carteira: '))

    // Processamento 
    const dias_fumante = anos_fumante * 365
    const numero_cigarro = cigarro_dia * dias_fumante
    const dinheiro_f = (numero_cigarro / 20) * preco_carteira
   
    //Saída 
    print(`A quantidade de dinheiro gasta por um fumante é: ${dinheiro_f}`)
    
}

main()