/// Codigo del cuadrado ///

console.group("Cuadrado"); //Agrupa Codigo a mostrar en el console log para mayor orden simplemente.

/* No utilizado o de prueba
const ladoCuadrado=5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+" centimetros");*/

function perimetroCuadrado(lado){ /* Función: calcula perimetro del cuadrado al pasarle un lado */
    return lado*4; // El perimetro de un cuadrado es igual a lado*4
}

function areaCuadrado(lado){ /* Función: calcula el area del cuadrado al pasarle un lado */
    return lado*lado; // El lado de un cuadrado es igual a lado*lado
}

// Mandamos llamar nuestras funciones para poderles pasar el parametro lado
perimetroCuadrado();
areaCuadrado();

console.groupEnd(); //Cierra el grupo agrupado por console.group para cuadrado

/// Codigo del triangulo ///
console.group("Triangulos"); //Agrupa Codigo del Triangulo

/* /// CODIGO NO UTILIZADO O DE PRUEBA ///
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
const alturaTriangulo = 5.5 ;
console.log("Los lados del triangulo miden: "+ladoTriangulo1+" cm, el segundo lado mide: "+ladoTriangulo2+" cm, y la base del triangulo mide: "+baseTriangulo+" cm.");
console.log("La altura del triangulo mide: "+alturaTriangulo+" cms"); */

function perimetroTriangulo(lado1,lado2,base){ //Funcion calcular perimetro Triangulo con parametros necesarios
    return lado1+lado2+base; /* Formula perimetro Triangulo */
}
 
function areaTriangulo(base,altura){ //Funcion calcular area Triangulo con parametros necesarios
    return (base*altura)/2; /* Formula area Triangulo */
}

console.groupEnd(); //Cierra el grupo agrupado por console.group para triangulo

/// Codigo del Circulo ///
console.group("Circulos"); //Agrupa el codigo para los circulos

//Declaracion de variables
const radioCirculo      =   4; 
const PI=Math.PI; // Ingresa el valor de PI a una variable

function diametroCirculo(radio){ // Calcula el diametro del circulo en una funcion
    return radio*2; // Formula del diametro de un circulo
}

function perimetroCirculo(radio)
{
    const diametro=diametroCirculo(radio); // Calcula el diametro del circulo en base al radio que le pase el usuario
    return diametro*PI; // Formula del perimetro de un circulo
}

function areaCirculo(radio){ // Calcula el area del circulo en una funcion
    return (radio*radio)*PI; // Formula del area de un circulo
}

/* IMPRESIONES NO UTILIZADAS */
/* const perimetroCirculo = diametroCirculo *PI;
const areaCirculo = (radioCirculo*radioCirculo)*PI;
console.log("El radio del circulo mide: "+radioCirculo+" cms");
console.log("El diametro del circulo mide: "+diametroCirculo+" cms");
console.log("El perimetro del circulo mide: "+perimetroCirculo+" cms");
console.log("El radio del circulo mide: "+areaCirculo+" cms cuadrados"); */


/// *AQUI INTERACTUAMOS CON EL HTML* ///

function calcularPerimetroCuadrado(){ // Calcula el PERIMETRO del CUADRADO en base al valor que ponga el usuario como lado
    const input= document.getElementById("InputCuadrado"); // Llama a el campo de input del HTML para ingresar el lado
    const value=input.value; // Toma el valor del input que llamamos anteriormente

    const perimetro = perimetroCuadrado(value); // Calcula el PERIMETRO del CUADRADO en base al valor que ponga el usuario en el input 
    alert(perimetro); // Muestra el PERIMETRO en una ALERTA al USUARIO
}

function calcularAreaCuadrado(){ // Calcula el AREA del CUADRADO en base al valor que ponga el usuario como lado
    const input= document.getElementById("InputCuadrado"); // Llama a el campo de input del HTML para ingresar el lado
    const value=input.value; // Toma el valor del input que llamamos anteriormente

    const area = areaCuadrado(value);  // Calcula el AREA del CUADRADO en base al valor que ponga el usuario en el input
    alert(area); // Muestra el AREA en una ALERTA al USUARIO
}

console.groupEnd(); //Cierra el grupo agrupado por console.group para el circulo

// Reto - Calcular Triangulo Isoceles, me dio flojera
function calcularAlturaIsoceles(ladoTrianguloI1, ladoTrianguloI2, ladoBaseTrianguloI){

    if(ladoTrianguloI1!=ladoTrianguloI2){
        alert=("El triangulo no es Isoceles");
    }else{
        //
    }
}