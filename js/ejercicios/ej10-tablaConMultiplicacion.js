const fila = parseInt(prompt(`Ingresa un numero de filas`));
const columna = parseInt(prompt(`Ingresa un numero de columnas`));
let totalCelda = fila*columna;

document.writeln(`<table class=table><tbody>`)
for(let indiceFila=0; indiceFila < fila; indiceFila++){
    document.writeln(`<tr>`);
    for (let indiceColumna =0; indiceColumna < columna; indiceColumna++){
         document.writeln(`<td>${totalCelda--}</td>`);
    }
    document.writeln(`</tr>`);
}
document.writeln(`</tbody> </table>`);