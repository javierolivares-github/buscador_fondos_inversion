// Obteneniendo elementos del DOM
const perfiles = document.querySelectorAll('.perfil');
const plazos = document.querySelectorAll('.plazo');
const btnBuscar = $('#btnBuscar');
const perfilLocal = localStorage.getItem('perfil');
const plazoLocal = localStorage.getItem('plazo');

// Función constructora de objetos
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
let perfil = function () {
  let perfilUsuario;

  perfiles.forEach(perfil => {
    if(perfil.checked) {
      perfilUsuario = perfil.value;
    }
  });

  return perfilUsuario;
}

// Guardando la entrada del usuario proveniente de los input tipo radio
let plazo = function () {
  let plazoUsuario;

  plazos.forEach(plazo => {
    if(plazo.checked) {
      plazoUsuario = plazo.value;
    }
  });

  return plazoUsuario;
}

// GUARDAR EN LOCAL
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
const obtenerLocal = (clave) => { localStorage.getItem(clave) };

function guardarPreferencias() {
  guardarLocal('perfil', perfil());
  guardarLocal('plazo', plazo());
}


// Funciones que se activan al dar click al botón buscar
btnBuscar.click(ocultarTitulo);
btnBuscar.click(animarTitulo);
btnBuscar.click(guardarPreferencias);
btnBuscar.click(() => {
  buscarFondo(perfil(), plazo());
});

// Funciones que se activan al recargar la página
$('document').ready(animarTitulo);
$('document').ready(() => {
  buscarFondo(perfilLocal, plazoLocal);
});
$('document').ready(recuperarCheck(perfilLocal, plazoLocal));



// FUNCIONES DE BUSQUEDA, FILTRADO y CREACION DE PANTALLAS UI
// Función obtener los fondos con un perfil Conservador y un plazo menor o igual a 1 año
function obtenerConservadorCorto() {
  // Filtrando
  let fondosConservadorCorto = fondos
    .filter(fondo => fondo.perfil === "Conservador")
    .filter(fondo => fondo.plazoRecomendado <= 365);

   // Creando una plantilla para cada fondo filtrado
   let pConservadorCorto = '';
  
   fondosConservadorCorto.forEach(fondo => {
     pConservadorCorto += `
       <div class="fondo">${fondo.nombre}</div>
     `;
   });
 
   // Creando una salida en pantalla
   document.getElementById('contenedorFondos').innerHTML = pConservadorCorto;
}


