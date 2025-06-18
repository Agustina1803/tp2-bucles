const cadena = prompt(`Ingrese un texto: `);
const vocales = `aeiou`;
let cantidadVocales = 0;


for (let i =0 ; i < cadena.length; i++){
    for (let j=0; j<vocales.length; j++){
         if (cadena[i] === vocales [j]){
            cantidadVocales++;   
    }
    }

}

document.writeln(`La cantidad de vocacles de, ${cadena} es: ${cantidadVocales}`);