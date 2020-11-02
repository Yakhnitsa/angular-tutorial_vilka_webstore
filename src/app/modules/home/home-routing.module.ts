import { NgModule } from '@angular/core';
import {ProductsComponent, ShoppingCartComponent, UserProfileComponent} from './pages';
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ProductsComponent,
  },
  {
    path: 'shopping-cart', component: ShoppingCartComponent,
  },
  {
    path: 'user-profile', component: UserProfileComponent,
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
