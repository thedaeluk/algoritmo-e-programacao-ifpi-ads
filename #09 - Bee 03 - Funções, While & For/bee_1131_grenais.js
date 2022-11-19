import { input } from '../utils.js'

function main(){
    let grenal = 1
    let vitorias_inter = 0
    let vitorias_gremio = 0
    let empate = 0 
    let count = 0

    while (grenal !== 2){
        if (grenal === 1){
           let [gols_inter, gols_gremio] = input('Gols Grenal: ').split(' ').map(Number)

            if (gols_inter > gols_gremio){
                vitorias_inter++

            }else if (gols_gremio > gols_inter){
                vitorias_gremio++

            }else{
                empate++
            }
        
            count++

            console.log('Novo grenal (1-sim 2-nao)')
            grenal = Number(input(': '))

        }else{
            console.log('Novo grenal (1-sim 2-nao)')
            grenal = Number(input(': '))
        }
    }

    console.log(`${count} grenais`)
    console.log(`Inter:${vitorias_inter} `)
    console.log(`Gremio:${vitorias_gremio} `)
    console.log(`Empates:${empate}`)

    if (vitorias_inter > vitorias_gremio){
        console.log('Inter venceu mais')

    }else if (vitorias_gremio > vitorias_inter){
        console.log('Gremio venceu mais')

    }else{
        console.log('Nao houve vencedor')
    }
}

main()