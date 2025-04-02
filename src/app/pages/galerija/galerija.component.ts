import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-galerija',
  imports: [],
  templateUrl: './galerija.component.html',
  styleUrl: './galerija.component.css'
})
export class GalerijaComponent {

  @ViewChild('gallerySection') gallerySection!: ElementRef;

  scrollToGallery(): void {
    if (this.gallerySection) {
      this.gallerySection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
