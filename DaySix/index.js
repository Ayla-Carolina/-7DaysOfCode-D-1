/** declarando o array */
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = " "
let categoria = " "
let remover = " "

/** valor inicial como sim, pq a primeira vez sempre vai entrar no while
 */
let adicionarMais = "sim" 

/**looping para saber se vai adicionar mais ou nao */
while(adicionarMais != "nao"){

    /**para ter certeza que a lista estara preenchida antes de querer remover algum item  */
    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
        adicionarMais = prompt("Voce deseja adicionar uma comida na lista? Responda com 'sim' ou 'nao' ")
    } else {
        adicionarMais = prompt("Voce deseja adicionar uma comida na lista? Responda com 'sim', 'nao' ou 'remover' ")
    }

    /**while para quando for inserida uma responda diferente das esperadas */
    while (adicionarMais != "sim" && adicionarMais != "nao" && adicionarMais != "remover"){
        alert(`Operancao nao reconhecida!`)
        adicionarMais = prompt("Voce deseja adicionar uma comida na lista?")

    }

    /**if para quando for inserido o nao e sair do while */
    if(adicionarMais === "nao"){
       break
    }

    /**preenchendo a lista */
    if(adicionarMais === 'sim'){
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
    
        /**testando se a lista esta vazia */
    } else if (adicionarMais === 'remover'){
        if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
            alert("A lista esta vazia!")

    /**caso a lista nao esteja vazia */
    }else {
    remover = prompt(`Lista de compras > \n Frutas: ${frutas}\n Laticinios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}\n\n Qual deseja remover?`)

    if(frutas.indexOf(remover) != -1){ /**se existir este elemento em frutas... o != de -1 quer dizer que ha */
        frutas.splice(frutas.indexOf(remover), 1)
        alert(`O item ${remover} foi removido com sucesso!`)
    }else if(laticinios.indexOf(remover) != -1){
        laticinios.splice(laticinios.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`)
    } else if (doces.indexOf(remover) != -1){
        doces.splice(doces.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`)
    } else if (congelados.indexOf(remover) != -1){
        congelados.splice(congelados.indexOf(remover), 1);
        alert(`O item ${remover} foi removido com sucesso!`)
    } else {
        alert(`Não foi possível encontrar o item dentro da lista!`)
    }
}

alert(`Lista de compras > \n Frutas: ${frutas}\n Laticinios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}`)
}
}
