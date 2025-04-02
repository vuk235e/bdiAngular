import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  targetValues = [17, 100, 500];
  animatedValues = [0, 0, 0];
  animationStarted = false;

  ngOnInit(): void {
      
  }
  @HostListener('window:scroll', [])
  onScroll() {
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;

    const sectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1;

    if (sectionPosition < screenPosition && !this.animationStarted) {
      this.animationStarted = true;
      this.startCounting();
    }
  }

  startCounting() {
    const duration = 500;
    const steps = 60;
    const interval = duration / steps;

    this.targetValues.forEach((target, index) => {
      let count = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        count += increment;
        this.animatedValues[index] = Math.floor(count);
        if (count >= target) {
          this.animatedValues[index] = target;
          clearInterval(timer);
        }
      }, interval);
    });
  }
}
