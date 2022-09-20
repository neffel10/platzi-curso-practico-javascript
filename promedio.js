/// Usaremos esta función para pasarle la cantidad de valores que queramos y promediarlos, esto se hara desde consola
function calcularMediaAritmetica(lista){ 
    /* NO SE UTILIZO 
    let sumaLista = 0;
    for(let i=0; i<lista.length;i++){
        sumaLista=sumaLista+lista[i];
    } */

/// Basicamente esta función es un acumulador de lo que hay en una LISTA ///
    const sumaLista=lista.reduce( //El metodo reduce va sumando(o restando o lo que gustes) todos los elementos de una lista
        //Este tipo de función recibe el valor acumulado, el valor de un nuevo elemento
        function(valorAcumulado=0,nuevoElemento){ 
            return valorAcumulado+nuevoElemento; // Regresar la suma entre el valoracumulado y un nuevo elemento
        }
);

const promedioLista=sumaLista/lista.length; //Suma la lista de valores y la divide entre la cantidad de elementos

return promedioLista; // Regresa el promedio
}