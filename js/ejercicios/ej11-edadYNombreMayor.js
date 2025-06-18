let nombreMayor =``;
let edadMayor = 0;

for (let i=1; i<=3; i++){
    let nombre = prompt(`Ingresa un nombre: `);
    let edad = parseInt(prompt(`Ingrese la edad: `));

    edadMayor = Math.max(edadMayor, edad);
    if(edadMayor === edad){
        nombreMayor = nombre;
    }
}

document.writeln(`La persona mayor es ${nombreMayor} y tiene  ${edadMayor} años`);