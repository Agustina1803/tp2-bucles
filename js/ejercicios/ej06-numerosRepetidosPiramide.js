let numRepeticiones = parseInt(prompt(`Ingrese un numero del 1 al 30: `));

if(numRepeticiones >= 1 && numRepeticiones <= 30){
    for(let fila = 0; fila < numRepeticiones; fila++)
        {
            for (let columna=0; columna <= fila; columna++){
    
    document.writeln(fila + 1);
    
   }
   document.writeln(`<br>`)
        }

}