let pesoIdeal = 60
let pesoActual = 80
let pesoBajadosemanal = 5
let contador
    for (contador = 0; pesoActual > pesoIdeal ; contador++) {
        pesoActual = pesoActual - pesoBajadosemanal
     //   console.log("valor contador: " + contador)
        console.log("peso actual ahora es: " + pesoActual)
    } 
    console.log("necesitas " + contador + " semanas para llegar a tu peso ideal")

