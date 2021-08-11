// Obteneniendo elementos del DOM
const perfilesDeRiesgo = document.querySelectorAll('.perfil');
const plazosDeInversion = document.querySelectorAll('.plazo');
const botonBuscar = $('#btnBuscar');



// Creando una estructura de datos iniciales
const fondosPantallaInicial = [
  {id: 1, nombre: "LarrainVial Cash", moneda: "Pesos", perfil: "Conservador", plazoRecomendado: 1},
  {id: 3, nombre: "LarrainVial Ahorro Plazo", moneda: "Pesos", perfil: "Conservador", plazoRecomendado: 30},
  {id: 4, nombre: "LarrainVial Ahorro Capital", moneda: "Pesos", perfil: "Conservador", plazoRecomendado: 90},
  {id: 6, nombre: "LarrainVial Ahorro Estrategico", moneda: "Pesos", perfil: "Conservador", plazoRecomendado: 365},
  {id: 10, nombre: "LarrainVial Baleanceado Conservador", moneda: "Pesos", perfil: "Conservador", plazoRecomendado: 365},
  {id: 15, nombre: "LarrainVial Dinamico Conservador", moneda: "Pesos", perfil: "Conservador", plazoRecomendado: 180}
]


// Guardando la estructura de datos iniciales en el local storage
localStorage.setItem("listadoFondosPantallaInicial", JSON.stringify(fondosPantallaInicial));


// Recuperando la estructura de datos iniciales desde el local stotage
const listadoFondosPantallaInicial = JSON.parse(localStorage.getItem("listadoFondosPantallaInicial"));


