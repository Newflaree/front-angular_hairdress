import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Swiper
import { SwiperModule } from 'swiper/angular'
// Components
import { AccordionComponent } from './accordion/accordion.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MapComponent } from './map/map.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AccordionComponent,
    HomeAboutComponent,
    HomeGalleryComponent,
    HomeProductsComponent,
    MapComponent,
    ProductCardComponent,
    SlideShowComponent,
    SocialNetworksComponent,
    TitleComponent
  ],
  exports: [
    AccordionComponent,
    HomeAboutComponent,
    HomeGalleryComponent,
    HomeProductsComponent,
    MapComponent,
    ProductCardComponent,
    SlideShowComponent,
    SocialNetworksComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})

export class ComponentsModule { }
