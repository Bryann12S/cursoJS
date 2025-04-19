import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $: any; // Declare jQuery


interface JQuery {
  bxSlider(options?: any): any;
}

@Component({
  selector: 'app-slider',
  standalone: false,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {

    @Input() anchura: number = 0;
    @Input('etiquetas') captions: boolean = false;
    @Output() conseguirAutor = new EventEmitter<any>();
    
    public autor: any;

  
    constructor() {
      this.autor = {
        nombre: 'Bryan Siguango',
        website: 'bryanshiguango.com',
        youtube: 'brynreels'
      };
     }
  
    ngOnInit() {
      $("#logo").click(function(e: any) {
        e.preventDefault();
        $("header").css("background", "green")
                   .css("height", "50px");
      });
  
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: this.captions,
        slideWidth: this.anchura
      });
    }

    lanzar(event: any) {
      this.conseguirAutor.emit(this.autor);
    }
}
