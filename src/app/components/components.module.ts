import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Swiper
import { SwiperModule } from 'swiper/angular'
// Components
import { AccordionComponent } from './accordion/accordion.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { MapComponent } from './map/map.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ServicesTotalComponent } from './services-total/services-total.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { TitleComponent } from './title/title.component';
import { HoursPickerComponent } from './hours-picker/hours-picker.component';

@NgModule({
  declarations: [
    AccordionComponent,
    HomeAboutComponent,
    HomeGalleryComponent,
    HomeProductsComponent,
    HoursPickerComponent,
    MapComponent,
    ProductCardComponent,
    ServicesTotalComponent,
    SlideShowComponent,
    SocialNetworksComponent,
    TitleComponent,
  ],
  exports: [
    AccordionComponent,
    HomeAboutComponent,
    HomeGalleryComponent,
    HomeProductsComponent,
    HoursPickerComponent,
    MapComponent,
    ProductCardComponent,
    ServicesTotalComponent,
    SlideShowComponent,
    SocialNetworksComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ]
})

export class ComponentsModule { }
