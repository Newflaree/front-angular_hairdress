import { Component, OnInit } from '@angular/core';
// Services
import { HomeInfoService } from 'src/app/services/home-info.service';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: []
})
export class HomeAboutComponent implements OnInit {
  public aboutInfo: any;
  public isLoading: boolean = true;

  constructor(
    private homeInfoService: HomeInfoService
  ) { }

  ngOnInit(): void {
    this.loadAboutInfo();
  }

  loadAboutInfo() {
    this.homeInfoService.loadHomeInfo()
    .subscribe( ({ currentHomeInfo }) => {
      this.aboutInfo = currentHomeInfo[0];
    });
  }
}
