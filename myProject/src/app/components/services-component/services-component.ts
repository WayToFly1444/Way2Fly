import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-component',
  imports: [
    RouterModule
  ],
  templateUrl: './services-component.html',
  styleUrl: './services-component.css',
})
export class ServicesComponent implements OnInit {
  services: any[] = [];

  constructor() {
    this.initializeServices();
  }
  ngOnInit(): void {

  }
  initializeServices() {
    this.services = [
      {
        title: 'Visa Assistance',
        desc: 'Get expert help for your visa application. Fast, reliable, and personalized visa assistance services.'
      },
      {
        title: 'Visa appointments',
        desc: 'Schedule your visa appointment quickly. Streamlined process for your convenience.'
      },
      {
        title: 'Flights & Hotel Reservations',
        desc: 'Book flights and hotel reservations seamlessly. Enjoy unbeatable deals.'
      },
      {
        title: 'Travel Insurance',
        desc: 'Secure your adventures with our travel insurance for peace of mind worldwide.'
      },
      {
        title: 'Passport assistance',
        desc: 'Get expert help with your passport application, renewal, and more. Fast, easy, and reliable service!'
      },
      {
        title: 'Certificate Attestation',
        desc: 'Get your documents authenticated with our reliable certificate attestation services, fast and secure'
      },
      {
        title: 'Visa categories',
        desc: 'Tourist, Business, Student, Work, Transit, Family, Journalist, Athlete, Artist, Researcher'
      },
      {
        title: 'FOREX',
        desc: 'Explore our Forex services. Expert analysis, competitive rates, and tailored strategies to optimize your trading experience.'
      }
    ];
  }
}
