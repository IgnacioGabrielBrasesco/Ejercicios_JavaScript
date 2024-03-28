// Define tres variables `lado1`, `lado2` y `lado3` que representen las longitudes de los lados de un triángulo. 
// Escribe una estructura condicional para determinar si el triángulo es
// equilátero (todos los lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado
// igual).

 function triangulo(lado1, lado2, lado3){
    
 if(lado1 == lado2 && lado2 == lado3){
     console.log("Es equilatero porque todos los lados soniguales");
 } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
     console.log("Es isóceles porque dos lados son iguales");
 } else{
     console.log("Es escaleno porque ningun lado es igual");
 }
 };

 triangulo(3, 4, 1);

// resolucion de clases

// let lado1 = 2;
// let lado2 = 4;
// let lado3 = 3;

// let = equilatero = (lado1 == lado2 == lado3)
// let isoceles = (lado1 == lado2 || lado1 == lado3 || lado2 == lado3)

// if(equilatero){
//     console.log("Es un triangulo oequilatero");
// } else if(isoceles){
//     console.log("Es un triangulo isoceles");
        
// } else{
//     console.log("Es un triangulo escaleno");
// };
