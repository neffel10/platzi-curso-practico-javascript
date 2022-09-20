/* Crear un array de cupones
 */
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function calcularPrecioConDescuento(precio,descuento){ 
    const porcentajePrecioConDescuento=100-descuento; //100 por ciento de nuestro precio - el porcentaje de descuento = (Precio del Descuento)

    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100; // Precio fijo a pagar ya con descuento y todo
    return precioConDescuento // Imprimimos
}

// Al hacer clic en un boton calcular el descuento 
function onClickButtonPriceDiscount(){ 
    const inputPrice =document.getElementById("InputPrice"); // Tomamos el input del precio
    const priceValue=inputPrice.value; // Tomamos el valor (precio) del input de precio

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]: // "JuanDC_es_Batman"
          descuento = 15;
        break;
        case coupons[1]: // "pero_no_le_digas_a_nadie"
          descuento = 30;
        break;
        case coupons[2]: // "es_un_secreto"
          descuento = 25;
        break;
      }

    const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento); // precioConDescuento llama a la función para calcularlo y le pasa como parametros los valores de los inputs que el usuario ingresara

    const resultP = document.getElementById("ResultP"); // Llamamos nuestra etiqueta P donde mostraremos el resultado(precio con desc)
    resultP.innerText="El precio con descuento son: $" + precioConDescuento; // Con la función innerText mostramos lo que tenemos aqui en el HTML
}


