/**
 * De acordo com o exercício anterior (calcular média da nota), valide e retorne a situação do aluno:
 * - se a média for <= 1, retorne “Aluno reprovado”;
 * - se a média for >= 2 e <= 4, retorne “Aluno em recuperação”;
 * - se a média for >= 5 e <= 7, retorne “Aluno aprovado”;
 * - se a média for > 7, retorne “Aluno aprovado com ótimo aproveitamento”;
*/

let valor_1 = Number(prompt('Digite o primeiro numero :'));
let valor_2 = Number(prompt('Digite o segundo numero:'));
let valor_3 = Number(prompt('Digite o terceiro numero:'));
let media = (valor_1 + valor_2 + valor_3)/3;


if (media > 7 ){
   alert ("Aluno Aprovado com Ótimo Aproveitamento")
}else if (media >= 5 ){
   alert('Aluno aprovado')
}else if (media >= 2){
   alert('Aluno em recuperação')
}else{
   alert('Aluno reprovado')
} 

console.log(media);