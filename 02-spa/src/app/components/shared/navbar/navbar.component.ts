import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(private router: Router) { }

  searchHeroe(value: string) {
    this.router.navigate(['/search', value]);
  }
}
