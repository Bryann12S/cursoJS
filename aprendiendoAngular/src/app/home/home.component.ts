import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public identificado: boolean;
  
  constructor(
  ){
    this.identificado = false;
  }
  ngOnInit(){
  }

  setIdentificado(){
    this.identificado = true;
  }

  unsetIdentificado(){
    this.identificado = false
  }
}
