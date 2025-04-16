 var bicicleta = {
    //propiedades o atributos
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km',
    //funcion o métodos
    cambiaColor: function(nuevo_color){
        //bicicleta.color = nuevo_color
        this.color = nuevo_color;
        console.log(this);
    }
 };


 bicicleta.cambiaColor("Azul");  