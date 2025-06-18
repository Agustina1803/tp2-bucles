let cadenas = ``; 
const guion = `-`;



do{
    let frase = prompt(`Ingrese el texto: `);

    cadenas += `${frase} ${guion}`;


}while(confirm(`¿Desea ingresar otra cadena de texto?`))



document.writeln(`Cadena de texto ${cadenas}`);


