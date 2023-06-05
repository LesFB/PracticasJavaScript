numero=prompt("Dame tu número")

for (let i = 2;i<=numero;i++) {
    let aux = numero%i
    
    if (aux == 0 && i!=numero) {
        i=numero+1
        console.log("Tu número no es primo");
    }else{
        console.log("Tu número es primo");
    }
}


let divisores = [];

for (let j=2;j<=numero/2;j++){
    let aux1= numero%j
    if (aux1==0 && j!=numero){
        divisores.push(j)
    } 
}

cadena = divisores.join()

console.log("Sus divisores son: "+ cadena)