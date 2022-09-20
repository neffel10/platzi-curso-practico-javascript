const cupones=[30,50,100];

let cuponSeleccionado=0;

function seleccionarCupon(){
    const inputCupon = document.getElementById("InputCupon"); // Tomamos el input del cupon
    const cupon=inputCupon.value; // Tomamos el valor (precio) del input de precio
    const cuponP = document.getElementById("CuponP"); // Llamamos nuestra etiqueta P donde mostraremos el resultado(precio con desc)

    if(cupon==="games1"){
        cuponSeleccionado=cupones[0];
    }else if(cupon==="games2"){
        cuponSeleccionado=cupones[1];
    }else if(cupon==="games3"){
        cuponSeleccionado=cupones[2];
    }else{
        cuponP.innerText="El cupon no existe o no es aplicable" // Con la función innerText mostramos lo que tenemos aqui en el HTML
    }
}

function calcularPrecioConDescuento(precio,descuento){ 
    const porcentajePrecioConDescuento=100-cuponSeleccionado; //100 por ciento de nuestro precio - el porcentaje de descuento = (Precio del Descuento)

    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100; // Precio fijo a pagar ya con descuento y todo
    return precioConDescuento // Imprimimos
}

// Al hacer clic en un boton calcular el descuento 
function onClickButtonPriceDiscount(){ 
    const inputPrice =document.getElementById("InputPrice"); // Tomamos el input del precio
    const priceValue=inputPrice.value; // Tomamos el valor (precio) del input de precio

    const precioConDescuento = calcularPrecioConDescuento(priceValue,cuponSeleccionado); // precioConDescuento llama a la función para calcularlo y le pasa como parametros los valores de los inputs que el usuario ingresara

    const resultP = document.getElementById("ResultP"); // Llamamos nuestra etiqueta P donde mostraremos el resultado(precio con desc)
    resultP.innerText="El precio con descuento son: $" + precioConDescuento; // Con la función innerText mostramos lo que tenemos aqui en el HTML
}


