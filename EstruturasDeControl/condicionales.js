const MAYORIA_DE_EDAD = 18 //las constantes siempre van con MAYUSCULA Y _ como nomenclatura

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
function esMayorDeEdad(persona) {
  return persona.edad>=MAYORIA_DE_EDAD
}

//Arrow Function!
//const esMayorDe18 = persona => persona.edad >= MAYORIA_DE_EDAD esto es equivalente a lo de arriba
const esMayorDe18 = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirMayodeEdad(persona) {
  if (esMayorDeEdad) {
    console.log(`${persona.nombre} es mayor de edad`);
  }else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

function permitirAcceso(persona) {
  if (!esMayorDe18(persona)) {
    console.log('ACCESO DENEGADO');
  }
}
/*
Desafio
Escribir en Arrow Function => la negacion de mayor de esMayorDeEdad
*/
const MenorDe18 = ({edad}) => !esMayorDe18(edad)

function EsMenorDe18(persona) {
  if (MenorDe18) {
    console.log(`${persona.nombre} es menor de edad`);
  }
}
