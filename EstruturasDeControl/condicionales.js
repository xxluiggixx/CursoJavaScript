var luis = {
  nombre: 'Luis',
  apellido: 'Garcia',
  edad: 17,
  ingeniero: true,
  cocinero: false,
  cantente: false,
  dj: false,
  guitarrista: false,
  drone: true
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `);
  if (persona.ingeniero) {
    console.log('Ingeniero');
  }
  if (persona.cocinero) {
    console.log('Cocinero');
  }
  if (persona.cantante) {
    console.log('Cantante');
  }
  if (persona.dj) {
    console.log('Dj');
  }
  if (persona.guitarrista) {
    console.log('Guitarrista');
  }
  if (persona.drone) {
    console.log('Dronero');
  }
}
/*
Desafio
--> Escribir si una persona es mayor de edad o menor
*/

function imprimirMayodeEdad(persona) {
  if (persona.edad>=18) {
    console.log(`${persona.nombre} es mayor de edad`);
  }else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}
