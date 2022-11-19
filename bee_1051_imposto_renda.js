import {readFileSync} from 'fs';
var input = readFileSync('./entrada_1051.txt', 'utf8');
var lines = input.split('\n');

function main() {
    const salary = Number(lines[0]);
    let imposto_renda;

    if (salary <= 2000) {
        console.log("Isento");
        
    } else if (salary <= 3000) {
        const diff = salary - 2000;
        imposto_renda = diff * 0.08;
        console.log(`R$ ${imposto_renda.toFixed(2)}`);

    } else if (salary <= 4500) {
        const diff = salary - 3000;
        imposto_renda = (diff * 0.18) + (1000 * 0.08);
        console.log(`R$ ${imposto_renda.toFixed(2)}`);
        
    } else {
        const diff = salary - 4500;
        imposto_renda = (diff * 0.28) + (1000 * 0.08) + (1500 * 0.18);
        console.log(`R$ ${imposto_renda.toFixed(2)}`);
    }
}

main();