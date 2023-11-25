/*Ejercicio 5 - Bucles For: Encontrar los N primeros números pares 
Realiza un programa que emplee un bucle for para encontrar los N primeros
números pares, en donde N es ingresado por el usuario. Muestra este resultado
en una página HTML. */

function parfor(){
    let n = parseInt(prompt("Ingresear un numero"))
    let array = [];

    for(let i = 1; i <= n; i++){
        array.push(i*2);
    }
    alert(`Primeros ${n} Pares ${array}`)
}