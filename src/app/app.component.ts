import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public  title :string= 'ecomerce';
 constructor(public Router:Router){
  //this.Router.navigateByUrl("products/");
 }
}
