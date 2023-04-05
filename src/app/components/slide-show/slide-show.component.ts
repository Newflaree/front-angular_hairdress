import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// Services
import { HomeSlideshowService } from 'src/app/services/home-slideshow.service';
import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
 
SwiperCore.use([ Autoplay, EffectFade, Navigation, Pagination ]);

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SlideShowComponent implements OnInit {
  public slideItems: any[] = [];
  public isLoading: boolean = true;

  constructor(
    private homeSlideshowService: HomeSlideshowService
  ) { }

  ngOnInit(): void {
    this.loadSlideShow();
  }

  onSwiper([swiper]: any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }

  loadSlideShow() {
    this.homeSlideshowService.loadHomeSlideshow()
    .subscribe( ({ ok, homeSlides }) => {
      this.slideItems = homeSlides;
      this.isLoading = false;
    })
  }
}
