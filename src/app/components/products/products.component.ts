import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[]

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this._productsService.getAllProducts().subscribe(
        resp => this.products = resp,
        err => console.log("ATTENTION, erreur recontrée : "+err)


    );
  }

}
