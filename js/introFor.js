// Escribe una función llamada esPrimo que tome un número como argumento y retorne
// true si es primo o false si no lo es. Un número primo es aquel que solo es divisible por 1 y
// por sí mismo.

//no funciona
// function esPrimo(numero){
//     for (i=2; i <= (numero - 1); i++){
//         let tieneResto = true;
//         if (numero % i == 0){
//             return tieneResto = "no es primo"; 
//             break;
//         }
//     }
//     return tieneResto = "es primo";
// };

// console.log(esPrimo(8));

//repaso de funciones de clases 22/03/2024
function obtenerPI (){
    let numeroPI = 3.14;
    return numeroPI;
}

console.log(obtenerPI())

//funcion sumar5

function sumar5(valor){
    let suma = valor + 5;
    return suma;
};

//funcion que recibe una funcion por parametro
console.log(sumar5(sumar5(3)));

//funcion restar5

function restar5(valor){
    let resta = valor - 5;
    return resta;
};

// funcion evalua

function evalua(valor){
    if (valor > 10){
        return restar5(valor);
    } else{
        return sumar5(valor);
    }
}

let resolver = evalua(9)

//una funcion que llama a otras funciones... no olvidarme de la coma antes de la variable acá abajo
console.log("el resultado es: ", resolver);

// siclo for es una funcion que recibed entro de los parentesis algo, en este caso
// recibe tres cosas que se separan con punto y coma
// inicializacion ; condicion a evaluar ; ejecucion incremento o decremento

let numeroParatabla = 2;
//    inicio  ; final(mientras que) ; paso i++ incrementa de a 1 (i+=2 de a dos)
for ( let i=1 ;     i<=10            ; i++ ){
    // lo que se define dentro
    // se ejecuta en cada iteracion
    console.log(numeroParatabla + " x " + i + " = " + (numeroParatabla * i))
};

