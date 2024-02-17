/** iniciando com const, pois const é uma constante apenas de leitura e não uma variável
 * que já será inicializada com um valor
 */

const nome = prompt("Qual o seu nome? ");
const idade = prompt("Quantos anos você tem? ");
const linguagem = prompt("Qual linguagem você está estudando? ");

const saida = (`"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"`)
alert(saida)
/*console.log("Olá " + nome +", você tem " + idade + " anos e já está aprendendo " + linguagem)*/

    const resp = prompt("Você gosta de estudar ${linguagem}? Sim ou Não")
        if (resp == 'Sim'){
            console.log("Muito Bom!")
        }else{
            console.log("Ah que pena...")
        }