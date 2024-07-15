/* Haru tem 23 anos, pesa 84kg 
tem 1.8 de altura e seu IMC e de 25.929292929292
Haru Misaki nasceu em 2001 */

const nome = 'Haru';
const sobrenome = 'Misaki'; //string => ''
const idade = 23; //number => 23
const peso = 84;
const alturaEmM = 1.80;

let indiceDeMassaCorporal; // peso / (altura * altura)
let anoNascimento

indiceDeMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade;


// + unir valores 
// $ {} colocar as variaveis dentro das chaves para mostrar o valor 
// template strings 


console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg ');
console.log(`tem ${alturaEmM}, de altura e seu IMC e de ${indiceDeMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`); 