

//En JavaScript existe un objeto llamado DATE
const diaHoy = new Date(); //Fecha actual


//Fecha en Espeficifico Mes, Dia y Año
let navidad2017= new Date('12-25-2017');
//--> Devuelve Mon Dec 25 2017

//Mes
diaHoy.getMonth();
//Dia
diaHoy.getDate();
diaHoy.getDay();
//Año
diaHoy.getFullYear();
//Minutos
diaHoy.getMinutes();
//hora
diaHoy.getHours();

//Cambiar un valor
diaHoy.setFullYear(2016);
