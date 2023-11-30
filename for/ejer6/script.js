/* Ejercicio 6 - Bucles For: Promedio de 5 calificaciones
Desarrolla un programa utilizando un bucle for para permitir
ingresar 5 calificaciones y posteriormente mostrar el promedio desde en una página HTML.*/

function promedio() {
    let array = [];

    for(let i = 1; i <= 5;i++){
        let notas = parseInt(prompt(`porfavor ingresar las notas`))

        if(isNaN(notas)){
            alert(`ingresar un valor valido`)
            return;
        }
        array.push(notas);
    }

    let suma = 0;

    for(let j = 0; j < array.length; j++){
        suma += array[j]
    }
    let promedioFinal = suma / array.length;
    alert(`notas: ${array}`)
    alert(`el promedio final: ${promedioFinal}`)
}



let N = parseInt(prompt('ingresar un limitante'));
let array = [];

for(let i = 1; i <= N; i ++) {
    let valores = parseInt(prompt('Ingresar tus valores'));
    array.push(valores);
}
alert(array);

