import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FaqComponent } from './pages/faq/faq.component';
import { RasporedComponent } from './pages/raspored/raspored.component';
import { GalerijaComponent } from './pages/galerija/galerija.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'raspored', component: RasporedComponent},
  { path: 'galerija', component: GalerijaComponent}

];
