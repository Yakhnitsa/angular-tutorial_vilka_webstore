import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [HomeComponent, ProductCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
