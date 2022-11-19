import { input } from './io_utils.js'

function main(){
   const frase = input('Frase: ')
   const palavras = frase.split(' ')

   let count_palavras_par = 0
   let count_palavras_impar = 0

   let palavras_par = ''
   let palavras_impar = ''

   let count_caracteres = 0

   for (let index = 0; index < palavras.length; index++){
        let palavra = palavras[index]
        let tamanho_da_palavra = palavra.length

        if (eh_par(tamanho_da_palavra)){
            count_palavras_par++
            palavras_par += `${palavra} ` 

        }else{
            count_palavras_impar++
            palavras_impar += `${palavra} ` 
        }

        count_caracteres += tamanho_da_palavra
   }

   console.log(`Quantidade de palavras pares: ${count_palavras_par} - ${palavras_par}`)
   console.log(`Quantidade de palavras impares: ${count_palavras_impar} - ${palavras_impar}`)
   console.log(`Quantidade de caracteres: ${count_caracteres}`)
}

function eh_par(tamanho){
    return tamanho % 2 === 0
}

main()