// Función obtener los fondos con un perfil Conservador y un plazo mayor a 1 año y menor a 3 años
function obtenerConservadorMediano() {
  // Filtrando
  let fondosConservadorMediano = fondos
    .filter(fondo => fondo.perfil === "Conservador")
    .filter(fondo => fondo.plazoRecomendado >= 365 && fondo.plazoRecomendado <= 1095);

  // Creando una plantilla para cada fondo filtrado
  let pConservadorMediano = '';
  
  fondosConservadorMediano.forEach(fondo => {
    pConservadorMediano += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = pConservadorMediano;
}


// Función obtener los fondos con un perfil Conservador y un plazo mayor o igual a 3 años
function obtenerConservadorLargo() {
  // Filtrando
  let fondosConservadorLargo = fondos
    .filter(fondo => fondo.perfil === "Conservador")
    .filter(fondo => fondo.plazoRecomendado >= 1095);

   // Creando una plantilla para cada fondo filtrado
   let pConservadorLargo = '';
  
   fondosConservadorLargo.forEach(fondo => {
     pConservadorLargo += `
       <div class="fondo">${fondo.nombre}</div>
     `;
   });
 
   // Creando una salida en pantalla
   document.getElementById('contenedorFondos').innerHTML = pConservadorLargo;
}


// Función obtener los fondos con un perfil Moderado y un plazo Menor o Igual a 1 año
function obtenerModeradoCorto() {
  // Filtrando
  let fondosModeradoCorto = fondos
    .filter(fondo => fondo.perfil === "Moderado")
    .filter(fondo => fondo.plazoRecomendado <= 365);

  // Creando una plantilla para cada fondo filtrado
  let pModeradoCorto = '';
  
  fondosModeradoCorto.forEach(fondo => {
    pModeradoCorto += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = pModeradoCorto;
}


// Función obtener los fondos con un perfil Moderado y un plazo Mayor o Igual a 1 año y Menor o Igual a 3 años
function obtenerModeradoMediano() {
  // Filtrando
  let fondosModeradoMediano = fondos
    .filter(fondo => fondo.perfil === "Moderado")
    .filter(fondo => fondo.plazoRecomendado >= 365 && fondo.plazoRecomendado <= 1095);

  // Creando una plantilla para cada fondo filtrado
  let pModeradoMediano = '';
  
  fondosModeradoMediano.forEach(fondo => {
    pModeradoMediano += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = pModeradoMediano;
}


// Función obtener los fondos con un perfil Moderado y un plazo mayor o igual a 3 años
function obtenerModeradoLargo() {
  // Filtrando
  let fondosModeradoLargo = fondos
    .filter(fondo => fondo.perfil === "Moderado")
    .filter(fondo => fondo.plazoRecomendado >= 1095);

  // Creando una plantilla para cada fondo filtrado
  let pModeradoLargo = '';
  
  fondosModeradoLargo.forEach(fondo => {
    pModeradoLargo += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = pModeradoLargo;
}


// Función obtener los fondos con un perfil Agresivo y un plazo Menor o Igual a 1 año
function obtenerAgresivoCorto() {
  // Filtrando
  let fondosAgresivoCorto = fondos
    .filter(fondo => fondo.perfil === "Agresivo")
    .filter(fondo => fondo.plazoRecomendado <= 365);

  // Creando una plantilla para cada fondo filtrado
  let pAgresivoCorto = '';
  
  fondosAgresivoCorto.forEach(fondo => {
    pAgresivoCorto += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = pAgresivoCorto;
}


// Función obtener los fondos con un perfil Agresivo y un plazo Mayor o Igual a 1 año y Menor o Igual a 3 años
function obtenerAgresivoMediano() {
  // Filtrando
  let fondosAgresivoMediano = fondos
    .filter(fondo => fondo.perfil === "Agresivo")
    .filter(fondo => fondo.plazoRecomendado >= 365 && fondo.plazoRecomendado <= 1095);

  // Creando una plantilla para cada fondo filtrado
  let pAgresivoMediano = '';
  
  fondosAgresivoMediano.forEach(fondo => {
    pAgresivoMediano += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = pAgresivoMediano;
}


// Función obtener los fondos con un perfil Moderado y un plazo mayor o igual a 3 años
function obtenerAgresivoLargo() {
  // Filtrando
  let fondosAgresivoLargo = fondos
    .filter(fondo => fondo.perfil === "Agresivo")
    .filter(fondo => fondo.plazoRecomendado >= 1095);

  // Creando una plantilla para cada fondo filtrado
  let pAgresivoLargo = '';
  
  fondosAgresivoLargo.forEach(fondo => {
    pAgresivoLargo += `
      <div class="fondo">${fondo.nombre}</div>
    `;
  });

  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = pAgresivoLargo;
}


// Función obtener un mensaje de fallo
function mensajeFallo() {
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
function buscarFondo(perfilU, plazoU) {
  if (perfilU === "conservador" && plazoU === "corto") {
    obtenerConservadorCorto();
  }
  else if (perfilU === "conservador" && plazoU === "mediano") {
    obtenerConservadorMediano();
  }
  else if (perfilU === "conservador" && plazoU === "largo") {
    mensajeFallo();
  }
  else if (perfilU === "moderado" && plazoU === "corto") {
    obtenerModeradoCorto();
  }
  else if (perfilU === "moderado" && plazoU === "mediano") {
    obtenerModeradoMediano();
  }
  else if (perfilU === "moderado" && plazoU === "largo") {
    mensajeFallo();
  }
  else if (perfilU === "agresivo" && plazoU === "corto") {
    obtenerAgresivoCorto();
  }
  else if (perfilU === "agresivo" && plazoU === "mediano") {
    obtenerAgresivoMediano();
  }
  else if (perfilU === "agresivo" && plazoU === "largo") {
    obtenerAgresivoLargo();
  }
  else {
    mensajeFallo();
  }
}

// Función para recuperar el atributo check
function recuperarCheck (perfilRecu, plazoRecu) {
  perfiles.forEach(perfil => {
    if (perfil.value === perfilRecu) {
      perfil.setAttribute("checked", "");
    }
  })

  plazos.forEach(plazo => {
    if (plazo.value === plazoRecu) {
      plazo.setAttribute("checked", "");
    }
  })
}

// Funciones para incorporar animación al título
function animarTitulo () {
  $('#fondos_title').fadeIn()
}

function ocultarTitulo () {
  $('#fondos_title').fadeOut();
}












