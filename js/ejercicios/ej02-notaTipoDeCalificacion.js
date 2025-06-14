const nota = parseInt(prompt(`Ingrese la nota entre 0 y 10`));

if(nota >= 0 && nota <= 10){
    if(nota >= 0 &&  nota <= 2){
        alert(`La nota es ${nota} : Muy deficiente`);
    }else if (nota === 3 || nota === 4 ){
        alert(`La nota es ${nota} : Insuficiente`);
    }else if(nota === 5|| nota === 6 ){
        alert(`La nota es ${nota} : Suficiente`);
    }else if(nota === 7){
        alert(`La nota es ${nota} : Bien`);
    }else if (nota === 8|| nota === 9 ){
        alert(`La nota es ${nota} : Notable`);
    }else if(nota === 10 ){
        alert(`La nota es ${nota} : Sobresaliente`);
    }
}else{
    alert(`número erróneo, introduce un número válido`)
}