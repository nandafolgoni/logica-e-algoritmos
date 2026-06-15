// Importação da biblioteca para entrada de dados
const prompt = require('prompt-sync')();

console.log('--- Vetores com loop ---');
console.log('Digite o nome de 5 filmes abaixo:');
console.log('');

// Criando o vetor para guardar os valores
const filmes = [];

// Estrutura de repetição para coletar o nome dos 5 filmes
for (let i = 0; i < 5; i++) {
    filmes[i] = prompt(`Digite o nome do ${i + 1}º filme: `);
}

// Exibindo os nomes dos filmes coletados
console.log('______________________________');
console.log('');

// Laço para exibir os nomes coletados
for (let i = 0; i < 5; i++) {
    console.log(`Nome do ${i + 1}º filme digitado: ${filmes[i]}`);
}