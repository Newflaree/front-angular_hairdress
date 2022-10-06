import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // TODO: Config Lazyload
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Inicio'
        }
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          title: 'Productos'
        }
      },
      {
        path: 'services',
        component: ServicesComponent,
        data: {
          title: 'Nuestros Servicios'
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contacto'
        }
      }
    ]
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class PagesRoutingModule { }
