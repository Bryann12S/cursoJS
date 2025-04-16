$(document).ready(function(){
    //selector de ID
    $('#rojo').css("background","red")
                    .css("color", "white");
    $('#amarrillo').css("background", "yellow")
                    .css("color", "green");
    $('#verde').css("background", "green")
                    .css("color", "white");

    //selectores de clases

    var mi_clase = $('.zebra').css("padding","5px");

    $('.sin_borde').click(function(){
        console.log("Click dado!!");
        $(this).addClass('zebra');
    });

    //Selectores de etiqueta
    var parrafos = $('p').css("cursor","pointer");
    parrafos.click(function(){
        var th = $(this);
        if(!th.hasClass('grande')){
            th.addClass('grande');
        }else{
            th.removeClass('grande');
        }
    });

    //Selectores de atributos

    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');

    //Otros
    //$('p, a').addClass('margen-superior');
    var busqueda = $('#elemento2').parent().parent().find('.resaltado');

    console.log(busqueda);


});