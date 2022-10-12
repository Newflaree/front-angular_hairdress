import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css']
})
export class HomeGalleryComponent implements OnInit {
  public galleryItems = [
    {
      name: 'test-1',
      url: '/assets/images/gallery/gallery-01.jpg'
    },
    {
      name: 'test-2',
      url: '/assets/images/gallery/gallery-02.jpg'
    },
    {
      name: 'test-3',
      url: '/assets/images/gallery/gallery-03.jpg'
    },
    {
      name: 'test-4',
      url: '/assets/images/gallery/gallery-04.jpg'
    },
    {
      name: 'test-5',
      url: '/assets/images/gallery/gallery-05.jpg'
    },
    {
      name: 'test-6',
      url: '/assets/images/gallery/gallery-06.jpg'
    },
    {
      name: 'test-7',
      url: '/assets/images/gallery/gallery-07.jpg'
    },
    {
      name: 'test-8',
      url: '/assets/images/gallery/gallery-08.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
