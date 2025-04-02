import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule],
  template: `
    <google-map width="100%" height="400px" [center]="center" [zoom]="15">
      <map-marker [position]="center" [label]="'My Business'"></map-marker>
    </google-map>
  `,
  styleUrl: './map.component.css'
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: 40.7128, lng: -74.0060 }; // Replace with your business coordinates

}
