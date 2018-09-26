var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var persona = [sacha, alan, martin, dario, vicky, paula]


for (var i = 0; i < persona.length; i++) {
  console.log(`${persona}`);
}
//funcion anonima
var personaAlta = persona.filter(funcion (persona {return persona.altura > 1.8}))
const esAlta = (persona) => persona.altura >= 1.8
var personasAltas = persona.filter(esAlta)


/**************************************************************************************************************************************************************************/
//FUNCIONES QUE SE PUEDE APLICAR SOBRE LOS ARRAYS
