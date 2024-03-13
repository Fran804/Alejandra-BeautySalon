import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavButtonComponent } from './components/nav-button/nav-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NavButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
