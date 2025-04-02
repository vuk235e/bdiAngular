
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent  {

  contactForm: FormGroup; 
  categories: string[] = ['A', 'B'];
  faculties: string[] = ['FON', 'ETF', 'TMF', 'Mašinski'];

  years: number[] = [1, 2, 3, 4];

  sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL'];
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      team: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      linkedin: ['', Validators.required],
      categories: [''],
      faculties: [''],
      years: [''],
      sizes: ['']
    });
  }

  

  

  selectedFileName: string = '';
  fileSizeError: boolean = false;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Check if the file is a PDF and below the size limit (6MB = 6 * 1024 * 1024 bytes)
      if (file.size <= 6 * 1024 * 1024) {
        this.selectedFileName = file.name;
        this.fileSizeError = false; // No error
      } else {
        this.selectedFileName = ''; // Clear the name if the file is too large
        this.fileSizeError = true; // Set error flag to true
      }
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted successfully!', this.contactForm.value);
      // Here, you can handle form submission (e.g., send the data to the server)
    }
  }
}
