import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductApiMockedService} from './http/product-api-mocked.service';

import {
  ProductsService,
  ShoppingCartService,
  UserProfileService,
  AlertService
} from './services';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ProductsService,
    ShoppingCartService,
    UserProfileService,
    AlertService,
    ProductApiMockedService
  ],
})
export class CoreModule { }
