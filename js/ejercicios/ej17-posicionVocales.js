const texto = prompt(`Ingrese un texto: `);
const vocales =`aeiouAEIOU`;
let primeraVocal;
let posicionVocal;

for (i=0 ; i< texto.length; i++){
    for (j=0; j< vocales.length; j++){
        if (texto[i] === vocales[j]){
            primeraVocal = texto[i]; 
            posicionVocal = i;
            console.log(primeraVocal, posicionVocal);
            break;
        }
    }
    if (primeraVocal !=  null){
        break;
    }
}

if (primeraVocal != null && posicionVocal != null){
    console.log(primeraVocal,posicionVocal);
    document.writeln(`La posicion de la vocal ${primeraVocal} es ${posicionVocal}`);
}

