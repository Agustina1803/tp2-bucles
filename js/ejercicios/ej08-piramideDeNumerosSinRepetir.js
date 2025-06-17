const numeroRepeticiones = parseInt(prompt(`Ingresa un numero del 1 al 50`));

if(numeroRepeticiones >= 1 && numeroRepeticiones <= 50){
for(let fila=0; fila< numeroRepeticiones; fila++ ){

   for (let columna=0; columna <= fila; columna++){
    document.writeln(columna + 1);
    
   }
   document.writeln(`<br>`)
}
}else{
    document.writeln(`El numero ingresado debe estar contenido entre 1 y 50`);
}