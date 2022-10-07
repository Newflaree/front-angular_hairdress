import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css']
})
export class HomeAboutComponent implements OnInit {
  public aboutInfo: any;

  constructor() { }

  ngOnInit(): void {
    this.setAboutInfo();
  }

  setAboutInfo() {
    this.aboutInfo = [
      { 
        name: 'Misión',
        contentText: '[MISSION Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie venenatis augue vel venenatis. Donec ornare nibh non arcu ornare aliquam. Nam posuere tortor ut magna mollis, sit amet tempus nisi lobortis. Aenean commodo magna porttitor, cursus arcu at, vehicula arcu. Mauris non condimentum tellus,'
      },
      { 
        name: 'Visión',
        contentText: '[VISION] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie venenatis augue vel venenatis. Donec ornare nibh non arcu ornare aliquam. Nam posuere tortor ut magna mollis, sit amet tempus nisi lobortis. Aenean commodo magna porttitor, cursus arcu at, vehicula arcu. Mauris non condimentum tellus,'
      },
      { 
        name: 'Sobre mi',
        contentText: '[ABOUT] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie venenatis augue vel venenatis. Donec ornare nibh non arcu ornare aliquam. Nam posuere tortor ut magna mollis, sit amet tempus nisi lobortis. Aenean commodo magna porttitor, cursus arcu at, vehicula arcu. Mauris non condimentum tellus,'
      }
    ];
  }
}
