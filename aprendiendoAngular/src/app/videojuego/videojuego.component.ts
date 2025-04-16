import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

//definir un coponentes - decorador 
@Component({
    selector: 'videojuego',
    standalone: false,
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck,OnDestroy{

    public titulo!: string;
    public listado!: string;

    constructor(){
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los juegos mas populares";
        //console.log("Se ha cargado el cmponente correctamente");
    }
    

    ngOnInit() {
        //console.log("Oninit ejecutado");
    }
    ngDoCheck() {
        //console.log("Docheck ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo Compnente";
    }
    ngOnDestroy(){
        //console.log("Ondestoy ejecutado");
    }
}
