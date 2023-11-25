/* Ejercicio 1 - Bucles While: Números del 1 al 5
Implementa un programa que utilice un bucle while
para mostrar en una lista los números del 20 al 10
de manera decreciente en una página HTML.*/
function menor(){
let menos = 20;
let array = [];
while(menos >= 10){
    array.push(menos)
    menos--
}

alert(`Lista: ${array}`)
}