function formulaGeneral(A,B,C){
    raiz=Math.sqrt((B**2)-4*A*C)
    x1=(-B+raiz)/(2*A)
    x2=(-B-raiz)/(2*A)


    console.log("Las raices de "+A+"x**2+"+B+"x+"+C+" son: "+x1+" y "+x2)
}

formulaGeneral(1,2,-15)

function velocidad(distancia,tiempo){
    operacion = distancia/tiempo
    console.log("LA velocidad es de "+operacion+ " kilometros por hora")
}

velocidad (20,52)

function saludo(){
    let nombreSaludo = "Felipe";

    console.log("Hola "+nombreSaludo);

    return nombreSaludo;
}

const nombreQueSaque = saludo();

console.log("Esta persona inicio sesión " + nombreQueSaque);

var nombre = prompt("ingres tu nombre");
console.log("Gracias "+nombre)