class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre // Definir  atributos del objeto
    this.apellido = apellido
    this.altura = altura
  }
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }
}
//HERENCIA
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar() {
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`);
  }
}
/*******************************************************************************************************************************************************************/
//Parte vieja!
function Persona(nombre, apellido, altura) {
  this.nombre = nombre // Definir  atributos del objeto
  this.apellido = apellido
  this.altura = altura
}
//CREAR UNA FUNCION DEL OBJETO PERSONA --> {OBJETO}.prototype.{NOMBRE DE LA FUNCION}
Persona.prototype.saludar = function () {

}

Persona.prototype.soyAlto = function () {
   if (this.altura > 1.8) {
     console.log('Soy alto');
   }else {
     console.log('Soy bajo');
   }
 }
function Desarrollador
}

Desarrollador.prototype.saludar = function () {

}
var luis = new Persona('Luis','Garcia',1.81)
var ana = new Persona('Ana', 'Salado', 1.7)
var belen = new Persona ('Belen', 'Jeropa', 1.95)
