import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
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
