import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: []
})
export class AccordionComponent implements OnInit {
  public accordionItems: any;

  constructor() { }

  ngOnInit(): void {
    this.setAccordionItems();
  }

  setAccordionItems() {
    this.accordionItems = [
      { 
        id: 'flush-headingOne',
        title: 'Corte y Estilo',
        options: [
          { name: 'Corte de niño', time: '30min', price: '10.900' },
          { name: 'Corte de niña', time: '1h', price: '15.900' },
          { name: 'Corte de hombre', time: '30 min', price: '14.900' },
          { name: 'Corte de mujer (cabello corto)', time: '1h', price: '22.900' },
          { name: 'Corte de mujer (cabello largo)', time: '1h', price: '25.900' },
        ]
      },
      { 
        id: 'flush-headingTwo',
        title: 'Coloración',
        options: [
          { name: 'Coloración global Tradicional', time: '1h', price: '27.990' },
          { name: 'Coloración global Premiun', time: '1h', price: '30.990' },
          { name: 'Visos / Reflejos', time: '4h - 5h', price: '59.990' },
          { name: 'Smoky Hair', time: '4h - 5h', price: '99.990' },
        ]
      },
      { 
        id: 'flush-headingThree',
        title: 'Tratamientos capilares',
        options: [
          { name: 'Terapia intensiva Kerastase', time: '1h', price: '59.900' },
          { name: 'Ritual mix Loreal', time: '30min', price: '21.990' },
        ]
      },
      { 
        id: 'flush-headingFour',
        title: 'Tratamientos reconstructivos',
        options: [
          { name: 'Botox capilar', time: '1h', price: '35.900' },
          { name: 'Alisado Queratina', time: '30min', price: '15.000' },
          { name: 'Olaplex Stand Alone', time: '35min', price: '28.900' },
        ]
      },
    ]
  }
}
