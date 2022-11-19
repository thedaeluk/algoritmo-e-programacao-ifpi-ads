import { input } from '../../io_utils.js'

/* 23. Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual 
delas é a mais recente. */

function main(){
    const data1 = input('Digite a primeira data (dia/mês/ano): ')
    const data2 = input('Digite a segunda data (dia/mês/ano): ')

    const [dia1, mes1, ano1] = data1.split('/').map(Number)
    const [dia2, mes2, ano2] = data2.split('/').map(Number)

    const data_mais_recente = verificar_data(dia1, mes1, ano1, dia2, mes2, ano2)

    console.log(`A data mais recente é ${data_mais_recente}`)

}

function verificar_data(dia1, mes1, ano1, dia2, mes2, ano2){
    let data_recente 

    if(ano1 > ano2){
        data_recente = `${dia1}/${mes1}/${ano1}`
        return data_recente

    } else if(ano1 == ano2){
        if(mes1 > mes2){
            data_recente = `${dia1}/${mes1}/${ano1}`
            return data_recente

        } else if(mes1 = mes2){
            if(dia1 > dia2){
                data_recente = `${dia1}/${mes1}/${ano1}`
                return data_recente

            } else{
                data_recente = `${dia2}/${mes2}/${ano2}`
                return data_recente
            }

        } else{
            data_recente = `${dia2}/${mes2}/${ano2}`
            return data_recente

        }
        
    } else{
        data_recente = `${dia2}/${mes2}/${ano2}`
        return data_recente

    }
}

main()