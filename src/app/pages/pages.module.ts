import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
// Modules
import { ComponentsModule} from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    PagesComponent,
    ProductsComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
