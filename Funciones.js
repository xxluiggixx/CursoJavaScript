var nombre = 'Luis'
var edad = 27

function imprimirEdad(n, e) {
  console.log(`${n} tiene ${e} años`);
}

imprimirEdad()


//Declaracion de funciones
function saludar(nombre = 'Visitante' /*Cuando no envio parametro*/) {
	console.log(`Hola ${nombre}`);
}
/* 	Funcion: Devuelve las 4 operaciones
basicas, redondeando en un decimal
la division.
*/
function operaciones(n1,n2){
	console.log( ` Suma: ${n1+n2} ` )
	console.log( ` Resta: ${n1-n2} ` )
	console.log( ` Multiplicacion: ${n1*n2} ` )
	console.log( ` Division: ${Math.round((n1/n2)*100)/100} `)
}
//llamar funcion
saludar('Marcos');

//function expresion
const suma = (a =3,b=4) => {
	return a + b;
}
suma();
//Snipped "nfn"
const name = (params) => {
	
}

//Function IIFE
(function () {
    // código aquí
})();

(function(){
	console.log('Creando un IIFE');
})();

/*Metodos de propiedad
	Cuando una función se pone dentro de un objeto
*/
	const musica = {
		reproducir: function(id){
			console.log(`Reproducioendo canción id ${id}`);
		},
		pausar: function(){
			console.log(`Pause a la música`);
		}
	}
	musica.reproducir(30);
	musica.pausar();
//Los metodos también pueden guardarse/ crearse fuera del objeto
musica.borrar = function(id){
	console.log(`Borrando la canción con el ID: ${id}`);
}
	musica.borrar(40);