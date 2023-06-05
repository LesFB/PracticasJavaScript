console.log("Ejemplo de Galletitas con Do-While")

//variable tiempo de coccion que servira como contador
var tiempoTranscurridoDeCoccion = 0;

//usamos el ciclo do-while

do {

    console.log("Horneando las galletas...");
    tiempoTranscurridoDeCoccion +=5;


//Todo el bloque de codigo se va evaluar mientras el tiempo de coccion sea menor a 30 minutos. Esto es porque las galletas se puden cocinar en 5, 10, 15, 20 o 25 minutos, teniendo un maximo de 30. Si pasamos de ese tiempo, puede que las galletas se quemen. 

//Esto es como si revisaramos el horno cada 5 minutos


} while (tiempoTranscurridoDeCoccion <30);


console.log("Las galletas estan listas");

console.log("Las galletas estan listas");
/*

Do - While (hacer mientras)

Es similar al while, con la diferencia de que la condicion se evalua despues de cada iteracion. Esto garantiza que el bloque de codigo se ejecute al menos una vez, incluso si la condicion inicial es falsa



do {
    //bloque de codigo que vamos a ejecutar
} while (condicion);


*/
