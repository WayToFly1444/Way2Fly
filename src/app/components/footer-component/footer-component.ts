import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-component',
  imports: [
    RouterModule
  ],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
})
export class FooterComponent {
constructor( private router:Router){}

  onPrivacy(): void {
    this.router.navigate(['/privacy-policy']);
  }
}
