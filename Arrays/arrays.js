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

var persona = [sacha, alan, martin, dario, vicky, paula]


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
