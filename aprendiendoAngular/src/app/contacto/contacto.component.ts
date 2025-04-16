import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';


@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {

  public usuario: ContactoUsuario;

  constructor() {
    this.usuario = new ContactoUsuario("", "", "", "");
  }
  ngOnInit(): void {
  }

  onSubmit(form : any) {
    
    console.log("Formulario enviado");
    console.log(this.usuario);
    //form.reset();
  }

}
