import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-component',
  imports: [
    NgbCollapseModule,
    NgbModalModule,
    RouterModule
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  isCollapsed: boolean = true;
  public toggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
