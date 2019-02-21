import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-ii',
  template: `
  <h2>
  Hello {{message}}
  </h2>
  `,
  styles: [`
  h2{
    color:blue;
    background-color:yellow;
    border: 2px dashed brown;
  }
  `]
})
export class AppIIComponent {
  message: string;
  constructor() {
    this.message = "App II";
  }

}
