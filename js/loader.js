//  window.onload = function () {
//    alert("Bienvenido Al Club Muñiz")
//      $("#onload").fadeOut();
//      $("body").removeClass("hidden")
//    }
  


   // Obtener el botón y el elemento de texto
const botonMostrar = document.getElementById('mostrar-texto');
const textoOculto = document.getElementById('Historia');

// Agregar evento de click al botón
botonMostrar.addEventListener('click', function() {
  // Agregar o eliminar la clase CSS "mostrar" del elemento de texto
  textoOculto.classList.toggle('mostrar');
});