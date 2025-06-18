let texto = prompt(`Ingrese un texto: `);
let textoMayusculas = ``;

for (let i=0; i< texto.length; i++){
    textoMayusculas += texto[i].toUpperCase();
}

document.writeln(`Texto en mayusculas: ${textoMayusculas}`);