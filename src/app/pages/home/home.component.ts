import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WaterButtonComponent } from './components/water-button/water-button.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, WaterButtonComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any[] = []
  responsiveOptions : any[] | undefined; 

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        image: 'galery1.png',
      },
      {
        id: 2,
        image: 'galery2.jpg',
      },
      {
        id: 3,
        image: 'galery3.jpg',
      },
    ]
  }

}
