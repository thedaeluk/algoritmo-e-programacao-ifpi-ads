import {readFileSync} from "fs";
var input = readFileSync("./entrada_1114.txt", "utf8");
var lines = input.split("\n");

function main() {
   let senha = Number(lines[0]);
   let i = 0;
   while (senha !== 2002) {
       console.log("Senha Invalida");
       i++;
       senha = Number(lines[i]);
   }
   console.log("Acesso Permitido");
}

main();