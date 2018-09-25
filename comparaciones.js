var x=4, y= '4'

/*   == si el contenido es igual Ej. x == y --> true
    === si el tipo de dato es igual Ej. x === y --> false
*/

// con los objetos es diferente
var luis = {
  nombre: 'luis'
}
var otraPersona = {
  nombre: 'luis'
}

var terceraPersona = {
  ...luis
}

var pepe=luis  // unico caso que sea True --> apunta a la misma posicion de memoria RAM
