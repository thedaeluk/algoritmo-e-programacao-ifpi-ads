// Área do Círculo

function main(){

    //Entrada
    const raio = Number(lines[0])
    const n = 3.14159
    
    //Processamento
    const area = (raio * raio) * n
    
    //Saida
    console.log(`A=${area.toFixed(4)}`)
}

main()