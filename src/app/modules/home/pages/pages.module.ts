import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { UserProfileComponent} from './user-profile/user-profile.component';
import {ComponentsModule} from '../components/components.module';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    ShoppingCartComponent,
    UserProfileComponent,
    EditorPageComponent,
    ProductsPageComponent
  ],
  exports: [
    // ShoppingCartComponent,
    // UserProfileComponent
  ]
})
export class PagesModule { }
