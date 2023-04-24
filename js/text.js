   // Obtener el botón y el elemento de texto
   const botonMostrar = document.getElementById('mostrar-texto');
   const textoOculto = document.getElementById('Historia');
   
   botonMostrar.addEventListener('click', function() {
    if (textoOculto.classList.contains('mostrar')) { // si la clase "mostrar" está presente, el texto está visible
      textoOculto.classList.remove('mostrar'); // eliminamos la clase "mostrar" para ocultar el texto
    } else { // de lo contrario, el texto está oculto
      textoOculto.classList.add('mostrar'); // agregamos la clase "mostrar" para mostrar el texto
    }
   });




   

  
