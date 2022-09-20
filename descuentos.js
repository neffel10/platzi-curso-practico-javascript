//NO UTILIZADO O DE PRUEBA
//const precioOriginal = 100;
//const descuento = 15;

//Calcula el precio con Descuento pasandole el precio y el descuento a aplicar
function calcularPrecioConDescuento(precio,descuento){ 
    const porcentajePrecioConDescuento=100-descuento; //100 por ciento de nuestro precio - el porcentaje de descuento = (Precio del Descuento)
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100; // Precio fijo a pagar ya con descuento y todo
    return precioConDescuento // Imprimimos
}

// Al hacer clic en un boton calcular el descuento 
function onClickButtonPriceDiscount(){ 
    const inputPrice =document.getElementById("InputPrice"); // Tomamos el input del precio
    const priceValue=inputPrice.value; // Tomamos el valor (precio) del input de precio
    const inputDiscount =document.getElementById("InputDiscount"); // Tomamos el input del descuento
    const discountValue=inputDiscount.value; // Tomamos el valor (descuento) del input de descuento

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue); // precioConDescuento llama a la función para calcularlo y le pasa como parametros los valores de los inputs que el usuario ingresara

    const resultP = document.getElementById("ResultP"); // Llamamos nuestra etiqueta P donde mostraremos el resultado(precio con desc)
    resultP.innerText="El precio con descuento son: $" + precioConDescuento; // Con la función innerText mostramos lo que tenemos aqui en el HTML
}


/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */