let numRepeticiones = parseInt(prompt(`Ingrese un numero del 1 al 50: `));

if(numRepeticiones >= 1 && numRepeticiones <= 50 ){
    for (let fila =numRepeticiones; fila >= 1; fila--){
        for (let columna=0; columna < fila; columna++){
            document.writeln(fila);
        }
        document.writeln(`<br>`);
    }
}else{
    document.writeln(`El numero ingresado es mayor que 50`);
}