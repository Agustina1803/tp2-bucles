/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje. */

const edad = parseInt(prompt(`Ingrese la edad: `));

if(edad >= 18){
    document.writeln(`La edad es ${edad}, puede conducir`);
}else{
    document.writeln(`La edad es ${edad}, es menor de 18 no puedo conducir`);
}