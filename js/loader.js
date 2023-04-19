 window.onload = function () {
   alert("Bienvenido Al Club Muñiz")
     $("#onload").fadeOut();
     $("body").removeClass("hidden")
   }
  




   




   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Agregar un evento de clic a cada enlace
    anchor.addEventListener('click', function (e) {
      // Prevenir el comportamiento predeterminado del enlace
      e.preventDefault();
  
      // Obtener el identificador de la sección objetivo del atributo href
      const target = document.querySelector(this.getAttribute('href'));
  
      // Si se encuentra la sección objetivo, hacer el desplazamiento suave hacia ella
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });


