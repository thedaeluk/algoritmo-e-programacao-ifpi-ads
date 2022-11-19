import { input } from '../../io_utils.js'

/* 11. Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opçào igual a 
1; o valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos 
valores possíveis para a variável opção são 1, 2 e 3. */

function main(){
    //Entrada
    const [num1, num2, num3] = input('Digite três números: ').split(' ').map(Number)
    const opcao = input('Digite o valor da opção (1, 2 ou 3): ')

    //Processamento
    const valor_opcao = definir_valor(opcao, num1, num2, num3)

    //Saída
    console.log(`O valor é ${valor_opcao}.`)
}

function definir_valor(opcao, num1, num2, num3){
    let valor 

    if(opcao == 1){
        valor = num1
        return valor

    } else if(opcao == 2){
        valor = num2
        return valor

    } else if(opcao == 3){
        valor = num3
        return valor

    } else{
        return 'inválido'
    }
}

main()