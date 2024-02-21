/** o usuário poderá escolher se quer seguir na area de front ou de back.
 * caso seja de front, se ele quer aprender react ou Vue.
 * caso back, poderá aprender C# ou java.
 * Depois ele poderá escolher entre seguir na area ou se tornar fullstack
 * >exibir na tela uma mensagem específica para cada escolha
 * Ao final, perguntar quais tecnologias a pessoa gostaria de se especializar;
 * enquanto ela responder ok para uma pergunta, continue apresentando um prompt com 
 * a pergunta e deve ser apresentado uma msg sobre a ling. inserida.
 */
/**
 * 1- o usuário poderá escolher se quer seguir na area de front ou de back.
 * caso seja de front, se ele quer aprender react ou Vue.
 * caso back, poderá aprender C# ou java.
 */

const area = prompt("Em qual área você deseja seguir? (Front-End ou Back-End")
let lang = ""
if(area === "Front-End"){
    lang = prompt(`"Que legal, ${area}. Você gostaria de aprender sobre React ou Vue:"`)
}else if (area === "Back-End") {
    lang = prompt("Que legal, no Back-End você poderá aprender tanto sobre C# quanto sobre Java.")
}else{

   alert("Você não inseriu uma área válida!")
}

/*Depois ele poderá escolher entre seguir na area ou se tornar fullstack
 >exibir na tela uma mensagem específica para cada escolha*/
const escolhaEspecialidade = prompt("Você deseja seguir se especializando na área escolhida ou se desenvolver para se tornar um Fullstack? (Responda com 1 ou 2)")
if (escolhaEspecialidade == 1){
    alert(`"Que legal você seguir na área do ${area}, tenho certeza que será sucesso!!"`)
}else if(escolhaEspecialidade == 2){
    alert("Você é uma pessoa que gosta de desafios, acertei?! Continue firme e alcançará seus objetivos!!")
}else{
    alert("Você não inseriu um valor válido!")
}

/* Ao final, perguntar quais tecnologias a pessoa gostaria de se especializar;
 * enquanto ela responder ok para uma pergunta, continue apresentando um prompt com 
 * a pergunta e deve ser apresentado uma msg sobre a ling. inserida.
 */
let tecnologias = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'Sim' em caso positivo.")

while (tecnologias === "Sim"){
    let novatecnologia = prompt("Qual?")
        alert(`"Incrível! Você tem muito o que fazer, aprender sobre ${novatecnologia} será ótimo. Desejo todo o sucesso do mundo!!"`)
        tecnologias = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'Sim' em caso positivo.")
    }
    alert("Muito obrigada por participar!")
  