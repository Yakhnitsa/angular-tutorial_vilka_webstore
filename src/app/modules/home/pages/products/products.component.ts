import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../../core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    console.log(this.productService.getAllProducts());
  }

}
