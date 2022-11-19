import { input } from '../../io_utils.js'

/* 16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas 
for maior ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e 
calcule a média final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, 
caso contrário deve escreva “Reprovado”. */

function main(){
    const nota1 = Number(input('Digite a primeira nota: '))
    const nota2 = Number(input('Digite a segunda nota: '))

    const media_notas = media(nota1, nota2)

    if(media_notas >= 7.0){
        console.log('Aprovado!')

    } else if(media_notas < 7.0){
        console.log('Exame Final!')
        const nota_final = Number(input('Digite a nota do exame final: '))
        const media_final = media(nota_final, media_notas)

        if(media_final >= 5.0){
            console.log('Aprovado!')

        } else{
            console.log('Reprovado!')
        }
    }
}

function media(num1, num2){
    return (num1 + num2) / 2 

}

main()