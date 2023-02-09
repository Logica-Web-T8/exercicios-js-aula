/**
 * faça um código que calcule a porcentagem de um número e retorne o valor encontrado:
 * o código deve:
 * - receber o valor total;
 * - receber a porcentagem (de 1 a 100);
 * - retornar o valor calculado;
*/

let total = parseFloat(prompt("Insira o valor total: "));
let porcentagem = parseInt(prompt("Insira a porcentagem (de 1 a 100): "));

if(porcentagem >= 1 && porcentagem <= 100){
  let result = (total * porcentagem) / 100;
  alert("O valor calculado é " + result);
}else{
  alert("procentagem inválida")
}

