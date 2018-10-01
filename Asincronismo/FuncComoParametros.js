/* Podemos pasar funciones como parametros

Valores falsy (valores falsos) en Javascript:

false

0

null

""

undefined

NaN

Los demás son valores Truthy (valores verdaderos).
https://developer.mozilla.org/es/docs/Glossary/Truthy

*/
class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre // Definir  atributos del objeto
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn){
    //var nombre = this.nombre
    //var apellido = this.apellido
    var {nombre, apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido)
    }
  }
}
//HERENCIA
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }
//aca ingresamos la funcion como parametro
  saludar(fn) {
    //var nombre = this.nombre
    //var apellido = this.apellido
    var {nombre, apellido} = this
      console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador/a`);
      if (fn) {
        fn(nombre, apellido, true)
      }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras Desarrollador/a`);
  }
}
