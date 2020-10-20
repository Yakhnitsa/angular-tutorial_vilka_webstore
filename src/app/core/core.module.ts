import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  ApiService,
  ShoppingCartService,
  UserProfileService,
} from './services';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    ShoppingCartService,
    UserProfileService,
  ],
})
export class CoreModule { }
