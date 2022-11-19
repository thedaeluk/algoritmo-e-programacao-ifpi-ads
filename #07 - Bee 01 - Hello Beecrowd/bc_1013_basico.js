import {print, input} from './io_utils.js'

// O Maior 

function main(){

    //Entrada
    const valores = input('Digite os três valores: ').split(' ')
    const a = Number(valores[0])
    const b = Number(valores[1])
    const c = Number(valores[2])
    
    //Processamento
    const maior_ab = (a + b + Math.abs(a - b)) / 2
    const maior_xc = (maior_ab + c + Math.abs(maior_ab - c)) / 2

    //Saida
    print(`${maior_xc} eh o maior`)
      
}

main()