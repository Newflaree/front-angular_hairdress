import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menuItems = [
    {
      name: 'Inicio',
      url: '/'
    },
    {
      name: 'Productos',
      url: 'products'
    },
    {
      name: 'Servicios',
      url: 'services'
    },
    {
      name: 'Contacto',
      url: 'contact'
    }
  ]

  public logedMenu = [
    //TODO: Configure sesion state
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
