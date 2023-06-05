function aproximacion(n){
    let aprox = 0
    for(var i=1;i<=n;i++){
        if (i%2 == 1){
            signo = 1
        }else {
            signo = -1
        }
        
        aprox = aprox+signo*(4/((i*2)-1));
        
    }
    return aprox
}

num = prompt("Inserta número para aproximación")
alert("Con "+num+" iteraciones, el número pi es: "+aproximacion(num));