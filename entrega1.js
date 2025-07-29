let nombre = prompt("ingresa tu nombre");
console.log(nombre);


let producto = prompt(`Hola ${nombre}! ¿Que quieres comprar? (ingresa el número) 1) Telefono 2) Computadora 3) Televisión`);
console.log(producto);

if ( producto !== "1" || producto !== "2"  || producto !== "3"  ){
    producto = prompt(`¡Vuelva a ingresar el dato! ¿Que quieres comprar? (ingresa el número) 1) Telefono 2) Computadora 3) Televisión`);
    console.log(producto);
}
else if (producto == "1"){
    console.log("Selecciono 1");
}
else if(producto == "2") {
    console.log("Selecciono 2");
}
else if(producto == "3") {
    console.log("Selecciono 3");
}
