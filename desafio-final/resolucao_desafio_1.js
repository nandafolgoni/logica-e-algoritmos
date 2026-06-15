// Não esquecer de instalar (Para poder simular):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Desenvolver a codificação do 1º desafio à partir deste pontocl

let nomes = [];
let idades = [];

// ETAPA 1 - Entrada dos dados
for (let i = 0; i < 3; i++) {
    console.log(`\n--- Pessoa ${i + 1} ---`);

    nomes[i] = prompt("Nome: ");
    idades[i] = Number(prompt("Idade: "));
}

// ETAPA 2 - Validação da resposta
let resposta;

do {
    resposta = prompt("\nDeseja visualizar os dados? (sim/não): ").toLowerCase();

    if (resposta !== "sim" && resposta !== "não" && resposta !== "nao") {
        console.log("Resposta inválida! Tente novamente!");
    }

} while (resposta !== "sim" && resposta !== "não" && resposta !== "nao");

// ETAPA 3 - Saída condicional
if (resposta === "sim") {

    for (let i = 0; i < 3; i++) {

        let classificacao;

        if (idades[i] < 18) {
            classificacao = "Menor de idade";
        }
        else if (idades[i] >= 18 && idades[i] <= 59) {
            classificacao = "Maior de idade";
        }
        else {
            classificacao = "Idoso";
        }

        console.log(`\n--- Pessoa ${i + 1} ---`);
        console.log(`Nome: ${nomes[i]}`);
        console.log(`Idade: ${idades[i]} anos`);
        console.log(`Classificação: ${classificacao}`);
    }

} else {
    console.log("\nPrograma finalizado com sucesso!");
}