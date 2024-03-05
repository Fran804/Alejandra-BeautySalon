import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Alejandra Beauty Salon | Inicio',
    component: HomeComponent
  },
  {
    path: 'services',
    title: 'Alejandra Beauty Salon | Servicios',
    component: ServicesComponent
  },
  {
    path: 'gallery',
    title: 'Alejandra Beauty Salon | Galeria',
    component: GalleryComponent
  },
  {
    path: 'contact',
    title: 'Alejandra Beauty Salon | Contacto',
    component: ContactComponent
  },
  {
    path: '**', 
    redirectTo: '/home', 
    pathMatch: 'full'
  }
];
