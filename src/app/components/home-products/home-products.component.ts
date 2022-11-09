import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation } from "swiper";

// Services
import { HomeProductsService } from 'src/app/services/home-products.service';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  public homeProducts: any;

  constructor(
    private homeProductsService: HomeProductsService
  ) { }

  ngOnInit(): void {
    this.homeProductsService.loadHomeProducts()
      .subscribe( ({currentHomeProducts}) => {
        this.homeProducts = currentHomeProducts;
    })
  }
}
