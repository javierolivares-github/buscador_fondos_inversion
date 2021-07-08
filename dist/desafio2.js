// CONSTANTESS

const conservador = 'conservador';
const moderado = 'moderado';
const crecimiento = 'crecimiento';

const cortoPlazo = 'corto';
const medianoPlazo = 'mediano';
const largoPlazo = 'largo';


// ENTRADA 1
let entrada1 = prompt(`Seleccione el tipo de fondo (${conservador}, ${moderado}, ${crecimiento})`);
let fondoSeleccionado = '';


// SWITCH 1
switch(entrada1){
  case "conservador":
    fondoSeleccionado = 'conservador';
    alert('El tipo de fondo seleccionado es conservador');
    break;
  case "moderado":
    fondoSeleccionado = 'moderado';
    alert('El tipo de fondo seleccionado es moderado');
    break;
  case "crecimiento":
    fondoSeleccionado = 'crecimiento';
    alert('El tipo de fondo seleccionado es crecimiento');
    break;
  default:
    entrada1 = prompt(`Seleccione el tipo de fondo (${conservador}, ${moderado}, ${crecimiento})`);
}


// ENTRADA 2
let entrada2 = prompt(`Seleccione el plazo (${cortoPlazo}, ${medianoPlazo}, ${largoPlazo})`);
let plazoSeleccionado = '';

// SWITCH 2
switch(entrada2){
  case "corto":
    plazoSeleccionado = 'corto';
    alert('El plazo de la inversión seleccionado es corto');
    break;
  case "mediano":
    plazoSeleccionado = 'mediano';
    alert('El plazo de la inversión seleccionado es mediano');
    break;
  case "largo":
    plazoSeleccionado = 'largo';
    alert('El plazo de la inversión seleccionado es largo');
    break;
  default:
    entrada2 = prompt(`Seleccione el plazo (${cortoPlazo}, ${medianoPlazo}, ${largoPlazo})`);
}


// SALIDA CONSOLA
console.log(`${fondoSeleccionado}`);
console.log(`${plazoSeleccionado}`);




