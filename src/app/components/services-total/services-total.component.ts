import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-total',
  templateUrl: './services-total.component.html',
  styleUrls: ['./services-total.component.css']
})
export class ServicesTotalComponent implements OnInit {
  public servicesCheck = []
  public forPay = false;

  constructor() { }

  ngOnInit(): void {
  }
}
