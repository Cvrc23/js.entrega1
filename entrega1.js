let telefonos = [
        {
        marca: "Samsung",
        modelo: "S24",
        precio: 10000,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
        {
        marca: "Samsung",
        modelo: "S25 Ultra",
        precio: 24000,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
        {
        marca: "Xiaomi",
        modelo: "Redmi Note 8 pro",
        precio: 5000,
        stock: 5,
       /*  descontarStock: funcionStock, */
        },
        {
        marca: "Xiaomi",
        modelo: "Xiaomi 9",
        precio: 8000,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
        {
        marca: "Apple",
        modelo: "Iphone SE",
        precio: 15000,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
        {
        marca: "Apple",
        modelo:"Iphone 16 Pro",
        precio: 32000,
        stock: 5,
       /*  descontarStock: funcionStock, */
        },
]
let computadoras = [
        {
        marca: "Lenovo",
        modelo: "Legion 5i",
        precio: 33500,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
        {
        marca: "Lenovo",
        modelo: "Yoga 9i",
        precio: 30000,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
        {
        marca: "HP",
        modelo: "Victus",
        precio: 12000,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
        {
        marca: "HP",
        modelo: "Pavilion",
        precio: 13000,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
        {
        marca: "Dell",
        modelo: "Alienware",
        precio: 33000,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
        {
        marca: "Dell",
        modelo: "Inspiron",
        precio: 17500,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
]

let televisiones = [
        {
        marca: "Samsung",
        modelo: "LED",
        precio: 25000,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
        {
        marca: "Samsung",
        modelo: "OLED",
        precio: 42000,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
        {
        marca: "Sony",
        modelo: "LED",
        precio: 25000,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
        {
        marca: "Sony",
        modelo: "OLED",
        precio: 42000,
        stock: 5,
        /* descontarStock: funcionStock, */
        },
]



let nombre = prompt("ingresa tu nombre");
/* console.log(typeof nombre); */

while ( nombre == "" && nombre == null){
    nombre = prompt(`¡Vuelva a ingresar el dato!`);
    console.log(nombre);
}

let producto = prompt(`Hola ${nombre}! ¿Que quieres comprar? (ingresa el número) 1) Teléfono 2) Computadora 3) Televisión`);
console.log(producto);

while ( producto !== "1" && producto !== "2"  && producto !== "3"  ){
    producto = prompt(`¡Vuelva a ingresar el dato! ¿Que quieres comprar? (ingresa el número) 1) Telefono 2) Computadora 3) Televisión`);
    console.log(producto);
}


if (producto === "1") {
    console.log("Seleccionó 1 - Teléfono");
    producto = telefonos
    console.log(producto);
} else if (producto === "2") {
    console.log("Seleccionó 2 - Computadora");
    producto = computadoras
    console.log(producto);
} else if (producto === "3") {
    console.log("Seleccionó 3 - Televisión");
    producto = televisiones
    console.log(producto);
} 


let concatenarMarcas = "";

for ( let i = 0 ; i < producto.length ; i++ ){
   /*  if (producto[i].marca == producto[i + 1].marca ) {    .... Fue un intento para eliminar repetidos, pero no supe hacerlo.
        concatenarMarcas = concatenarMarcas
    }
    else { */
        concatenarMarcas = concatenarMarcas + producto[i].marca + ", ";
   /*  } */
}

console.log (concatenarMarcas);

let marcaSeleccion = prompt (`¿Que marca te interesa? (Escribela respetando Mayus. y Minus.): ${concatenarMarcas}`);

let concatenarModelos = "";

function funcionConcatenarModelos (){
    for ( let i = 0 ; i < producto.length ; i++ ){
        if ( marcaSeleccion == producto[i].marca ){
            console.log("bien");
            concatenarModelos = concatenarModelos + producto[i].modelo + ", ";
        } else{
            console.log("mal");
        }
    }
}

funcionConcatenarModelos ();

if (concatenarModelos == "") {
    do{
        marcaSeleccion = prompt (`¡Vuelva a ingresar el dato! ¿Que marca te interesa? (Escribela respetando Mayus. y Minus.): ${concatenarMarcas}`);
           funcionConcatenarModelos ();
    } while (concatenarModelos == "");
}

console.log (concatenarModelos);



let verificacionModelo = "";
let modeloSeleccion = prompt (`¿Que modelo te interesa? (Escribela respetando Mayus. y Minus.): ${concatenarModelos}`);
for ( let i = 0 ; i < producto.length ; i++ ){
        if ( modeloSeleccion == producto[i].modelo ){
            verificacionModelo = true;
            alert (`El precio del producto es: ${producto[i].precio} Gracias por su compra!`);
            i = producto.length;
        } 
        else {
            verificacionModelo = false;
        }
}
while (verificacionModelo == false){
    modeloSeleccion = prompt (`¡Vuelva a ingresar el dato! ¿Que modelo te interesa? (Escribela respetando Mayus. y Minus.): ${concatenarModelos}`);
    for ( let i = 0 ; i < producto.length ; i++ ){
            if ( modeloSeleccion == producto[i].modelo ){
                verificacionModelo = true;
                alert (`El precio del producto es: ${producto[i].precio} Gracias por su compra!`);
                i = producto.length;
            } 
            else {
                verificacionModelo = false;
            }
    }

}