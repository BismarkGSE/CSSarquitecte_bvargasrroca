// PARA TODOS

// PARA ANIMAR LAS TRES RAYAS DEL MENU HAMBURGUESA
$(document).ready(function(){
  $('#btn-menu').click(function(){
    $('.menu_ham').toggleClass('clos')
  });
});

// ESTA ES LA PARTE PARA QUE SALGA EL MENU HAMBURGUESA

$(document).ready(function() {
  $('#btn-menu').click(function(){ // Al hacer click...
	   $('body').toggleClass('visible_menu'); // Añadimos o eliminamos la clase 'visible_menu' al body
	});
});

// PARA LA PARTE DE REHABILITACION

// PARA ANIMAR LAS TRES RAYAS DEL MENU HAMBURGUESA
$(document).ready(function(){
  $('#btn-menu_re').click(function(){
    $('.menu_ham_re').toggleClass('clos_re')
  });
});

// ESTA ES LA PARTE PARA QUE SALGA EL MENU HAMBURGUESA

$(document).ready(function() {
  $('#btn-menu_re').click(function(){ // Al hacer click...
	   $('body').toggleClass('visible_menu_re'); // Añadimos o eliminamos la clase 'visible_menu' al body
	});
});
