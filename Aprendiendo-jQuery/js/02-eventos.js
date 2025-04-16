$(document).ready(function(){
    //MouseOver y MouseOut
    var caja = $('#caja');

    /*
    caja.mouseover(function(){
        $(this).css("background","red")
    });
    caja.mouseout(function(){
        $(this).css("background","green")
    });
    */
    function cambiaRojo(){
        $(this).css("background","red");
    }
    function  cambiaVerde(){
        $(this).css("background","green");
    }

    //Hover
    caja.hover(cambiaRojo,cambiaVerde);

    //Click, Doble click

    caja.click(function(){
        $(this).css("background","blue")
               .css("color","white");
    });
    caja.dblclick(function(){
        $(this).css("background","pink")
               .css("color","yellow");
    });

    //Focus y blur
    var nombre = $('#nombre');
    var datos = $('#datos');
    console.log(nombre);

    nombre.focus(function(){
        console.log("ACTIVADO");
        $(this).css('border','2px solid gren')
    });
    nombre.blur(function(){
        console.log("DESACTIVADO");
        $(this).css('border','1px solid #ccc')
        
        datos.text($(this).val()).show();
    });

    //mousedown and mouseup
    datos.mousedown(function(){
        console.log("ACTIVADO");
        $(this).css("borde-color","gray");
    });
    datos.mouseup(function(){
        console.log("DESC");
        $(this).css("borde-color","black");
    });

    //Mousemove
    $(document).mousemove(function(){
        $('body').css('cursor','none');
        var sigueme =  $("#sigueme");

        sigueme.css("left",event.clientX);
        sigueme.css("top",event.clientY);
    });


});