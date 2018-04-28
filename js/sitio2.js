$(document).ready(function(){


  //accediendo a los enlaces
  var botonInicio =$("#botonInicio");
  var botonAcerca =$("#botonAcerca");
  var botonTrabajos =$("#botonTrabajos");
  var botonContacto =$("#botonContacto");

  //accediendo a las secciones

  var seccionAcerca=$("#acercaDe").offset().top;
  var seccionTrabajos=$("#portfolio").offset().top;
  var seccionContacto=$("#contacto").offset().top;

//animando Botones

botonAcerca.on("click", function(e){


//quita la funcionalidad de enlaces

e.preventDefault();

  //creando un selector al html y body
  $("html, body").animate({
    scrollTop: seccionAcerca
  });
});

botonTrabajos.on("click", function(e){


//quita la funcionalidad de enlaces

e.preventDefault();

  //creando un selector al html y body
  $("html, body").animate({
    scrollTop: seccionTrabajos
  });
});

botonContacto.on("click", function(e){


//quita la funcionalidad de enlaces

e.preventDefault();

  //creando un selector al html y body
  $("html, body").animate({
    scrollTop: seccionContacto
  });
});






});
