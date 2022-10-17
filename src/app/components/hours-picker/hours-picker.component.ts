import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hours-picker',
  templateUrl: './hours-picker.component.html',
  styleUrls: []
})
export class HoursPickerComponent implements OnInit {
  public freeHours1 = [
    { hour: '9:00' },
    { hour: '10:00' },
    { hour: '11:00' },
    { hour: '12:00' },
    { hour: '13:00' },
    { hour: '14:00' },
    { hour: '15:00' },
    { hour: '16:00' },
    { hour: '17:00' },
    { hour: '18:00' },
  ]

  public freeHours2 = [
    { hour: '10:00' },
    { hour: '12:00' },
    { hour: '13:00' },
    { hour: '15:00' },
    { hour: '16:00' },
  ]

  public freeHours3 = [
    { hour: '11:00' },
    { hour: '12:00' },
    { hour: '13:00' },
    { hour: '14:00' },
    { hour: '16:00' },
    { hour: '17:00' },
    { hour: '18:00' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
