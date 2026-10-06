/**
 * Comprueba si un número es par o impar.
 * @param {number} numero --> Número que se desea evaluar.
 * @returns {boolean} --> Devuelve true si el número es par, false si es impar.
 */

// Comentario del compañer@: Esta función recibe un número y comprueba con el operador módulo % si el resto es 0.
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
