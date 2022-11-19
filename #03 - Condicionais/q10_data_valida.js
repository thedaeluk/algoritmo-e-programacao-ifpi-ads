import { input } from '../../io_utils.js'

// 10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

function main(){
    // Entrada
    const [dia, mes, ano] = input('Digite uma data (dia/mês/ano): ').split('/').map(Number)

    // Processamento
    if(validade_data(dia, mes, ano)){
        console.log('A data é válida!')

    } else{
        console.log('A data não é válida!')
    }
}

function validade_data(dia, mes, ano){
    if(dia > 31 || dia < 1 || mes > 12 || mes < 1 || ano < 1){
        return false

    } else if(mes == 2 && dia > 29){
        return false
        
    } else if((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia == 31){
        return false
       
    } else{
        return true
    } 
}  

main()



