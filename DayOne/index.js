/* operadores de comparação em JS */
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

/* compara o numeroUm e a stringUm */
/* se elas tiverem o mesmo valor mas tipos diferentes, true, senao elas 
não tem o mesmo valor */
if (numeroUm == stringUm) {
    console.log("As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes")
} else {
    console.log("As variáveis numeroUm e stringUm não tem o mesmo valor")
}

/* compara o numeroTrinta e a stringTrinta */
/* se elas tiverem o mesmo valor e tipos iguais, true, senao elas 
não tem o mesmo tipo */
if (numeroTrinta === stringTrinta) {
    console.log("As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo")
} else {
    console.log("As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo")
}

/* compara o numeroDez e a stringDez */
/* se elas tiverem o mesmo valor mas tipos diferentes, true, senao elas 
não tem o mesmo valor */
if (numeroDez == stringDez) {
    console.log("As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes")
} else {
    console.log("As variáveis numeroDez e stringDez não tem o mesmo valor")
}