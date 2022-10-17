import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pages
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ProductsComponent } from './products/products.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // TODO: Config Lazyloading
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
        path: 'reservation',
        component: ReservationComponent,
        data: {
          title: 'Reserva tu hora'
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
    RouterModule.forRoot( routes, { scrollPositionRestoration: 'enabled' } )
  ]
})
export class PagesRoutingModule { }
