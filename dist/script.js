// VARIABLES
// Obtener elementos y datos
const perfiles = document.querySelectorAll('.perfil');
const plazos = document.querySelectorAll('.plazo');
const btnBuscar = $('#btnBuscar');
const URLJSON = "./bdFondos.json";
const perfilLocal = localStorage.getItem('perfil');
const plazoLocal = localStorage.getItem('plazo');

// EVENTOS
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
// Guardando el perfil seleccionado
let perfil = function () {
  let perfilUsuario;

  perfiles.forEach(perfil => {
    if(perfil.checked) {
      perfilUsuario = perfil.value;
    }
  });

  return perfilUsuario;
}

// Guardando el plazo seleccionado
let plazo = function () {
  let plazoUsuario;

  plazos.forEach(plazo => {
    if(plazo.checked) {
      plazoUsuario = plazo.value;
    }
  });

  return plazoUsuario;
}

// Funciones para guardar y obtener de Local Storage
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
const obtenerLocal = (clave) => { localStorage.getItem(clave) };

function guardarPreferencias() {
  guardarLocal('perfil', perfil());
  guardarLocal('plazo', plazo());
}

// Función obtener fondos con un perfil Conservador y un plazo Corto
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

// Función obtener fondos con un perfil Conservador y un plazo mediano
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

// Función obtener fondos con un perfil conservador y un plazo largo
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

// Función obtener fondos con un perfil moderado y un plazo corto
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

// Función obtener fondos con un perfil moderado y un plazo mediano
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

// Función obtener fondos con un perfil moderado y un plazo largo
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

// Función obtener fondos con un perfil agresivo y un plazo corto
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

// Función obtener fondos con un perfil agresivo y un plazo mediano
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


// Función obtener fondos con un perfil agresivo y plazo largo
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

// Función obtener un mensaje de error
function mensajeInstruccion() {
  // Creando un mensaje de fallo para el usuario
  let mensajeInstruccion = `
    <p style="color:green;">Selecciona tu perfil y el plazo de tu inversión, luego pulsa el botón buscar.</p>
  `
  // Creando una salida en pantalla
  document.getElementById('contenedorFondos').innerHTML = mensajeInstruccion;
}


// Función obtener fondos segun combinación elegida por el cliente
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
    mensajeInstruccion();
  }
}

// Función recuperar atributo checked
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

// Funcion incorporar animación al título
function animarTitulo () {
  $('#fondos_title').fadeIn()
}

function ocultarTitulo () {
  $('#fondos_title').fadeOut();
}












