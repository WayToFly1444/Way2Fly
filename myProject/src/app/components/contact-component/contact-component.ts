import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent implements OnInit {
contactForm !: FormGroup;
visaTypes : string[] = [];
  
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initializeForm();
    this.visaTypes = [    
    'Tourist Visa',
    'Student Visa',
    'Work Visa',
    'Business Visa']
  }
  initializeForm() {
      this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      visaType: ['', Validators.required],
      comment: ['']
    });
  }

  submit(){
    if(!this.contactForm.valid){
      alert('Please fill in all required fields.');
      return;
    }

    if(this.contactForm.valid){
      alert('Form submitted successfully!');
      this.contactForm.reset();
    }

  }
}
