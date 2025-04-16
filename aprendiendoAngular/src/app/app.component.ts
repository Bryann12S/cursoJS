import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'aprendiendoAngular';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;
  public config: any;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarVideojuegos(value: boolean){
     this.mostrar_videojuegos = value;
  }
}
