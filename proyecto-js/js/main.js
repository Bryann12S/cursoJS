$(document).ready(function () {

    //slider
    if(window.location.href.indexOf('index')>-1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }
    
    //posts
    if(window.location.href.indexOf('index')>-1){
        var posts=[
            {
                title: 'Prueba de titulo 1',
                date: 'publicado el día '+moment().day()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend magna eu nisl venenatis accumsan. Sed ornare nulla at enim tincidunt sagittis. Maecenas condimentum nulla eu pharetra accumsan. Aenean eros mauris, tincidunt ac nisi eget, suscipit gravida magna. Duis justo augue, dignissim vel vulputate rhoncus, viverra at urna. Praesent in maximus massa. Aliquam quis nisi vel diam volutpat rutrum sed vitae augue. Maecenas diam magna, gravida ac ligula dictum, pharetra gravida sapien. In ullamcorper lobortis ex, a ultricies erat dictum sed. Morbi venenatis vulputate elit, eget malesuada quam vestibulum vitae.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'publicado el día '+moment().day()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend magna eu nisl venenatis accumsan. Sed ornare nulla at enim tincidunt sagittis. Maecenas condimentum nulla eu pharetra accumsan. Aenean eros mauris, tincidunt ac nisi eget, suscipit gravida magna. Duis justo augue, dignissim vel vulputate rhoncus, viverra at urna. Praesent in maximus massa. Aliquam quis nisi vel diam volutpat rutrum sed vitae augue. Maecenas diam magna, gravida ac ligula dictum, pharetra gravida sapien. In ullamcorper lobortis ex, a ultricies erat dictum sed. Morbi venenatis vulputate elit, eget malesuada quam vestibulum vitae.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'publicado el día '+moment().day()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend magna eu nisl venenatis accumsan. Sed ornare nulla at enim tincidunt sagittis. Maecenas condimentum nulla eu pharetra accumsan. Aenean eros mauris, tincidunt ac nisi eget, suscipit gravida magna. Duis justo augue, dignissim vel vulputate rhoncus, viverra at urna. Praesent in maximus massa. Aliquam quis nisi vel diam volutpat rutrum sed vitae augue. Maecenas diam magna, gravida ac ligula dictum, pharetra gravida sapien. In ullamcorper lobortis ex, a ultricies erat dictum sed. Morbi venenatis vulputate elit, eget malesuada quam vestibulum vitae.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'publicado el día '+moment().day()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend magna eu nisl venenatis accumsan. Sed ornare nulla at enim tincidunt sagittis. Maecenas condimentum nulla eu pharetra accumsan. Aenean eros mauris, tincidunt ac nisi eget, suscipit gravida magna. Duis justo augue, dignissim vel vulputate rhoncus, viverra at urna. Praesent in maximus massa. Aliquam quis nisi vel diam volutpat rutrum sed vitae augue. Maecenas diam magna, gravida ac ligula dictum, pharetra gravida sapien. In ullamcorper lobortis ex, a ultricies erat dictum sed. Morbi venenatis vulputate elit, eget malesuada quam vestibulum vitae.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'publicado el día '+moment().day()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend magna eu nisl venenatis accumsan. Sed ornare nulla at enim tincidunt sagittis. Maecenas condimentum nulla eu pharetra accumsan. Aenean eros mauris, tincidunt ac nisi eget, suscipit gravida magna. Duis justo augue, dignissim vel vulputate rhoncus, viverra at urna. Praesent in maximus massa. Aliquam quis nisi vel diam volutpat rutrum sed vitae augue. Maecenas diam magna, gravida ac ligula dictum, pharetra gravida sapien. In ullamcorper lobortis ex, a ultricies erat dictum sed. Morbi venenatis vulputate elit, eget malesuada quam vestibulum vitae.'
            }
        ];

        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>

                    <a href="#" class="button-more">Leer más</a>

                </article>
            `;

            //JQuery
            $('#posts').append(post);
        });
    }

    //SELECTOR DE TEMA
    
    /*
    var theme = $('#theme');

    $('#to-green').click(function () { 
        theme.attr('href', 'css/green.css');
    });

    $('#to-red').click(function () { 
        theme.attr('href', 'css/red.css');
    });

    $('#to-blue').click(function () { 
        theme.attr('href', 'css/blue.css');
    });*/

    var theme = $('#theme');

    // Función para cambiar el tema y guardarlo en LocalStorage
    function cambiarTema(color) {
        var archivoCSS = './css/' + color + '.css';
        theme.attr('href', archivoCSS);
        localStorage.setItem('temaSeleccionado', archivoCSS);
    }

    // Eventos de los botones
    $('#to-green').click(function () { cambiarTema('green'); });
    $('#to-red').click(function () { cambiarTema('red'); });
    $('#to-blue').click(function () { cambiarTema('blue'); });

    // Al cargar la página, recuperar el tema guardado en LocalStorage
    var temaGuardado = localStorage.getItem('temaSeleccionado');
    if (temaGuardado) {
        theme.attr('href', temaGuardado);
    }

    //scroll arriba de la web

    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso
    $("#login form").submit(function () { 
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name",form_name);
    });

    var form_name =  localStorage.getItem("form_name");
    if(form_name != null && form_name !="undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("<strong>Bienvenido, "+ form_name+"</strong>");

        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    
    //about - acordeon
    if(window.location.href.indexOf('about')>-1){
        $("#acordeon").accordion();
    }

    //reloj
    if(window.location.href.indexOf('reloj')>-1){
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        },  1000)
        
    }

    //validator
    if(window.location.href.indexOf('contact')>-1){

        $("form input[name='date']").datepicker({
            dateFormat:'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
    
});