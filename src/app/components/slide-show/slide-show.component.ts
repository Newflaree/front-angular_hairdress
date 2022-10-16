import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
 
SwiperCore.use([ Autoplay, EffectFade, Navigation, Pagination ]);

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SlideShowComponent implements OnInit {
  public slideItems = [
    { title: 'Slide Title 1', p: 'jaksdfj jj k kjasd jk j askd jfkjsldfkajsf', url: 'assets/images/banner.jpg' },
    { title: 'Slide Title 2', p: 'jaksdfj jj k kjasd jk j askd jfkjsldfkajsf', url: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    { title: 'Slide Title 3', p: 'jaksdfj jj k kjasd jk j askd jfkjsldfkajsf', url: 'https://swiperjs.com/demos/images/nature-2.jpg' },
    { title: 'Slide Title 4', p: 'jaksdfj jj k kjasd jk j askd jfkjsldfkajsf', url: 'https://swiperjs.com/demos/images/nature-3.jpg' },
    { title: 'Slide Title 5', p: 'jaksdfj jj k kjasd jk j askd jfkjsldfkajsf', url: 'https://swiperjs.com/demos/images/nature-4.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
