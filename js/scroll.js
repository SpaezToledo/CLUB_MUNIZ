// Scroll in general
  $(document).ready(function(){
    
    // Seleccionamos todos los enlaces que apuntan a una sección de la página
    $('a[href^="#"]').on('click', function(event) {
  
      // Evitamos el comportamiento por defecto del enlace
      event.preventDefault();
  
      // Obtenemos la posición del elemento al que se hace referencia
      var target = $(this.hash);
      var offset = target.offset().top;
  
      // Realizamos el desplazamiento suave
      $('html, body').animate({
        scrollTop: offset
      }, 1000);
    });
  });


// Fixed element scrolling
  $(document).ready(function() {
    // Ocultamos el elemento por defecto
    $('.fixed-element').hide();

    // Agregamos un listener al elemento para hacer scroll al comienzo de la página
    $('.fixed-element').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1000); // Duración de la animación en milisegundos (en este caso, 1 segundo)
    });

    // Mostramos el elemento una vez que se carga la página
    $(window).on('load', function() {
      $('.fixed-element').show();
    });
  });






