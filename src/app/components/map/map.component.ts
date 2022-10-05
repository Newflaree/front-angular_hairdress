import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public customMap: Mapboxgl.Map;

  constructor() { 
    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.customMap = new Mapboxgl.Map({
      container: 'mapbox-map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-70.4008463,-23.6518416], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    this.customMap.on('style.load', () => {
      this.customMap.setFog({}); // Set the default atmosphere style
    });
  }

  ngOnInit(): void {
  }

}
