/**
 * Faça um programa que receba o nome e idade do usuário e retorne:
 * - o nome do usuário;
 * - se ele é menor ou maior de idade;
*/

let name = prompt("Insira seu nome: ");
let age = parseInt(prompt("Insira sua idade: "));

let resultado = "menor";
if (age >= 18) {
 resultado = "maior"
}

alert(`${name} é ${resultado} de idade.`);