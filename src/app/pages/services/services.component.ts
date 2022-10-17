import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: []
})
export class ServicesComponent implements OnInit {
  public servicesList = [
    { serviceName: 'Corte 1', price: '3000' },
    { serviceName: 'Corte 2', price: '3000' },
    { serviceName: 'Corte 3', price: '3000' },
    { serviceName: 'Corte 4', price: '3000' },
    { serviceName: 'Corte 5', price: '3000' },
    { serviceName: 'Corte 6', price: '3000' },
    { serviceName: 'Corte 7', price: '3000' },
    { serviceName: 'Corte 8', price: '3000' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
