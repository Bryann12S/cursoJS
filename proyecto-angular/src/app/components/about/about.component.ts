import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() {
    this.title = 'Bryan Shiguango';
    this.subtitle = 'Desarrollador Web';
    this.email = 'bryanshiguango6@gmail.com';
  }

  onInit() {

  }

}
