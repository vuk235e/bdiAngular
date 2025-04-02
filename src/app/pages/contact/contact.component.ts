import { Component,ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastComponent } from '../../toast/toast.component';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterModule,ToastComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
   @ViewChild(ToastComponent) toast!: ToastComponent;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Handle form submission
      console.log(this.contactForm.value);
      this.toast.showToast();
      // this.contactForm.reset();
    } else {
      console.log('Form is invalid');
       
    }
  }
}