// Creando una función que cree una UI para los datos iniciales provenientes del local storage
function crearUIDatosIniciales () {
  let plantillaDatosIniciales = '';

  listadoFondosPantallaInicial.forEach(fondo => {
    plantillaDatosIniciales += `<div class="fondo">${fondo.nombre}</div>`
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = plantillaDatosIniciales;
}


// Activando la funcion crear UI al cargar la página
$('document').ready(crearUIDatosIniciales)


// Creando una función constructora de objetos
function FondoModelo (id, nombre, moneda, perfil, plazoRecomendado) {
  this.id = id;
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
const fondo1 = new FondoModelo( 1, "LarrainVial Cash", "Pesos", "Conservador", 1);
const fondo2 = new FondoModelo( 2, "LarrainVial Ahorro Dolar", "Dolar", "Moderado", 90);
const fondo3 = new FondoModelo( 3, "LarrainVial Ahorro Plazo", "Pesos", "Conservador", 30);
const fondo4 = new FondoModelo( 4, "LarrainVial Ahorro Capital", "Pesos", "Conservador", 90);
const fondo5 = new FondoModelo( 5, "LarrainVial Ahorro Corporativo", "Pesos", "Moderado", 365);
const fondo6 = new FondoModelo( 6, "LarrainVial Ahorro Estrategico", "Pesos", "Conservador", 365);
const fondo7 = new FondoModelo( 7, "LarrainVial Ahorro Dinamico", "Pesos", "Moderado", 365);
const fondo8 = new FondoModelo( 8, "LarrainVial Defensiva Dolar", "Dolar", "Moderado", 365);
const fondo9 = new FondoModelo( 9, "LarrainVial Bonos Latam", "Dolar", "Moderado", 365);
const fondo10 = new FondoModelo( 10, "LarrainVial Baleanceado Conservador", "Pesos", "Conservador", 365);
const fondo11 = new FondoModelo( 11, "LarrainVial Baleanceado Moderado", "Pesos", "Moderado", 365);
const fondo12 = new FondoModelo( 12, "LarrainVial Baleanceado Crecimiento", "Pesos", "Agresivo", 365);
const fondo13 = new FondoModelo( 13, "LarrainVial Dinamico Agresivo", "Pesos", "Agresivo", 1095);
const fondo14 = new FondoModelo( 14, "LarrainVial Dinamico Balanceado", "Pesos", "Moderado", 365);
const fondo15 = new FondoModelo( 15, "LarrainVial Dinamico Conservador", "Pesos", "Conservador", 180);
const fondo16 = new FondoModelo( 16, "LarrainVial Dinamico Crecimiento", "Pesos", "Agresivo", 730);
const fondo17 = new FondoModelo( 17, "LarrainVial Dinamico Moderado", "Pesos", "Moderado", 270);
const fondo18 = new FondoModelo( 18, "LarrainVial Portafolio Lider", "Pesos", "Moderado", 365);
const fondo19 = new FondoModelo( 19, "LarrainVial Protección", "Pesos", "Moderado", 365);
const fondo20 = new FondoModelo( 20, "LarrainVial Estados Unidos", "Dolar", "Agresivo", 730);
const fondo21 = new FondoModelo( 21, "LarrainVial Europa", "Dolar", "Agresivo", 1095);
const fondo22 = new FondoModelo( 22, "LarrainVial Asia", "Dolar", "Agresivo", 730);
const fondo23 = new FondoModelo( 23, "LarrainVial Latinoamericano", "Dolar", "Agresivo", 1095);
const fondo24 = new FondoModelo( 24, "LarrainVial Enfoque", "Pesos", "Agresivo", 730);


// Guardando los objetos creados en un array
const fondos = [fondo1, fondo2, fondo3, fondo4, fondo5, fondo6, fondo7, fondo8, fondo9, fondo10, fondo11, fondo12, fondo13, fondo14, fondo15, fondo16, fondo17, fondo18, fondo19, fondo20, fondo21, fondo22, fondo23, fondo24];


// Guardando la entrada del usuario proveniente de los input tipo radio
let entradaPerfilUsuarioValor = function () {
  let perfil;

  perfilesDeRiesgo.forEach(perfilRiesgo => {
    if(perfilRiesgo.checked) {
      perfil = perfilRiesgo.value;
    }
  });

  return perfil;
}

// Guardando la entrada del usuario proveniente de los input tipo radio
let entradaPlazoInversionValor = function () {
  let plazo;

  plazosDeInversion.forEach(plazoInversion => {
    if(plazoInversion.checked) {
      plazo = plazoInversion.value;
    }
  });

  return plazo;
}

// Activando la función buscar fondos según elección de usuario al hacer click en el botón buscar
botonBuscar.on('click', buscarFondoSegunEleccionUsuario);


// Función obtener los fondos con un perfil Conservador y un plazo menor o igual a 1 año
function obtenerFondosConservadorMenorIgual1Año() {
  // Filtrando
  let fondosConservadorMenorIgual1Año = fondos
    .filter(fondo => fondo.perfil === "Conservador")
    .filter(fondo => fondo.plazoRecomendado <= 365);

   // Creando una plantilla para cada fondo filtrado
   let plantillafondosConservadorMenorIgual1Año = '';
  
   fondosConservadorMenorIgual1Año.forEach(fondo => {
     plantillafondosConservadorMenorIgual1Año += `
       <div class="fondo">${fondo.nombre}</div>
     `;
   });
 
   // Creando una salida en pantalla
   document.getElementById('contenedorFondos').innerHTML = plantillafondosConservadorMenorIgual1Año;
}


// Función obtener los fondos con un perfil Conservador y un plazo mayor a 1 año y menor a 3 años
function obtenerfondosConservadorMayorIgual1AñoMenorIgual3Años() {
  // Filtrando
  let fondosConservadorMayorIgual1AñoMenorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "Conservador")
    .filter(fondo => fondo.plazoRecomendado >= 365 && fondo.plazoRecomendado <= 1095);

  // Creando una plantilla para cada fondo filtrado
  let plantillafondosConservadorMayorIgual1AñoMenorIgual3Años = '';
  
  fondosConservadorMayorIgual1AñoMenorIgual3Años.forEach(fondo => {
    plantillafondosConservadorMayorIgual1AñoMenorIgual3Años += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = plantillafondosConservadorMayorIgual1AñoMenorIgual3Años;
}


// Función obtener los fondos con un perfil Conservador y un plazo mayor o igual a 3 años
function obtenerfondosConservadorMayorIgual3Años() {
  // Filtrando
  let fondosConservadorMayorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "Conservador")
    .filter(fondo => fondo.plazoRecomendado >= 1095);

   // Creando una plantilla para cada fondo filtrado
   let plantillafondosConservadorMayorIgual3Años = '';
  
   fondosConservadorMayorIgual3Años.forEach(fondo => {
     plantillafondosConservadorMayorIgual3Años += `
       <div class="fondo">${fondo.nombre}</div>
     `;
   });
 
   // Creando una salida en pantalla
   document.getElementById('contenedorFondos').innerHTML = plantillafondosConservadorMayorIgual3Años;
}


// Función obtener los fondos con un perfil Moderado y un plazo Menor o Igual a 1 año
function obtenerFondosModeradoMenorIgual1Año() {
  // Filtrando
  let fondosModeradoMenorIgual1Año = fondos
    .filter(fondo => fondo.perfil === "Moderado")
    .filter(fondo => fondo.plazoRecomendado <= 365);

  // Creando una plantilla para cada fondo filtrado
  let plantillafondosModeradoMenorIgual1Año = '';
  
  fondosModeradoMenorIgual1Año.forEach(fondo => {
    plantillafondosModeradoMenorIgual1Año += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = plantillafondosModeradoMenorIgual1Año;
}


// Función obtener los fondos con un perfil Moderado y un plazo Mayor o Igual a 1 año y Menor o Igual a 3 años
function obtenerfondosModeradoMayorIgual1AñoMenorIgual3Años() {
  // Filtrando
  let fondosModeradoMayorIgual1AñoMenorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "Moderado")
    .filter(fondo => fondo.plazoRecomendado >= 365 && fondo.plazoRecomendado <= 1095);

  // Creando una plantilla para cada fondo filtrado
  let plantillafondosModeradoMayorIgual1AñoMenorIgual3Años = '';
  
  fondosModeradoMayorIgual1AñoMenorIgual3Años.forEach(fondo => {
    plantillafondosModeradoMayorIgual1AñoMenorIgual3Años += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = plantillafondosModeradoMayorIgual1AñoMenorIgual3Años;
}


// Función obtener los fondos con un perfil Moderado y un plazo mayor o igual a 3 años
function obtenerfondosModeradoMayorIgual3Años() {
  // Filtrando
  let fondosModeradoMayorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "Moderado")
    .filter(fondo => fondo.plazoRecomendado >= 1095);

  // Creando una plantilla para cada fondo filtrado
  let plantillafondosModeradoMayorIgual3Años = '';
  
  fondosModeradoMayorIgual3Años.forEach(fondo => {
    plantillafondosModeradoMayorIgual3Años += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = plantillafondosModeradoMayorIgual3Años;
}


// Función obtener los fondos con un perfil Agresivo y un plazo Menor o Igual a 1 año
function obtenerFondosAgresivoMenorIgual1Año() {
  // Filtrando
  let fondosAgresivoMenorIgual1Año = fondos
    .filter(fondo => fondo.perfil === "Agresivo")
    .filter(fondo => fondo.plazoRecomendado <= 365);

  // Creando una plantilla para cada fondo filtrado
  let plantillafondosAgresivoMenorIgual1Año = '';
  
  fondosAgresivoMenorIgual1Año.forEach(fondo => {
    plantillafondosAgresivoMenorIgual1Año += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = plantillafondosAgresivoMenorIgual1Año;
}


// Función obtener los fondos con un perfil Agresivo y un plazo Mayor o Igual a 1 año y Menor o Igual a 3 años
function obtenerfondosAgresivoMayorIgual1AñoMenorIgual3Años() {
  // Filtrando
  let fondosAgresivoMayorIgual1AñoMenorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "Agresivo")
    .filter(fondo => fondo.plazoRecomendado >= 365 && fondo.plazoRecomendado <= 1095);

  // Creando una plantilla para cada fondo filtrado
  let plantillafondosAgresivoMayorIgual1AñoMenorIgual3Años = '';
  
  fondosAgresivoMayorIgual1AñoMenorIgual3Años.forEach(fondo => {
    plantillafondosAgresivoMayorIgual1AñoMenorIgual3Años += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = plantillafondosAgresivoMayorIgual1AñoMenorIgual3Años;
}


// Función obtener los fondos con un perfil Moderado y un plazo mayor o igual a 3 años
function obtenerfondosAgresivoMayorIgual3Años() {
  // Filtrando
  let fondosAgresivoMayorIgual3Años = fondos
    .filter(fondo => fondo.perfil === "Agresivo")
    .filter(fondo => fondo.plazoRecomendado >= 1095);

  // Creando una plantilla para cada fondo filtrado
  let plantillafondosAgresivoMayorIgual3Años = '';
  
  fondosAgresivoMayorIgual3Años.forEach(fondo => {
    plantillafondosAgresivoMayorIgual3Años += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = plantillafondosAgresivoMayorIgual3Años;
}


// Función obtener un mensaje de fallo
function mostrarUnMensajeDeFallo() {
  // Buscando un elemento en el dom
  const contenedorFondos = document.getElementById('contenedorFondos');

  // Creando un mensaje de fallo para el usuario
  let mensajeFallo = `
    <p style="color:red;">Lo sentimos no hay fondos para esta categoría.</p>
  `
  // Creando una salida en pantalla
  contenedorFondos.innerHTML = mensajeFallo;
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













