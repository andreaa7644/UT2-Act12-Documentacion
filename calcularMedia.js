/**
 * Calcula la media de tres notas.
 * @param {number} nota1 - Primera nota
 * @param {number} nota2 - Segunda nota
 * @param {number} nota3 - Tercera nota
 * @returns {number} La media de las tres notas
 */
// Comentario de Ainhoa: Esta función recibe tres notas, calcula su media y devuelve el resultado.
function calcularMedia(nota1, nota2, nota3) {
    // Comentario de Ainhoa: Suma las tres notas y las divide entre 3.
    let media = (nota1 + nota2 + nota3) / 3;

    // Comentario de Ainhoa: Devuelve la media calculada.
    return media;
}

// Comentario de Ainhoa: Se asignan los valores de las tres notas.
let nota1 = 7;
let nota2 = 8;
let nota3 = 6;

// Comentario de Ainhoa: Se llama a la función para calcular la media.
let media = calcularMedia(nota1, nota2, nota3);

// Comentario de Ainhoa: Muestra la media de las notas por la consola.
console.log("La media es: " + media);

//Comentario de Andrea (autora): Como mejora futura, podría validarse que ningun a nota fuese negativa.
// Comentario de Andrea (autora): La documentación explica claramente el funcionamiento de la función y la lógica del programa.
