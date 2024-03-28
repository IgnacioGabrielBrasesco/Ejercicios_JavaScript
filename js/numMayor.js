function numeroMayor(primerNum, segundoNum, tercerNum){
    if (primerNum > segundoNum && primerNum > tercerNum){
        console.log("el mayor es el primer numero");
    } else if(segundoNum > primerNum && segundoNum > tercerNum){
        console.log("el mayor es el segundo numero");
    } else if(tercerNum > primerNum && tercerNum>segundoNum){
        console.log("el mayor es el tercer numero");
    };
}

numeroMayor(5, 9, 1)