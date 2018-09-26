var luis = {
  nombre: 'luis',
  apellido: 'Garcia',
  edad: 27,
  peso: 115
}
const DIAS = 365
const INCREMENTO_PESO = 0.2

console.log(`Al inicio del año ${luis.nombre} pesa ${luis.peso}Kg`);

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO

const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS; i++) {

  var random = Math.random()

  if (random < 0.25) {
    //aumenta de peso
    aumentarDePeso(luis)
  }else if (random <0.50) {
    //adelgazar
    adelgazar(luis)
  }

}

console.log(`Al final del año ${luis.nombre} pesa ${luis.peso.toFixed(1)}Kg`);
