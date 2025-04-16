$(document).ready(function(){
    var caja = $('#caja');
    $('#mostrar').hide();

    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        caja.slideDown('slow'); // in hide or show: fast, slow, normal
    });           //alternative of show and hice: fadeIn and fadeOut

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        caja.slideUp('slow',function(){
            console.log("Cartel ocultado");
        });  //slideDown and slideUp fadeTo('slow',0.1)
    });

    $('#todoenuno').click(function(){
       caja.toggle('fast');
    });

    $('#animar').click(function(){
        caja.animate({
                    marginLeft:'500px',
                    fontSize: '40px',
                    height:'110px'
                    },'slow')
            .animate({
                borderRadius:'900px',
                marginTop: '80px'
            },'slow')
            .animate({
                borderRadius:'0px',
                marginLeft: '0px'
            },'slow')
            .animate({
                borderRadius:'100px',
                marginTop: '0px'
            },'slow')
            .animate({
                marginLeft:'500px',
                fontSize: '40px',
                height:'110px'
                },'slow')

        ;

    })


});