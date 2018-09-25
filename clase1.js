/* console.log('Hola mundo!');
var nombre = 'PBT'
console.log('mi nombre es '+ nombre); */

var nombre = 'Luis', apellido = 'Garcia'

console.log('Bienvenido '+ nombre.toUpperCase()+' '+ apellido.toUpperCase());

//El método slice() extrae una sección de una cadena y devuelve una cadena nueva
//CharAt -> busca el caracter en la posicion "X", empieza en 0 y desde atras con -1
console.log('la ultima letra de mi nombre es ' + nombre.slice(-1).toUpperCase()+ ' y de mi apillido es '+ apellido.slice(-1).toUpperCase());
// para interpolar ``
console.log(`${nombre.toUpperCase()} ${apellido.toUpperCase()}`);
