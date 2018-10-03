const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain : true}
const onPeopleRespones = function (data){
  console.log(`hola, yo soy ${data.name}`);
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
  $.get(url, opts, onPeopleRespones).fail(() => {
    console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`);
  })
}

/*
* Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada.
* Lo importante es que el llamado al callback se haga a través de una función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell.
*/
function obtenerPersonajeOrden(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

  $.get(url, opts, onPeopleRespones)
  if (callback) {
    callback()
  }
}

obtenerPersonajeOrden(1, function (){
   obtenerPersonajeOrden (2, function() {
     obtenerPersonajeOrden (3, function(){
       obtenerPersonajeOrden(4, function () {

       })
     })
    })
  })
