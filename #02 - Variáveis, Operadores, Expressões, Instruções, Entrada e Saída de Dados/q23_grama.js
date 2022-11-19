// 23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

import {print, input} from './io_utils.js'

function main(){

    //Entrada
    const quilogramas = Number(input('Digite o valor em kg: '))

    // Processamento 
    const gramas = quilogramas * 1000
   
    //Saída 
    print(`O equivalente é : ${gramas} g`)
    
}

main()