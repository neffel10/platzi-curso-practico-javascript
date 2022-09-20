/// Helpers o Utils - No son parte de nuestra logica, pero las necesitamos para nuestros calculos

// Utilizamos para ver si es par el arreglo y sacar su mediana
function esPar(numerito){
    return (numerito%2===0); // Reducimos las condicionales a simplemente regresar TRUE si es PAR al no tener residuo, lo contrario seria FALSE o impar
}

//Funcion REUTILIZABLE para sacar la mediana 
function calcularMediaAritmetica(lista){ // Le pasamos una lista de elementos a nuestra función
    /* NO UTILIZAMOS
        let sumaLista = 0;
  
        for(let i=0; i<lista.length;i++){
          sumaLista=sumaLista+lista[i];
        } 
    */

    const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    return promedioLista;
}

/// FIN DE UTILS O HELPERS

//Calculadora de mediana de Salarios para cualquier pais, en este caso Colombia
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)){ //Si nuestra lista de elementos es par
        const personitaMitad1 = lista [mitad-1];    // Numero de la mitad a la izquierda
        const personitaMitad2 = lista [mitad];      // Numero de la mitad a la derecha

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]); /* Si nuestra cantidad de elementos es par le asignamos a la mediana el valor de la mitad izq y derecha de nuestra lista */
        return mediana;
    }else{
        const personitaMitad = lista[mitad]; //Si nuestra cantidad de elementos es impar le asignamos a la mediana el valor de la mitad de nuestra lista
        return personitaMitad;
    }
}

// Mediana General de Salarios
const salariosCol= colombia.map( // La función map itera por todos los elementos del array de sueldos Colombia
    function(personita){ 
        return personita.salary; // En este caso asignamos solo el salario de las personas a nuestro nuevo array llamado SalariosCol, esto para poder obtener la mediana.
    }
);

// Ordenaremos los salarios de menor a mayor con el metodo sort
// Ver funcionamiento del metodo sort en el ejercicio moda.js
const salariosColSorted=salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

// Guardamos en una variable la mediana General
const medianaGeneralCol = medianaSalarios(salariosColSorted); //Para esto le pasaremos las funciones que ya tenemos para calcular la mediana de los salarios

// Mediana del top 10%

/* Lo primero a realizar es cortar el 10% de los datos */

// Valores de Inicio y Cantidad del corte del splice
const spliceStart = (salariosColSorted.length*90)/100; // El inicio sera a partir del 90%, esa seria la formula
const spliceCount = salariosColSorted.length - spliceStart; // La cantidad de corte seria del 100%-10% del tope

// Splice es un metodo que corta un numero de valores desde cierta posición, le enviamos 2 argumentos
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col= medianaSalarios(salariosColTop10); // Obtenemos la mediana del TOP 10 solamente al pasarle las funciones especificas para ello

console.log(
    medianaGeneralCol, //Le pasaremos la mediana general
    medianaTop10Col, //Le pasaremos la mediana del top10
);

