console.log(typeof(false))
console.log(typeof(true))
console.log(typeof(0))
console.log(typeof(1))
console.log(typeof("0"))
console.log(typeof("000"))
console.log(typeof("1"))
console.log(typeof(NaN))
console.log(typeof(Infinity))
console.log(typeof(-Infinity))
console.log(typeof(""))
console.log(typeof("20"))
console.log(typeof("Twenty"))
console.log(typeof(null))
console.log(typeof(undefined))

/* Tipos de variables

En JS tenemos 3 tipos principales de variables

-var
-let
-const

*/
/*

Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.


Parametros = variables que necesitamos para alimentar mi funcion (todas las  variables se tienen que utilizar)
Ejemplo: limon, azucar, vasito de agua, cucharita, hielos, egua.


Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)
Ejemplo: prepararAguitaDeLimon


Operaciones: Conjunto de instrucciones (en orden especifico).
Ejemplo: 1) Cortar el limon, 2) Exprimir el limon, etc.


Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vasito de aguita de limon


*/

function prepararAguitaDeLimon(limon,agua,azucar){

    var limon = "limon"
    var agua = "agua"
    var azucar = "azucar"




    console.log("cortar limón "+limon)
    console.log("exprimirlos ")
    console.log("agregar azucar "+azucar)
    console.log("agregar agua "+agua)
    console.log("revolver")


}

prepararAguitaDeLimon();


function suma(a,b){
    var a=5;
    var b=7;
    operacion = a+b;
    console.log(operacion);
}
suma();


function resta(a=5,b=6){
    operacion = a-b;
}
resta();

function multiplicacion(a,b){
    operacion = a*b;
    console.log(operacion);
}
multiplicacion(8,9);