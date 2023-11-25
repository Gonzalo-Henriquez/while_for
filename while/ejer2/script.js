/* Ejercicio 2 - Bucles While: Suma del 1 al 10
Desarrolla un programa que emplee un bucle while 
para calcular la suma de los números del 1 al 10.
Muestra este resultado  página HTML.*/
function suma(){
    let suma = 0;
    let contador = 0;
    while(contador <= 10){
        contador++
        suma += contador
    }
    alert(suma)
}