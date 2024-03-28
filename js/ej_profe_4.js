//Desarrolla una función llamada 
// invertirNumero que tome un 
//número como parámetro y devuelva 
//el número invertido. Por ejemplo,
// si se pasa el número 123, 
//la función debería devolver 321. 
//Utiliza un ciclo for para 
//invertir el número.


function invertirNumero(numerito){
    let numeroString = numerito.toString();
    let numeroInvertido = "";
    for (let i = numeroString.length - 1; i >=0 ; i--){
        numeroInvertido = numeroInvertido + numeroString[i]
    }
    return numeroInvertido;
}

console.log(invertirNumero(456));