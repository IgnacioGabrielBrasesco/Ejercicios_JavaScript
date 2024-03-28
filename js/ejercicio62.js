// Define una función llamada invierteCadena que tome una cadena de texto como
// argumento y retorne una nueva cadena con los caracteres en orden inverso.

function invertirCadena(texto) {
    return texto.split('').reverse().join('');
}

let textoOriginal = "Hola Mundo";
let textoInvertido = invertirCadena(textoOriginal);
console.log(textoInvertido); // Resultado: "odnuM aloH"