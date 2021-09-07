// VARIABLES
const perfiles = document.querySelectorAll('.perfil');
const plazos = document.querySelectorAll('.plazo');
const btnBuscar = $('#btnBuscar');
const URLJSON = "./bdFondos.json";
const perfilLocal = localStorage.getItem('perfil');
const plazoLocal = localStorage.getItem('plazo');


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


// FUNCIONES
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


// Función obtener los fondos con un perfil Conservador y un plazo menor o igual a 1 año
function obtenerConservadorCorto() {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      const bdFondos = respuesta;
      
      // Filtrando
      let fondosConservadorCorto = bdFondos
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
  });
}

// Función obtener los fondos con un perfil Conservador y un plazo mayor a 1 año y menor a 3 años
function obtenerConservadorMediano() {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      const bdFondos = respuesta;
  
      // Filtrando
      let fondosConservadorMediano = bdFondos
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
  });
}


// Función obtener los fondos con un perfil Conservador y un plazo mayor o igual a 3 años
function obtenerConservadorLargo() {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      const bdFondos = respuesta;
      
      // Filtrando
      let fondosConservadorLargo = bdFondos
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
  });
}


// Función obtener los fondos con un perfil Moderado y un plazo Menor o Igual a 1 año
function obtenerModeradoCorto() {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      const bdFondos = respuesta; 

      // Filtrando
      let fondosModeradoCorto = bdFondos
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
  });
}


// Función obtener los fondos con un perfil Moderado y un plazo Mayor o Igual a 1 año y Menor o Igual a 3 años
function obtenerModeradoMediano() {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      const bdFondos = respuesta;

      // Filtrando
      let fondosModeradoMediano = bdFondos
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
  });
}


// Función obtener los fondos con un perfil Moderado y un plazo mayor o igual a 3 años
function obtenerModeradoLargo() {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      const bdFondos = respuesta;

      // Filtrando
      let fondosModeradoLargo = bdFondos
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
  });
}


// Función obtener los fondos con un perfil Agresivo y un plazo Menor o Igual a 1 año
function obtenerAgresivoCorto() {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      const bdFondos = respuesta;

      // Filtrando
      let fondosAgresivoCorto = bdFondos
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
  });
}


// Función obtener los fondos con un perfil Agresivo y un plazo Mayor o Igual a 1 año y Menor o Igual a 3 años
function obtenerAgresivoMediano() {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      const bdFondos = respuesta;

      // Filtrando
      let fondosAgresivoMediano = bdFondos
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
  });
}


// Función obtener los fondos con un perfil Moderado y un plazo mayor o igual a 3 años
function obtenerAgresivoLargo() {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      const bdFondos = respuesta;
      
      // Filtrando
      let fondosAgresivoLargo = bdFondos
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
  });
}


// Función obtener un mensaje de fallo
function mensajeError() {
  // Creando un mensaje de fallo para el usuario
  let mensajeError = `
    <p style="color:red;">Lo sentimos no hay fondos para esta combinación. Prueba con una combinación diferente.</p>
  `
  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = mensajeError;
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
    obtenerConservadorLargo();
  }
  else if (perfilU === "moderado" && plazoU === "corto") {
    obtenerModeradoCorto();
  }
  else if (perfilU === "moderado" && plazoU === "mediano") {
    obtenerModeradoMediano();
  }
  else if (perfilU === "moderado" && plazoU === "largo") {
    obtenerModeradoLargo();
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
    mensajeError();
  }
}

// Función para recuperar el check
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












