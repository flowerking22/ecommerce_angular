import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:'product/:name',component:ProductdetailsComponent},
  {path:'login',component:UserComponent},
  {path:'product',component:ProductsComponent},
  {path:'card',component:CardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
