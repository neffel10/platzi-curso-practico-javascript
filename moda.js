/* Lista de ejemplo para la moda */
const lista1=[
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count ={}; // Creamos OBJETO no ARRAY, para asi calcular las frecuencias de cada numero

lista1.map( // La función map nos sirve para recorrer un arreglo
    function(elemento){ //Se recibe un elemento en cada iteración
        if(lista1Count[elemento]){ // Si el elemento que estamos recorriendo ya existe...
            lista1Count[elemento] += 1; //...Vamos a sumarle 1 a su conteo
        }else{
            lista1Count[elemento] = 1; // Si no se repite, simplemente se queda con un valor de 1
        }
    }
);

// Utilizamos la herramienta llamada Object.entries (le podemos enviar como argumento un objeto que queremos convertir en un array)
// Utilizaremos la función sort para iterar en cada uno de nuestros elementos y los ordena de menor a mayor
const lista1Array = Object.entries(lista1Count).sort( 
    function (elementoA, elementoB){ //Estructura de la función basica del sort, 
        return elementoA[1] - elementoB[1]; // Si el valor acumulado es = devolvemos 0, cuando el 2do parametro sea mayor al primero, devolvemos un numero positivo, si es al reves un numero negativo, basicamente es un if con varias condiciones pero reducido a una sola linea
    }
)

const moda = lista1Array[lista1Array.length-1]; //La moda es la ultima posición del array, por que es la que tuvo mas frecuencia y valor, eso lo obtuvimos al ordenar con el sort de menor a mayor