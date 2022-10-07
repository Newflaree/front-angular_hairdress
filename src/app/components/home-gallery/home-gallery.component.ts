import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css']
})
export class HomeGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
