/*Ejercicio 3 - Bucles While: Primeros 10 números pares.
Crea un programa utilizando un bucle while para almacenar
en un arreglo los primeros 10 pares.*/
function par(){
    let num = 0;
    let array =[]
    while(num <= 20){
        array.push(num);
        num = num + 2;
    }
    alert(`Primeros 10 Numeros Pares: ${array}`)

}