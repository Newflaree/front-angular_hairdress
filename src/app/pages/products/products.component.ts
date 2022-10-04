import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productsTest = [
    { name: 'test 1' },
    { name: 'test 2' },
    { name: 'test 3' },
    { name: 'test 4' },
    { name: 'test 5' },
    { name: 'test 6' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
