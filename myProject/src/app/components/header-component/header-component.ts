import { Component } from '@angular/core';
import { NgbCollapseModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-component',
  imports: [
    NgbCollapseModule,
    NgbModalModule
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
