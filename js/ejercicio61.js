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

//que muestre numero pares e impares del 1 al 10
//mostrar num pares e impares del 90 al 100

// function esPar(){
//     for(let i = 0 ; i <= 10 ; i+=2){      
//         console.log(i)         
//     }; 
// }
    
    
// esPar()

// function esImpar(){
//     for(let i = 1 ; i <= 10 ; i+=2){      
//         console.log(i)         
//     }; 
// }
    
    
// esImpar()

for(let i = 0 ; i <= 10 ; i++){

    let div1 = parseInt(i / 2);
    let div2 = parseFloat(i / 2);
    
    if( div1 == div2 ){
        console.log("el numero " + i + " es par");
    }else{
        console.log("el numero " + i + " es impar");
    }
}