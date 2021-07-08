// CONSTANTESS

const conservador = 'conservador';
const moderado = 'moderado';
const crecimiento = 'crecimiento';

const cortoPlazo = 'corto';
const medianoPlazo = 'mediano';
const largoPlazo = 'largo';
let fondoSeleccionado = '';
let plazoSeleccionado = '';

// ENTRADA 1
let entrada1 = prompt(`Seleccione el tipo de fondo (${conservador}, ${moderado}, ${crecimiento})`);


// ENTRADA 2
let entrada2 = prompt(`Seleccione el plazo (${cortoPlazo}, ${medianoPlazo}, ${largoPlazo})`);



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

// COMPROBACION CONSOLA
console.log(fondoSeleccionado);
console.log(plazoSeleccionado);

// FUNCIÓN 1
function crearUI (fondo, plazo) {
  console.log('UI para ' + fondo + ' ' + plazo);
}

// INICIALIZACION
crearUI(fondoSeleccionado, plazoSeleccionado);








