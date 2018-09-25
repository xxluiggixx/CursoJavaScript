var persona = {
  nombre: 'Luis',
  apellido: 'Garcia',
  edad: 27
}

function imprimirNombre({nombre, edad}) {
  console.log(`Hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años`);
}

imprimirNombre(persona)
imprimirNombre({nombre:'Jose'})
/* *********************************************************************************************/
function cumpleanos(persona) {
  return{
    ...persona,
      edad: persona.edad += 1
  }
}
