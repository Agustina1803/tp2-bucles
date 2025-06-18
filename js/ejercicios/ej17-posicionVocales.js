const texto = prompt(`Ingrese un texto: `);
const vocales =`aeiou`;

for (i=0 ; i< texto.length; i++){
    for (j=0; j< vocales.length; j++){
        if (texto[i] === vocales[j]){
            document.writeln(`La posicion de la vocal ${texto[i]} esta en posicion ${i} `);
        }
    }
}