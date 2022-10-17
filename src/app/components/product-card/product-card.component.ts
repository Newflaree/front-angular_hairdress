import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: []
})
export class ProductCardComponent implements OnInit {
  @Input() cardTitle: string = 'Hola';

  constructor() { }

  ngOnInit(): void {
  }

}
