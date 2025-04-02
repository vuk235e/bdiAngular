

import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isShrunk = false;
  isMenuOpen = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const threshold = window.innerHeight * 0.1; // 50% of viewport height
    this.isShrunk = scrollY > threshold;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
