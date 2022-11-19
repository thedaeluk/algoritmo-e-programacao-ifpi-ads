import {print, input} from './io_utils.js'

// Área do Círculo

function main(){

    //Entrada
    const raio = Number(input('Digite o valor do raio: '))
    const n = 3.14159
    
    //Processamento
    const area = (raio * raio) * n
    
    //Saída
    print(`A=${area.toFixed(4)}`)
}

main()