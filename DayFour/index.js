/**declarando um valor entre 0 e 10 para o chute */
let valor = '7'
let chute = ''
let acerto = false

/**fazendo um looping para que o programa pergunte 3 vezes ao usuário
 * sobre qual será o chute dele
 */
for (let i = 0; i < 3; i++) {
    chute = prompt("Tente adivinhar o número de 1 a 10: ")
    if (chute == valor) {
        alert(`"Parabéns, você acertou! O número era o ${valor}"`)
        acerto = true
        break

    } else if (chute < valor) {
        alert("Errado!O número é maior")

    } else if (chute > valor) {
        alert("Errado!O número é menor")
    }
}

/**MEnsagem caso o usuário não acerte */

/**mudando o valor de acerto para TRUE. Sendo assim ele só será exibido quando 
 * o usuário errar e acerto continuar false 
 */
if(!acerto){
    alert(`"Infelizmente, você não acertou. O número era ${valor}"`)
}