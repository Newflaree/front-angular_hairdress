import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ProductsComponent } from './products/products.component';
// Modules
import { ComponentsModule} from '../components/components.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
