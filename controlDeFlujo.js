let edadFelipe = 17;
let edadPermitida = 18;


if (edadFelipe<edadPermitida){
    console.log("Lo siento, no puedes ir")
}

//Felipe tiene 17 anios, y quiere ir a una fiesta. Dicha fiesta solo es para personas adultas (mayores de 18 anios). Ayuda a Felipe decidir si puede ir a la fiesta o no.


//Evaluamos solo una expresion (si Felipe tiene menos de 18 anios), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).

let edad = prompt("Ingresa tu edad:");
let edadPaEntrar = 18;

if (edad<edadPaEntrar){
    console.log("lo siento");
} else {
    console.log("Felicidades");
}



let hora = prompt("Dame la hora");
if (hora < 12){
    console.log("Buenos dias")
} else if(hora<19){
    console.log("Buenas tardes")
} else{
    console.log("Noches ya")
}


pesoLb = prompt("Dame tu peso en libras : ");
estaturaCm = prompt("Dame tu estatura en centímetros");



//function IMCfun(estaturaCm,pesoLb){

pesoKg = pesoLb * 0.453592;
estaturaMetros = estaturaCm/100;

IMC = pesoKg / (estaturaMetros**2);

if (IMC < 16){
    console.log("Su peso es " + pesoKg + "y tiene un IMC de "+IMC+"\nCriterio de ingreso");
} else if(IMC <= 16.9){
    console.log("Infrapeso");
} else if(IMC <= 18.4){
    console.log("Bajo Peso");
} else if(IMC <= 24.9){
    console.log("Peso Normal");
} else if(IMC <= 29.9){
    console.log("Sobrepeso");
} else if(IMC <= 34.9){
    console.log("Obesidad Premorbida");
} else if(IMC <= 45){
    console.log("Obesidad Morbida");
} else {
    console.log("Obesidad Hipermorbida");
}