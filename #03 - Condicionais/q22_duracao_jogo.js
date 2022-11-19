import { input } from '../../io_utils.js'

/* 22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis 
inteiras: hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o 
tempo máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia 
seguinte. */

function main(){
    const [hora_inicial, minuto_inicial] = input('Digite a hora do início do jogo (horas:minutos): ').split(':').map(Number)
    const [hora_final, minuto_final] = input('Digite a hora do fim do jogo (horas:minutos): ').split(':').map(Number)   
    
    const duracaojogo_horas = calcularduracao_horas(hora_inicial, hora_final, minuto_inicial, minuto_final)
    const duracaojogo_minutos = calcularduracao_minutos(minuto_inicial, minuto_final)

    console.log(`A duração do jogo foi de ${duracaojogo_horas} horas e ${duracaojogo_minutos} minutos.`)
}

function calcularduracao_horas(hora_inicial, hora_final, minuto_inicial, minuto_final){
    let hora_total
    
    if(hora_inicial < hora_final){
        hora_total = hora_final - hora_inicial

        if(minuto_inicial > minuto_final){
            hora_total = hora_total - 1
            return hora_total
        }

        return hora_total

   } else if(hora_inicial > hora_final){
        hora_total = (hora_final - hora_inicial) + 24
        
        if(minuto_inicial > minuto_final){
            hora_total = hora_total - 1
            return hora_total
        } 

        return hora_total
  
   } else{
       hora_total = 24
       return hora_total
   }
    
}

function calcularduracao_minutos(minuto_inicial, minuto_final){
    let minuto_total
    
    if(minuto_inicial < minuto_final){
        minuto_total = minuto_final - minuto_inicial
        return minuto_total

    } else if(minuto_inicial > minuto_final){
        minuto_total = (minuto_final - minuto_inicial) + 60
        return minuto_total

    } else{
        minuto_total = 0
        return minuto_total
    }

}
   
main()