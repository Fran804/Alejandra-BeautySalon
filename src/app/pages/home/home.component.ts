import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, RouterLink],
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
      {
        id: 4,
        image: 'galery4.jpg',
      },
      {
        id: 5,
        image: 'galery5.jpg',
      },
    ]
  }

}
