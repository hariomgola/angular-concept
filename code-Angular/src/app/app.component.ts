import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name :string = 'Hari' // parent ---> Child
  title = 'Code-Me';   
}
