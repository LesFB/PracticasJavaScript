/*
- Operadores de asignacion
    como dice su nombre son los que asignan una variable 
        ej. edadFelipe = 15
- Operadores de cadena
    
- Operadores logicos
- Operadoes de comparacion
- Operadores aritmeticos


*/

let numero1 = 13;
let numero2 = 25;
let numero3 = "25";
let veinticinco = 25;

//Operador menor que
console.log("El valor 13 es menor que el valor 25? " + (numero1<numero2)); 

//Operador mayor que
console.log("El valor 13 es menor que el valor 25? " + (numero1>numero2));

//Operador mayor o igual que
console.log("El valor 25 es mayor o igual que el valor 25? " + (numero2>=numero3));

//Operador de igualdad solo evaluea valores
console.log("El valor 25 es igual que el valor 25? " + (numero2 == numero3));

//Operador de igual estricta (evalua el valor y evalua el tipo de dato)
console.log("El valor 25 es igual que el valor 25? " + (numero2 === numero3));

//Otro ejemplo de operador de igualdad estricta
console.log("El valor 25 es igual que el valor 25? " + (25 === "veinticinco"));

//Operador de desigualdad (!=)
console.log("El valor 13 no es igual al valor 25? " + (numero2 != numero3));

//Operador de desigualdad estricta (!==)
console.log("El valor 25 no es igual al valor 25? " + (numero2 !== numero3));

//Ejemplo con AND (&&)

var num1 = 12;
var num2 = 24;

afirmacion1 = (num1 > num2); //false
afirmacion2 = (num1 != num2); //verdadero

console.log(afirmacion1 && afirmacion2); //Imprime true porque ambas afirmaciones son verdaderas


//Ejemplo con OR (||)
afirmacion3 = (num1 < num2); //verdadero
afirmacion4 = (num1 !== num2); //verdadero

console.log(afirmacion3 || afirmacion4); 


//Ejemplo con NOT (!)
console.log(!afirmacion3); //falso
console.log(!afirmacion4); //falso

nam1 = 12;
nam2 = 24;
nam3 = 25;
nam4 = 92;
nam5 = 91;

op = (nam1 < nam2 || nam2 < nam3) && (!(nam1 != nam2) && nam5 != nam3);


num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);




