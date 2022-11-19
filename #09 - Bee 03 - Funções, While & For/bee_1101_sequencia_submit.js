import {readFileSync} from "fs";
var input = readFileSync("./entrada_1101.txt", "utf8");
var lines = input.split("\n");

function main() {
   let [M, N] = lines[0].split(" ").map(Number);
   let i = 0;
   let menor, maior;
   let sequencia;
   let soma;

   while (M > 0 && N > 0) {
       sequencia = "";
       soma = 0;

       if (M > N) {
           maior = M;
           menor = N;
           
       } else {
           maior = N;
           menor = M;
       }

       while (menor <= maior) {
           soma += menor;
           sequencia += `${menor} `; 
           menor++;
       }

       console.log(`${sequencia}Sum=${soma}`);

       i++;

       [M, N] = lines[i].split(" ").map(Number);
   }
}

main();