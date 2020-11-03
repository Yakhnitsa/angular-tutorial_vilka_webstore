import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  ApiService,
  ShoppingCartService,
  UserProfileService,
  AlertService
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
    AlertService,
  ],
})
export class CoreModule { }
