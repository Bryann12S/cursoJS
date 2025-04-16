$(document).ready(function () {

    //mover emento por la pagina
    $('.elemento').draggable();

    //redimensionar
    $('.elemento').resizable();

    //seleccionar elementos
    //$('.lista_seleccionable').selectable();

    //ordenar lista
    $('.lista_seleccionable').sortable({
        update: function(event, ul){
            console.log("Ha cambiado la lista!!");
        }
    });

    // Drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area");
        }
    });

    //efectos
    $('#mostrar').click(function(){
        $('.caja-efectos').toggle("shake", 4000);
    });

    //tooltip

    
    $(document).tooltip();

    //Dialog
    $('#lanzar-popup').click(function(){
        $('#popup').dialog();
    })
    
    //datepicker
    $('#calendario').datepicker();

    //tabs
    $('#pestanas').tabs();


});