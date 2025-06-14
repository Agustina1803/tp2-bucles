let cadenas = ``; 


do{
    let frase = prompt(`Ingrese el texto: `);

    cadenas += `${frase} -`;


}while(confirm(`¿Desea ingresar otra cadena de texto?`))



document.writeln(`Cadena de texto ${cadenas}`);