import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public  title :string= 'AST';
  public password:string='';
  public conformpassword:string='';
  public passwordtype=true;
  loginform:boolean=true;
  loginchange(){
    this.loginform=!this.loginform;
  }
  chagepasswodtype(){

  }
}
