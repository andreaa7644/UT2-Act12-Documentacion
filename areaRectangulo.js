/**
* Calcula el área de un rectángulo a partit de su base y de su altura.
* @param {number} base --> Base del rectángulo.
* @param {number} altura --> Altura del rectángulo.
* @returns {number} --> Devuelve el área del rectángulo.
*/

// Comentario Carla (compañera): Esta función recibe la base y la altura del rectángulo,
//realiza la multiplicación de ambos valores y devuelve el resultado.
// Respuesta de Ainhoa (autora): Creo una función para que pueda reutilizarse con diferentes valores de base y altura y así calcular el área de distintos rectángulos.
function areaRectangulo(base, altura) {
    // Comentario de Carla: Se calcula el área multiplicando la base por la altura.
    let area = base * altura;

    //Comentario de Carla: Se devuelve el valor del área calculada.
    return area;
}

// Comentario de Carla (compañera): Se establece el valor de la base del rectángulo.
// Respuesta de Ainhoa (autora): Yo en este caso le he asignado el valor 8 a la base.
let base = 8;

//Comentario de Carla (compañera): Se establece el valor de la altura del rectángulo.
// Respuesta de Ainhoa (autora): Yo en este caso le he asignado el valor 5 a la altura.
let altura = 5;

//Comentario de Carla (compañera): Se llama a la función pasando la base y la altura.
//y se guerda el resultado obtenido en la variable resultado.
// Respuesta de Ainhoa (autora): Así es, se pasan las dos variables como argumentos a la función y se almacena el área devuelta en resultado.
let resultado = areaRectangulo(base, altura);

// Comentario de Carla (compañera): Se muestran por consola los valores utilizados
// y el resultado final del área.
// Respuesta de Ainhoa (autora): Correcto, van a salir tres mensajes, uno con la base, otro con la altura y otro con el cálculo del área, que en este caso es 40.
console.log("Base:", base);
console.log("Altura:", altura);
console.log("Área del rectángulo:", resultado);
