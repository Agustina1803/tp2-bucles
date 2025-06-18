const cadena = prompt(`Ingrese un texto: `);
let cadenaInvertida =``;

for (i= cadena.length -1 ; i>=0 ; i--){
    cadenaInvertida += cadena[i];
}

document.writeln(`La cadena invertida es: ${cadenaInvertida}`);