import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from '../footer-component/footer-component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-component',
  imports: [
    NgbCarousel,
    NgbSlide,
    NgbCarouselModule,
    NgFor,
    FooterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  testimonialSlides: any[] = [];
  contactForm !: FormGroup;
  slides: any[] = [];
  images: string[] = [];
  testimonials: { message: string; author: string }[] = [];

  constructor(config: NgbCarouselConfig, private fb: FormBuilder) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {

    this.initializeForm();
    this.slides = [
      [
        { img: 'assets/dubai.jpg', flag: '🇦🇪', name: 'Dubai' },
        { img: 'assets/uK.jpg', flag: '🇬🇧', name: 'United Kingdom' },
        { img: 'assets/australia.jpg', flag: '🇦🇺', name: 'Australia' }
      ],
      [
        { img: 'assets/canada.jpg', flag: '🇨🇦', name: 'Canada' },
        { img: 'assets/usa.jpg', flag: '🇺🇸', name: 'USA' },
        { img: 'assets/germany.jpg', flag: '🇩🇪', name: 'Germany' }
      ]
    ];
    this.images = ['assets/pexels-bri-schneiter.jpg', 'assets/pexels-danielabs.jpg', 'assets/pexels-pixabay.jpg'];
    this.testimonials = [
      { message: "I was impressed by the exceptional service and personalized attention I received from Venky.", author: "Lila Singh" },
      { message: "Way2fly Visa Services is the best in the business! Highly recommended!", author: "Zain" },
      { message: "My experience with Way2fly Visa Services was truly exceptional!", author: "Shilpa" },
      { message: "Fast and reliable visa service with great customer support!", author: "Rohan" },
      { message: "Professional team and quick processing. I got my visa approved smoothly.", author: "Aisha" }
    ];
    for (let i = 0; i < this.testimonials.length; i += 2) {
      this.testimonialSlides.push(this.testimonials.slice(i, i + 2));
    }
  }

  onSubmit() {
    if(!this.contactForm.valid){
      alert('Please fill all required fields correctly.');
      return;
    }
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Message sent!'); this.contactForm.reset();
    }
  }

  initializeForm() {
    this.contactForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required], visaType: ['', Validators.required],
        comment: ['']
      });
  }
}
