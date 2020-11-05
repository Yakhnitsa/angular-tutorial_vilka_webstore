import { NgModule } from '@angular/core';
import {ShoppingCartComponent, UserProfileComponent, EditorPageComponent, ProductsPageComponent} from './pages';
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ProductsPageComponent,
  },
  {
    path: 'shopping-cart', component: ShoppingCartComponent,
  },
  {
    path: 'user-profile', component: UserProfileComponent,
  },
  {
    path: 'edit', component: EditorPageComponent,
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
