import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: []
})
export class ProductCardComponent implements OnInit {
  @Input() cardTitle: string = 'Hola';
  @Input() cardImg: string = 'Hola';
  @Input() cardDesc: string = 'Hola';
  @Input() cardCat: string = 'Hola';
  @Input() cardBrand: string = 'Hola';
  @Input() cardStock: number = 0;
  @Input() cardPrice: string = 'Hola';

  constructor() { }

  ngOnInit(): void {
  }

}
