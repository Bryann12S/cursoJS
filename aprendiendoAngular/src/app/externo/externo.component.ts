import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  standalone: false,
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.css',
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;
  


  public new_user: any;
  public usuario_guardado: any;
  

  constructor(
    private peticionesService: PeticionesService
  ) {
    this.userId = 1;
    this.new_user = {
              "name": "",
              "job": ""
            };
          }

  ngOnInit(){
    this.fecha = new Date(2023, 10, 1);
    this.cargaUsuario();

  }

  cargaUsuario() {
    this.user = false;

    this.peticionesService.getUsers(this.userId).subscribe(
      response => {
        this.user = response.data;
        console.log(this.user);
      },
      error => {
        console.error(<any>error);
      }
    );
  }

  onSubmit(form: any) {
    this.peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.usuario_guardado = response;
        console.log(response);
        form.reset();
        //this.new_user = response;
      },
      error => {
        console.error(<any>error);
      }
    );
  }

}
