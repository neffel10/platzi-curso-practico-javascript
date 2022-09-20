function calcularMediaAritmetica(lista){
    /*NO UTILIZADO
    let sumaLista = 0;
    for(let i=0; i<lista.length;i++){
        sumaLista=sumaLista+lista[i];
    }*/
  
    const sumaLista=lista.reduce( //Sumamos los valores de nuestra lista y los acumulamos
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    return promedioLista; //Obtenemos el promedio de nuestra lista
  }

//Lista de EJEMPLO
const lista1=[
    100,
    200,
    500,
    400000,
];

// Obtenemos la mitad - Por eso lo dividimos entre 2 pero aun falta definir si es par o impar...
const mitadLista1 = parseInt(lista1.length / 2); // Se ocupa el parseInt para redondear su valor de posición

function esPar(numerito){ //
    if(numerito%2===0){ //Si nuestro numerito de mitad de lista no tiene residuo es PAR
        return true;
    }else{
        return false; //Si no, es IMPAR
    }
}

let mediana; // Creamos variable para la mediana

if(esPar(lista1.length)){ //Si nuestra lista de elementos es par
    const elemento1 = lista1[mitadLista1-1]; //Numero de la mitad a la izquierda
    const elemento2 = lista1[mitadLista1]; //Numero de la mitad a la derecha

    //Reutilizamos nuestra función para sacar promedio para sumar la mitad1 y la mitad-1 y dividirlos entre 2, lo que nos dara el promedio y por ende la mediana correcta.
    const promedioElemento1y2=calcularMediaAritmetica([ 
        elemento1,
        elemento2
    ]);

    mediana=promedioElemento1y2;
}else{ // Si nuestro numero es impar...
    mediana=lista1[mitadLista1]; // ...le asignamos a la mediana el valor de la mitad de nuestra lista
}