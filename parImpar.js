/**
 * Comprueba si un número es par o impar.
 * @param {number} numero --> Número que se desea evaluar.
 * @returns {boolean} --> Devuelve true si el número es par, false si es impar.
 */

// Comentario de Andrea (compañera): Esta función recibe un número y 
//comprueba con el operador módulo % si el resto es 0.

// Respuesta de Carla (autora): Exacto, si el resto de dividir el número entre 2
//es 0, significa que es par. Si el resto es distinto de 0, es impar.

//Resspuesta de Carla (autora): Utilizo === para comprobar que el resultado es 
//exactamente 0 y devuelvo true o false seguún se cumpla la condición.
function comprobarPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let numero = 12;
let resultado = comprobarPar(numero);

if (resultado) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}
