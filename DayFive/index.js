/** declarando o array */
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = " "
let categoria = " "


/** valor inicial como sim, pq a primeira vez sempre vai entrar no while
 */
let adicionarMais = "sim" 

/**looping para saber se vai adicionar mais ou nao */
while(adicionarMais != "nao"){
    adicionarMais = prompt("Voce deseja adicionar uma comida na lista? Responda com 'sim' ou 'nao' ")

    /**while para quando for inserida uma responda diferente das esperadas */
    while (adicionarMais != "sim" && adicionarMais != "nao"){
        alert(`Operancao nao reconhecida!`)
        adicionarMais = prompt("Voce deseja adicionar uma comida na lista?")

    }
    /**if para quando for inserido o nao e sair do while */
    if(adicionarMais === "nao"){
        break
    }

    comida = prompt("Qual comida voce deseja inserir?")
    categoria = prompt("Em qual categoria essa comida se encaixa, 'frutas', 'laticinios','doces' ou 'congelados' ")

    if(categoria === 'frutas'){
        frutas.push(comida)
    }else if(categoria === 'laticinios'){
        laticinios.push(comida)
    }else if(categoria === 'doces'){
        doces.push(comida)
    }else if (categoria === 'congelados'){
        congelados.push(comida)
    } else{
        alert("Essa categoria nao foi pre-definida.")
    }
}

alert(`Lista de compras > \n Frutas: ${frutas}\n Laticinios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}`)

