import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { AccordionComponent } from './accordion/accordion.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MapComponent } from './map/map.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AccordionComponent,
    MapComponent,
    ProductCardComponent,
    SlideShowComponent,
    SocialNetworksComponent,
    TitleComponent
  ],
  exports: [
    AccordionComponent,
    MapComponent,
    ProductCardComponent,
    SlideShowComponent,
    SocialNetworksComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
  ]
})

export class ComponentsModule { }
