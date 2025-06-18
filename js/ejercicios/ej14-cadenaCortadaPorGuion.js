let texto = prompt(`Ingrese un texto: `);
const textoGuion = ``;

for (let i=0; i< texto.length; i++){
    textoGuion += texto[i];
    if(i < texto.length-1){
        textoGuion += `-`;
    }
    
}

document.writeln(`Texto con - es : ${textoGuion}`);