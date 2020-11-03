import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { UserProfileComponent} from './user-profile/user-profile.component';
import {ComponentsModule} from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    UserProfileComponent
  ],
  exports: [
    ProductsComponent,
    ShoppingCartComponent,
    UserProfileComponent
  ]
})
export class PagesModule { }
