let suma = 0;
let numero;

do {
  numero = parseInt(prompt(`Ingrese un numero: `));

  if (numero == numero) {
    suma = suma + numero;
  } else {
    alert(`El dato ingresado no es un numero`);
  }
} while (
  confirm(`¿Quiere ingresar otro numero? o Presione cancelar para continuar`)
);

document.writeln(`La suma de los numero es: ${suma}`);