import { input } from '../../io_utils.js'

/* 25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve 
escrever uma mensagem de permissão de acesso ou não. */

function main(){
    const input_senha = Number(input('Por favor, digite sua senha: '))
    
    const validade_senha = validar_senha(input_senha)

    console.log(validade_senha)
}

function validar_senha(num){
    const senha = 1234
    if(num == senha){
        return 'Acesso concedido!'
        
    } else{
        return 'Acesso negado!'
    }
}

main()