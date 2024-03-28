//Crea una variable `hora` y asígnale una hora en formato de 24 horas. Escribe una
//estructura condicional para mostrar "Buenos días", "Buenas tardes" o "Buenas noches" en
//función de la hora.


//mi solucion
 function hora(hora){
     if(hora > 0 && hora <= 12){
         console.log("Buenos días");
     } else if(hora >= 13 && hora <= 19 ){
         console.log("Buenas tardes");
     } else if(hora >= 20 && hora <= 24 ){
         console.log("Buenas noches");
     } else{
         console.log("ingrese una hora valida del dia entre las 1 y las 24");
     }
 };

 hora();

//resolucion de clases

// let hora = prompt("ingrese una hora en formato 24hs: ")

// let esMañana = (hora >= 6 && hora <= 12);
// let esTarde = (hora > 12 && hora <= 18);
// let esNoche =  (hora > 18 && hora <= 24 || hora >= 0 && hora < 6 );

// if (esMañana) {
//     console.log("Buen día");
// } else if (esTarde){
//     console.log("Buenas tardes");

// }else if (esNoche){
//     console.log("Buen buenas noches");

// } else{
//     console.log("no es una hora valida")
// };