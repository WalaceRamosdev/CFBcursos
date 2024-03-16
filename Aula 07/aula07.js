/*

Operadores lógicos em JavaScript

&& -> and ou E
|| -> or ou
!  -> not não

Os operadores lógicos retornam com o resultado verdadeiro ou falso

*/

let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

if(!(n1>n2) && (n3>n4)) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}
