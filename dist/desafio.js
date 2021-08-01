// Obteneniendo elementos
const perfilesDeRiesgo = document.querySelectorAll('.perfil');
const plazosDeInversion = document.querySelectorAll('.plazo');
const botonBuscar = document.getElementById('btnBuscar');


// Función constructora de objetos
function FondoModelo (nombre, moneda, perfil, plazoRecomendado) {
  this.nombre = nombre;
  this.moneda = moneda;
  this.perfil = perfil;
  this.plazoRecomendado = plazoRecomendado;
  this.obtenerInfo = function () {
    console.log(
      "El objetivo del Fondo " + this.nombre + " es canalizar el ahorro de las personas naturales y jurídicas, para maximizar el retorno de la inversión en los instrumentos indicados en la política de inversión del Fondo." 
      + " La moneda en la cuál se tranza este Fondo es " + this.moneda + "."
      + " Este Fondo esta recomendado para personas con un perfil de inversión " + this.perfil + "."
      + " El plazo recomendable para este Fondo es de al menos " + this.plazoRecomendado + " día(s)."
    )
  }
}

// Creando Objetos
const fondo1 = new FondoModelo("LarrainVial Cash", "Pesos", "Conservador", 1);
const fondo2 = new FondoModelo("LarrainVial Ahorro Dolar", "Dolar", "Moderado", 90);
const fondo3 = new FondoModelo("LarrainVial Ahorro Plazo", "Pesos", "Conservador", 30);
const fondo4 = new FondoModelo("LarrainVial Ahorro Capital", "Pesos", "Conservador", 90);
const fondo5 = new FondoModelo("LarrainVial Ahorro Corporativo", "Pesos", "Moderado", 365);
const fondo6 = new FondoModelo("LarrainVial Ahorro Estrategico", "Pesos", "Conservador", 365);
const fondo7 = new FondoModelo("LarrainVial Ahorro Dinamico", "Pesos", "Moderado", 365);
const fondo8 = new FondoModelo("LarrainVial Defensiva Dolar", "Dolar", "Moderado", 365);
const fondo9 = new FondoModelo("LarrainVial Bonos Latam", "Dolar", "Moderado", 365);
const fondo10 = new FondoModelo("LarrainVial Baleanceado Conservador", "Pesos", "Conservador", 365);
const fondo11 = new FondoModelo("LarrainVial Baleanceado Moderado", "Pesos", "Moderado", 365);
const fondo12 = new FondoModelo("LarrainVial Baleanceado Crecimiento", "Pesos", "Agresivo", 365);
const fondo13 = new FondoModelo("LarrainVial Dinamico Agresivo", "Pesos", "Agresivo", 1095);
const fondo14 = new FondoModelo("LarrainVial Dinamico Balanceado", "Pesos", "Moderado", 365);
const fondo15 = new FondoModelo("LarrainVial Dinamico Conservador", "Pesos", "Conservador", 180);
const fondo16 = new FondoModelo("LarrainVial Dinamico Crecimiento", "Pesos", "Agresivo", 730);
const fondo17 = new FondoModelo("LarrainVial Dinamico Moderado", "Pesos", "Moderado", 270);
const fondo18 = new FondoModelo("LarrainVial Portafolio Lider", "Pesos", "Moderado", 365);
const fondo19 = new FondoModelo("LarrainVial Protección", "Pesos", "Moderado", 365);
const fondo20 = new FondoModelo("LarrainVial Estados Unidos", "Dolar", "Agresivo", 730);
const fondo21 = new FondoModelo("LarrainVial Europa", "Dolar", "Agresivo", 1095);
const fondo22 = new FondoModelo("LarrainVial Asia", "Dolar", "Agresivo", 730);
const fondo23 = new FondoModelo("LarrainVial Latinoamericano", "Dolar", "Agresivo", 1095);
const fondo24 = new FondoModelo("LarrainVial Enfoque", "Pesos", "Agresivo", 730);


// Guardando los objetos creados en un array
const fondos = [fondo1, fondo2, fondo3, fondo4, fondo5, fondo6, fondo7, fondo8, fondo9, fondo10, fondo11, fondo12, fondo13, fondo14, fondo15, fondo16, fondo17, fondo18, fondo19, fondo20, fondo21, fondo22, fondo23, fondo24];


// ENTRADAS
let entradaPerfilUsuarioValor = function () {
  let perfil;

  perfilesDeRiesgo.forEach(perfilRiesgo => {
    if(perfilRiesgo.checked) {
      perfil = perfilRiesgo.value;
    }
  });

  return perfil;
}


let entradaPlazoInversionValor = function () {
  let plazo;

  plazosDeInversion.forEach(plazoInversion => {
    if(plazoInversion.checked) {
      plazo = plazoInversion.value;
    }
  });

  return plazo;
}

