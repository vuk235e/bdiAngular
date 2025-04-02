import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  selectedFaq: number | null = null;
  

  faqs = [
    { question: 'What is Angular?', answer: 'Angular is a platform for building mobile and desktop web applications.' },
    { question: 'How do I install Angular?', answer: 'You can install Angular using the Angular CLI with the command: npm install -g @angular/cli.' },
    { question: 'What are Angular components?', answer: 'Components are the building blocks of an Angular application. They consist of an HTML template, CSS styles, and a TypeScript class.' },
    { question: 'How do I create a new component in Angular?', answer: 'You can create a new component using the Angular CLI command: ng generate component component-name.' },
    { question: 'What is data binding in Angular?', answer: 'Data binding is the process of synchronizing the data between the model and the view in an Angular application.' },
  ];

  
  toggleFaq(index: number): void {
    this.selectedFaq = this.selectedFaq === index ? null : index;
    this.rotateIcon(index);

  }

  rotateIcon(index: number) {
    const icon = document.querySelectorAll('.faq-item')[index].querySelector('.fa-solid') as HTMLElement;
    icon.style.transition = 'transform 1s';
    icon.style.transform = 'rotate(360deg)';

      setTimeout(() => {
      icon.style.transform = 'rotate(0deg)';
    }, 1000); 
  }
}
