import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-galerija',
  imports: [CommonModule],
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

  galleryImages = [
    '/galerija/Copy of IMG_5713.jpeg',
    '/galerija/DSC_0004.jpeg',
    '/galerija/DSC_0008.jpeg',
    '/galerija/DSC_0034.jpeg',
    '/galerija/DSC_0091.jpeg',
    '/galerija/DSC_0117.jpeg',
    '/galerija/DSC_0145.jpeg',
    '/galerija/DSC_0160.jpeg',
    '/galerija/DSC_0220.jpeg',
    '/galerija/DSC_0222.jpeg',
    '/galerija/DSC_0232.jpeg',
    '/galerija/DSC_0256.jpeg',
    '/galerija/DSC_0389.jpeg',
    '/galerija/DSC_0392.jpeg',
    '/galerija/DSC_0394.jpeg',
    '/galerija/DSC_0401.jpeg',
    '/galerija/DSC_0053.jpeg',
    '/galerija/DSC_0066.jpeg',
    '/galerija/DSC_0068.jpeg',
    '/galerija/DSC_0083.jpeg',
    '/galerija/DSC_0591.jpeg',
    '/galerija/DSC_0592.jpeg',
    '/galerija/DSC_0623.jpeg',
    '/galerija/DSC_0630.jpeg',
    '/galerija/DSC_0685.jpeg',
    '/galerija/DSC_0744.jpeg',
    '/galerija/DSC_0747.jpeg',
    '/galerija/DSC_0847.jpeg',
    '/galerija/DSC_0868.jpeg',
    '/galerija/IMG_4363.jpeg',
    '/galerija/IMG_4752.jpeg'
  ];

  currentImageIndex = 0;
  lightboxOpen = false;

  openLightbox(index: number) {
    this.currentImageIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
  }


  



@HostListener('window:keydown', ['$event'])
handleKeyDown(event: KeyboardEvent) {
  if (this.lightboxOpen) {
    if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    } else if (event.key === 'Escape') {
      this.closeLightbox();
    }
  }
}



}
