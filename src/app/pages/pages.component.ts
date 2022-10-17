import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() {  }


  ngOnInit(): void {
  }

  onActivate( event: any ) {
    window.scrollTo( 0, 0 )
  }
}
