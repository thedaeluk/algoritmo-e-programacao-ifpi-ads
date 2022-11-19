import {input} from "../io_utils.js";

function main() {
   let senhas = Number(input("Digite a senha: "));

    while (senhas != 2002){
        console.log("Senha Inválida");
        senhas = Number(input("Digite a senha: "));
    }
    console.log("Acesso Permitido");
}

main();