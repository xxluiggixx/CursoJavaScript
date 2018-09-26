var luis = {
  nombre: 'luis',
  apellido: 'Garcia',
  edad: 27,
  peso: 115
}
const DIAS = 365
const INCREMENTO_PESO = 0.3
const KILOS = 3

console.log(`Al inicio del año ${luis.nombre} pesa ${luis.peso}Kg`);

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = luis.peso - KILOS

var dias = 0
while (luis.peso > META) {

  if (comeMucho()) {
      //aumentar de peso
      aumentarDePeso(luis)
  }
  if (realizaDeporte()) {
    //adelgazar
    adelgazar(luis)
  }
  dias += 1
}

console.log(`${luis.nombre} tardo ${dias} para adelgazar ${KILOS} Kg`);
