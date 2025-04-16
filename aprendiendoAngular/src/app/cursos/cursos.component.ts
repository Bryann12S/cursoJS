import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit{

  public nombre: string='';
  public followers: number=0;
  
  constructor (
    private _route: ActivatedRoute,
    private _router: Router
  ){}
  ngOnInit(){
    this._route.params.subscribe((params: Params)=>{
      this.nombre = params['nombre'];
      this.followers = +params['followers']; //el + lo convierte a tipo number
      
      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home'])
      }
    });
  }
  redirigir(){
    this._router.navigate(['/zapatillas']); //podemos usar esto par acuando el usuario haga o termine de hacer una cosa
  }
}
