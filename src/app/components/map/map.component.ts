import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { LngLatLike, Map, Marker, Popup } from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  public staticLnLat: LngLatLike = [-70.4087393, -23.6710097]
  @ViewChild( 'mapDiv' ) mapDivElement!: ElementRef;

  constructor() { 
  }

  ngAfterViewInit(): void {
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.staticLnLat, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
    const marker = new Marker({
      color: "#E0698D",
      draggable: true
    }).setLngLat( this.staticLnLat )
      .setPopup(new Popup().setHTML( "<h2 class='my-3'>Hair by Eve</h2>" ))
      .addTo( map );
  }
}
