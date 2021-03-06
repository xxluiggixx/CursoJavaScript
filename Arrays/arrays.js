var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}
// Formas de declarar un arreglo
var persona = [sacha, alan, martin, dario, vicky, paula]
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril')

//Añadir en un arreglo
meses[4]='Mayo';
meses.push('Junio'); //al final del arreglo
meses.unshift('Mes 0')//Añade al inicio del arreglo

//Eliminar un elemento de un arreglo
meses.pop();//elimina el ultimo elemente
meses.shift(); //elimina el elemento de inicio (el primero)
meses.splice(2,2); // parametros [posicion,N° Elementos a quitar]

//revertir el orden del arreglo
meses.reverse();

//Encontrar un elemento en el arreglo
console.log(meses.indexOf('Abril'));

//Unir un arreglo con otro
let arreglo1 =[1,2,3],
    arreglo2 = [9,8,7];
    console.log(arreglo1.concat.arreglo2);

//Ordenar un arreglo
const frutas = ['Platano', 'Manzana', 'Pera', 'Mandarina', 'Naranja'];
frutas.sort(); //Ordena con letras

arreglo1 =[3,9,5,88,99,1,2,4,8,9,7,33];
//Ordena numeros
arreglo1.sort(function(x,y){
  return x - y;
});
console.log(arreglo1);


for (var i = 0; i < persona.length; i++) {
  console.log(`${persona}`);
}
/**************************************************************************************************************************************************************************/
//FUNCIONES QUE SE PUEDE APLICAR SOBRE LOS ARRAYS

//funcion anonima
var personaAlta = persona.filter(funcion (persona {return persona.altura > 1.8}))
const esAlta = (persona) => persona.altura >= 1.8
//FILTER
var personasAltas = persona.filter(esAlta)
//MAP ---> genera un nuevo ARRAYS
const pasarAlturaACms = persona => ({ //esta la forma de devolver un objeto
  ...persona, //generando un nuevo objeto con el fin de no pisar a persona
    altura: persona.altura * 100
})
var personasCms = persona.map(pasarAlturaACms)
//REDUCE
const reducer = (acum, persona) => acum + persona.cantidadDeLibros
var totalDeLibros = persona.reduce(reducer, 0)
