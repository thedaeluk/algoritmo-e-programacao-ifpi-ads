// O Maior

function main(){

    //Entrada
    const valores = lines[0].split(' ')
    const a = Number(valores[0])
    const b = Number(valores[1])
    const c = Number(valores[2])
    
    //Processamento
    const maior_ab = (a + b + Math.abs(a - b)) / 2
    const maior_xc = (maior_ab + c + Math.abs(maior_ab - c)) / 2

    //Saida
    console.log(`${maior_xc} eh o maior`)
      
}

main()