// EVENTO
botonBuscar.addEventListener('click', buscarFondoSegunEleccionUsuario);


// Función obtener todos los fondos
function obtenerNombreTodosLosFondos () {
  // Salida UI
  const contenedorFondos = document.getElementById('contenedorFondos');

  fondos.forEach(fondo => {
    let contenedorFondo = document.createElement('div');
    contenedorFondo.className = 'fondo';
    contenedorFondo.innerText = `${fondo.nombre}`;

    contenedorFondos.appendChild(contenedorFondo);
  });
}


// Función obtener los fondos con perfil Conservador y un plazo menor o igual a 1 año
function obtenerFondosConservadorMenorIgual1Año() {
  // Filtro
  let fondosConservadorMenorIgual1Año = fondos
    .filter(fondo => fondo.perfil === "Conservador")
    .filter(fondo => fondo.plazoRecomendado <= 365);

  // Salida UI
  const contenedorFondos = document.getElementById('contenedorFondos');

  fondosConservadorMenorIgual1Año.forEach(fondo => {
    let contenedorFondo = document.createElement('div');
    contenedorFondo.className = 'fondo';
    contenedorFondo.innerText = `${fondo.nombre}`;

    contenedorFondos.appendChild(contenedorFondo);
  });
}


// Función obtener los fondos con perfil Conservador y un plazo  mayores a 1 y menores a 3 años
function obtenerfondosConservadorMayorIgual1AñoMenorIgual3Años() {
  // Filtro
  let fondosConservadorMayorIgual1AñoMenorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "Conservador")
    .filter(fondo => fondo.plazoRecomendado >= 365 && fondo.plazoRecomendado <= 1095);

  // Salida UI
  const contenedorFondos = document.getElementById('contenedorFondos');

  fondosConservadorMayorIgual1AñoMenorIgual3Años.forEach(fondo => {
    let contenedorFondo = document.createElement('div');
    contenedorFondo.className = 'fondo';
    contenedorFondo.innerText = `${fondo.nombre}`;

    contenedorFondos.appendChild(contenedorFondo);
  });
}


// Función obtener los fondos con perfil Conservador y un plazo mayor o igual a 3 años
function obtenerfondosConservadorMayorIgual3Años() {
  // Filtro
  let fondosConservadorMayorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "Conservador")
    .filter(fondo => fondo.plazoRecomendado >= 1095);

  // Salida UI
  const contenedorFondos = document.getElementById('contenedorFondos');

  fondosConservadorMayorIgual3Años.forEach(fondo => {
    let contenedorFondo = document.createElement('div');
    contenedorFondo.className = 'fondo';
    contenedorFondo.innerText = `${fondo.nombre}`;

    contenedorFondos.appendChild(contenedorFondo);
  });
}


// Función obtener los fondos con perfil Moderado y un plazo Menor o Igual a 1 año
function obtenerFondosModeradoMenorIgual1Año() {
  // Filtro
  let fondosModeradoMenorIgual1Año = fondos
    .filter(fondo => fondo.perfil === "Moderado")
    .filter(fondo => fondo.plazoRecomendado <= 365);

  // Salida UI
  const contenedorFondos = document.getElementById('contenedorFondos');

  fondosModeradoMenorIgual1Año.forEach(fondo => {
    let contenedorFondo = document.createElement('div');
    contenedorFondo.className = 'fondo';
    contenedorFondo.innerText = `${fondo.nombre}`;

    contenedorFondos.appendChild(contenedorFondo);
  });
}


// Función obtener los fondos con perfil Moderado y un plazo Mayor o Igual a 1 año y Menor o Igual a 3 años
function obtenerfondosModeradoMayorIgual1AñoMenorIgual3Años() {
  // Filtro
  let fondosModeradoMayorIgual1AñoMenorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "Moderado")
    .filter(fondo => fondo.plazoRecomendado >= 365 && fondo.plazoRecomendado <= 1095);

  // Salida UI
  const contenedorFondos = document.getElementById('contenedorFondos');

  fondosModeradoMayorIgual1AñoMenorIgual3Años.forEach(fondo => {
    let contenedorFondo = document.createElement('div');
    contenedorFondo.className = 'fondo';
    contenedorFondo.innerText = `${fondo.nombre}`;

    contenedorFondos.appendChild(contenedorFondo);
  });
}


// Función obtener los fondos con perfil Moderado y un plazo mayor o igual a 3 años
function obtenerfondosModeradoMayorIgual3Años() {
  // Filtro
  let fondosModeradoMayorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "Moderado")
    .filter(fondo => fondo.plazoRecomendado >= 1095);

  // Salida UI
  const contenedorFondos = document.getElementById('contenedorFondos');

  fondosModeradoMayorIgual3Años.forEach(fondo => {
    let contenedorFondo = document.createElement('div');
    contenedorFondo.className = 'fondo';
    contenedorFondo.innerText = `${fondo.nombre}`;

    contenedorFondos.appendChild(contenedorFondo);
  });
}


