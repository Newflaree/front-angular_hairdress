import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PagesComponent } from './pages.component';
// Modules
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
