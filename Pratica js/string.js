//String e Template String
/**
 * let nome = "Christiane";
let sobrenome = "Gozza";

//let nomeCompleto = nome + " " + sobrenome;//colocamos espaços concratenado


console.log(nomeCompleto);
console.log("Nome: " + nomeCompleto); //Outra forma de fazer

 */



//Template String é uma string turbinada 

let nome = "Christiane";
let sobrenome = "Gozza";

//let nomeCompleto = nome + " " + sobrenome;//colocamos espaços concratenado
let nomeCompleto = `Aluna ${nome} ${sobrenome}`; //isso é uma template string
 

console.log(nomeCompleto);
//console.log("Nome: " + nomeCompleto); //Outra forma de fazer



//com number template string

/**
 * let idade = 36;
let idadeString = `${idade} anos`;  
console.log(idadeString);

 */

//Podemos fazer operação matematica 
/**
 * let idade = 36;
let idadeString = `${idade + 2} anos`;  
console.log(idadeString);

 */


//posso monstar dessa outra forma a string
/**
 * let idade = 36;
let idadeString = `Idade: ${idade} anos`;  
console.log(idadeString);
 */



//sem a template string
let idade = 36;
let idadeString = 'Idade: ' + idade + 'anos';  
console.log(idadeString);