// Función obtener los fondos con perfil Agresivo y un plazo Menor o Igual a 1 año
function obtenerFondosAgresivoMenorIgual1Año() {
  // Filtro
  let fondosAgresivoMenorIgual1Año = fondos
    .filter(fondo => fondo.perfil === "Agresivo")
    .filter(fondo => fondo.plazoRecomendado <= 365);

  // Salida UI
  const contenedorFondos = document.getElementById('contenedorFondos');

  fondosAgresivoMenorIgual1Año.forEach(fondo => {
    let contenedorFondo = document.createElement('div');
    contenedorFondo.className = 'fondo';
    contenedorFondo.innerText = `${fondo.nombre}`;

    contenedorFondos.appendChild(contenedorFondo);
  });
}


// Función obtener los fondos con perfil Agresivo y un plazo Mayor o Igual a 1 año y Menor o Igual a 3 años
function obtenerfondosAgresivoMayorIgual1AñoMenorIgual3Años() {
  // Filtro
  let fondosAgresivoMayorIgual1AñoMenorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "Agresivo")
    .filter(fondo => fondo.plazoRecomendado >= 365 && fondo.plazoRecomendado <= 1095);

  // Salida UI
  const contenedorFondos = document.getElementById('contenedorFondos');

  fondosAgresivoMayorIgual1AñoMenorIgual3Años.forEach(fondo => {
    let contenedorFondo = document.createElement('div');
    contenedorFondo.className = 'fondo';
    contenedorFondo.innerText = `${fondo.nombre}`;

    contenedorFondos.appendChild(contenedorFondo);
  });
}


// Función obtener los fondos con perfil Moderado y un plazo mayor o igual a 3 años
function obtenerfondosAgresivoMayorIgual3Años() {
  // Filtro
  let fondosAgresivoMayorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "Agresivo")
    .filter(fondo => fondo.plazoRecomendado >= 1095);

  // Salida UI
  const contenedorFondos = document.getElementById('contenedorFondos');

  fondosAgresivoMayorIgual3Años.forEach(fondo => {
    let contenedorFondo = document.createElement('div');
    contenedorFondo.className = 'fondo';
    contenedorFondo.innerText = `${fondo.nombre}`;

    contenedorFondos.appendChild(contenedorFondo);
  });
}


// Función obtener un mensaje de fallo
function mostrarUnMensajeDeFallo() {
  // Salida UI
  const contenedorFondos = document.getElementById('contenedorFondos');

  let mensajeFallo = document.createElement('p');
  mensajeFallo.innerText = `Lo sentimos no hay fondos para esta categoría. Pruebe con una categoría diferente.`;

  contenedorFondos.appendChild(mensajeFallo);
}




// Función obtener los fondos segun la combinación elegida por el usuario.
function buscarFondoSegunEleccionUsuario() {
  if (entradaPerfilUsuarioValor() === "conservador" && entradaPlazoInversionValor() === "corto") {
    obtenerFondosConservadorMenorIgual1Año();
  }
  else if (entradaPerfilUsuarioValor() === "conservador" && entradaPlazoInversionValor() === "mediano") {
    obtenerfondosConservadorMayorIgual1AñoMenorIgual3Años();
  }
  else if (entradaPerfilUsuarioValor() === "conservador" && entradaPlazoInversionValor() === "largo") {
    mostrarUnMensajeDeFallo();
  }
  else if (entradaPerfilUsuarioValor() === "moderado" && entradaPlazoInversionValor() === "corto") {
    obtenerFondosModeradoMenorIgual1Año();
  }
  else if (entradaPerfilUsuarioValor() === "moderado" && entradaPlazoInversionValor() === "mediano") {
    obtenerfondosModeradoMayorIgual1AñoMenorIgual3Años();
  }
  else if (entradaPerfilUsuarioValor() === "moderado" && entradaPlazoInversionValor() === "largo") {
    mostrarUnMensajeDeFallo();
  }
  else if (entradaPerfilUsuarioValor() === "agresivo" && entradaPlazoInversionValor() === "corto") {
    obtenerFondosAgresivoMenorIgual1Año();
  }
  else if (entradaPerfilUsuarioValor() === "agresivo" && entradaPlazoInversionValor() === "mediano") {
    obtenerfondosAgresivoMayorIgual1AñoMenorIgual3Años();
  }
  else if (entradaPerfilUsuarioValor() === "agresivo" && entradaPlazoInversionValor() === "largo") {
    obtenerfondosAgresivoMayorIgual3Años();
  }
  else {
    mostrarUnMensajeDeFallo();
  }
}













