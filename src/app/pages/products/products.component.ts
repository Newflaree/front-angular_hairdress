import { Component, OnInit } from '@angular/core';
// Services
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit {
  public from: number = 0;
  public products: any[] = [];
  public isLoading: boolean = true;

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.loadProducts( this.from )
      .subscribe( ({ products }) => {
        this.products = products || [];
        this.isLoading = false;
      });
  }
}
