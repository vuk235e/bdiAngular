import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class.show]="show" class="toast">
      ✅ {{ message }}
    </div>
  `,
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() message = 'Poruka poslata!';
  show = false;

  showToast() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000); 
  }
}
