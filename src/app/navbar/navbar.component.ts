import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/']">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/carrello']">Carrello ( {{ carrelloNav.length }} )</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
