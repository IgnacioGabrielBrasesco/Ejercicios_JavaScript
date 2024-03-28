//  Escribe una función llamada contarPalabras que tome una cadena de texto como
//  argumento y retorne el número de palabras en esa cadena. Supón que las palabras están
//  separadas por espacios.



function contarPalabras(cadena) {
    // Dividir la cadena en palabras utilizando el espacio como separador
    let palabras = cadena.split(" ");
    // Retornar el número de palabras en la cadena
    return palabras.length;
}

// Ejemplo de uso:
let texto = "Hola, este es un ejemplo de una cadena de texto";
console.log(contarPalabras(texto)); 


// Esto es una prueba de lo que realiza la funcion split()
let prueba = "hola estoy probando";

console.log(prueba.split(" "))