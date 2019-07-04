//Crear Objeto
const persona = {
  nombre: 'Luis',
  apellido: 'Garcia',
  profesion: 'Diseñador grafico',
  email: 'lgarciasaladokuhl@outlook.com',
  edad: 27,
  musica: ['Trance', 'Pop', 'Electronica'],
  hogar: {
    ciudad:'Salta',
    pais: 'Argentina'
  },
  fechaNacimiento: function(){
    return new Date().getFullYear() - this.edad;
  }
}

console.log(persona.musica[0]);

//Arreglo de OBjeto
const autos = [
  {modelo:'Mustang', motor: 6.0},
  {modelo:'Saveiro', motor: 1.6},
  {modelo:'Suran', motor: 1.6}
]
console.log(autos[0].modelo);

function imprimirNombre({nombre, edad}) {
  console.log(`Hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años`);
}

imprimirNombre(persona)
imprimirNombre({nombre:'Jose'})
/**********************************************************************************************/
function cumpleanos(persona) {
  return{
    ...persona,
      edad: persona.edad += 1
  }
}
