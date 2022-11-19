import {readFileSync} from "fs";
import {input, pressContinue, get_number_on_range} from './input_utils.js'


function main() {
    const words = loadFile("words.txt");
    const words_qtt = words.length;
    console.log(`${words_qtt} palavras carregadas!`);

    showMenu();
    console.log();
    const [optionMin, optionMax] = [0, 6];
    let code_input = get_number_on_range("Escolha um código do menu acima: ", optionMin, optionMax);

    while (code_input !== 0) {
        if (code_input === 1) {
            show_and_count_words_with_more_than_20_letters(words);

        } else if (code_input === 2) {
            show_and_count_words_without_e(words);

        } else if (code_input === 3) {
            show_and_count_words_without_forbidden_letters(words);

        } else if (code_input === 4) {
            show_and_count_words_with_granted_letters(words);
            
        } else if (code_input === 5 ) {
            show_and_count_words_with_mandatory_letters(words);

        }else if (code_input === 6) {
            show_and_count_words_with_letters_in_alphabetical_order(words);
        }
            
        pressContinue();
        showMenu();
        console.log();
        code_input = get_number_on_range("Escolha um código do menu acima: ", optionMin, optionMax);
    } 

    console.log("Fim!");
}

function show_and_count_words_with_more_than_20_letters(words) {
    let count = 0;
    let total = words.length;

    for (let word of words) {
        if (word.length > 20) {
            console.log(word);
            ++count;
        }
    }
    
    const percentage = (count / total) * 100;
    console.log(`Existem ${count} palavras com mais de 20 letras (${percentage.toFixed(3)}%)`);
}

function show_and_count_words_without_e(words) {
    let count = 0;
    const total = words.length;

    for (let word of words){
        if (has_no_e(word)){
            console.log(word);
            count++;
        }
    }

    const percentage = (count / total) * 100;
    console.log(`Existem ${count} palavras sem a letra "e" (${percentage.toFixed(3)}%)`);
}

function show_and_count_words_without_forbidden_letters(words) {
    let count = 0;
    const total = words.length;
    const forbidden_letters = input("Digite as letras proibídas: ");
    
    for (let word of words) {
        if (avoids(word, forbidden_letters)) {
            console.log(word);
            ++count;
        }
    }

    const percentage = (count / total) * 100;
    console.log(`Existem ${count} palavras sem as letras ${forbidden_letters} (${percentage.toFixed(3)}%)`);
}

function show_and_count_words_with_granted_letters(words) {
    let count = 0;
    const total = words.length;
    const input_letters = input("Digite as letras permitidas: ");

    for (let word of words) {
        if (uses_only(word, input_letters)) {
            console.log(word);
            ++count
        }
    }

    const percentage = (count / total) * 100;
    console.log(`Existem ${count} palavras com as letras ${input_letters} (${percentage.toFixed(3)}%)`);
}

function show_and_count_words_with_mandatory_letters(words) {
    let count = 0;
    const total = words.length;
    const input_letters = input("Digite as letras obrigatórias: ");

    for (let word of words) {
        if (uses_all(word, input_letters)) {
            console.log(word);
            ++count
        }
    }

    const percentage = (count / total) * 100;
    console.log(`Existem ${count} palavras usando todas as letras de ${input_letters} (${percentage.toFixed(3)}%)`);
}

function show_and_count_words_with_letters_in_alphabetical_order(words) {
    let count = 0;
    const total = words.length;

    for (let word of words) {
        if (is_abecedarian(word)) { 
            console.log(word);
            ++count
        }
    }
    const percentage = (count / total) * 100;
    console.log(`Existem ${count} palavras com letras em ordem alfabética (${percentage.toFixed(3)}%)`);
}

function has_no_e(word) {
    for (let letter of word) {
        if (letter === "e") {
            return false;
        } 
    } 
    return true;
}

function avoids(word, forbidden_letters) {
    for (let letter of word) {
        if (contains(letter, forbidden_letters)) {
            return false;
        }
    }
    return true;
}

function uses_only(word, input_letters) {
    for (let letter of word) {
        if (!contains(letter, input_letters)) {
            return false;
        }
    }
    return true; 
}

function uses_all(word, mandatory_letters) {
    for (let letter of mandatory_letters) {
        if (!contains(letter, word)) {
            return false;
        }
    }
    return true;
} 

function is_abecedarian(word) {
    let n = word.length;
    for (let i = 0; i < n; i++) {
        if (word[i] > word[i + 1]) {
            return false;
        }
    }
    return true;
} 

function contains(letter, input_letters) {
    for (let character of input_letters) { 
        if (character === letter) {
            return true;
        }
    }
    return false;
}

function loadFile(filename){
    let words_file = readFileSync(filename, "utf8");
    let loaded_words = words_file.split("\n");

    return loaded_words;
}

function showMenu(){
    let menu = "***** Wordplay! *****";
    menu += "\n1 - Mostrar e contar palavras com mais de 20 letras.";
    menu += '\n2 - Mostrar e contar palavras sem a letra "e".';
    menu += "\n3 - Mostrar e contar palavras sem as letras proibídas";
    menu += "\n4 - Mostrar e contar palavras com as letras permitidas";
    menu += "\n5 - Mostrar e contar palavras com as letras obrigatórias";
    menu += "\n6 - Mostrar e contar palavras com letras em ordem alfabética";
    menu += "\n\n0 - Sair.";

    console.log(`\n${menu}`);
}

main();
