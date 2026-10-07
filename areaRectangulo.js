/**
* Calcula el área de un rectángulo a partit de su base y de su altura.
* @param {number} base --> Base del rectángulo.
* @param {number} altura --> Altura del rectángulo.
* @returns {number} --> Devuelve el área del rectángulo.
*/

// Comentario Carla (compañera): Esta función recibe la base y la altura del rectángulo,
//realiza la multiplicación de ambos valores y devuelve el resultado.
function areaRectangulo(base, altura) {
    // Comentario de Ainhoa: Se calcula el área multiplicando la base por la altura.
    let area = base * altura;

    //Comentario de Ainhoa: Se devuelve el valor del área calculada.
    return area;
}

// Comentario de Carla (compañera): Se establece el valor de la base del rectángulo.
let base = 8;

//Comentario de Carla (compañera): Se establece el valor de la altura del rectángulo.
let altura = 5;

//Comentario de Carla (compañera): Se llama a la función pasando la base y la altura.
//y se guerda el resultado obtenido en la variable resultado.
let resultado = areaRectangulo(base, altura);

// Comentario de Carla (compañera): Se muestran por consola los valores utilizados
// y el resultado final del área.
console.log("Base:", base);
console.log("Altura:", altura);
console.log("Área del rectángulo:", resultado);
