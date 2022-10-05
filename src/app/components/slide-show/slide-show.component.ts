import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
  public slideItems = [
    { title: 'Slide Title 1', p: 'jaksdfj jj k kjasd jk j askd jfkjsldfkajsf' },
    { title: 'Slide Title 2', p: 'jaksdfj jj k kjasd jk j askd jfkjsldfkajsf' },
    { title: 'Slide Title 3', p: 'jaksdfj jj k kjasd jk j askd jfkjsldfkajsf' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
