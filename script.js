
let age = 20;

const isHuman = true;

const birthdayMonth = 3; 

const $name = 'Ogor';

let lastName = 'Avelino';

if(age > 18 && isHuman == true ) {
    console.log("Parabéns, você é um ser humano maior de idade.")
} else {
    console.log("Você ou é menor de idade ou um robô... Não sei qual me assusta mais.")
}

if(birthdayMonth == 12 || birthdayMonth == 1) {
    console.log("Você faz aniversário no começo ou no fim do ano.")
} else{
    console.log("Você faz aniversário entre fevereiro e novembro.")
}

if($name[0] == 'R') {
    console.log("Seu nome começa com R!")
} else {
    console.log("Seu nome começa com alguma outra das 25 letras do Alfabeto.")
}

if(lastName.length > 6 || $name[0] == 'E') {
    console.log("Seu sobrenome tem mais de 6 letras ou seu nome começa com E.")
}
else{
    console.log("Nenhuma das hipóteses.")
}