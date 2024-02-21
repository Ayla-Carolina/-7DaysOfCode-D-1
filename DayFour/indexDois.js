/**utilizando número randômico */
const valor2 = Math.floor(Math.random()* (10 - 0 + 1) + 0)
let chute = ''
let acerto = false

for(let i = 0; i < 3; i++){
    chute = prompt("Tente adivinhar o número de 0 a 10:")
    if(chute == valor2){
        alert(`"Parabéns, você acertou! O número era ${valor2}"`)
        acerto = true
        break
    }
    alert("Errado!")
}

if(!acerto){
    alert(`"Infelizmente você não acertou. O número era ${valor2}"`)

}
