import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { TestComponent } from './_test/test/test.component';
import {HttpClientModule} from '@angular/common/http';
import { GloginComponent } from './glogin/glogin.component';
import { LoginModule } from './login/login/login.module';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductsComponent,
    HeaderComponent,
    SidenavbarComponent,
    ProductdetailsComponent,
    CardComponent,
    TestComponent,
    GloginComponent
  ],
  imports: [
    BrowserModule,LoginModule,
    AppRoutingModule,FormsModule, BrowserAnimationsModule,MatCardModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
