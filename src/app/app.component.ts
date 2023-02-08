import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<b>isso vai mostrar em todas telas</b><router-outlet></router-outlet>'
  //templateUrl: './app.component.html' //aqui funcionaria se eu apontasse para um arquivo html
})
export class AppComponent {
  title = 'petshop';
}
