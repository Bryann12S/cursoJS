import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any; // Declare jQuery


@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  public widthSlider: number = 0;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;

  @ViewChild('textos') textos!: ElementRef;

  constructor() { 
    this.captions = true; 

  }

  ngOnInit() {
    var opcion_clasica = document.querySelector('#texto')?.innerHTML;
  }

  ngAfterViewInit(): void {
    // Aquí SÍ puedes acceder al elemento
    //console.log(this.textos.nativeElement.textContent);
  }

  cargarSlider() {
    
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider() {
    this.anchuraToSlider = null;
  }

  getAutor(event: any) {
    this.autor = event;
  }
 
}
