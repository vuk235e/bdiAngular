import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FaqComponent } from './pages/faq/faq.component';
import { RasporedComponent } from './pages/raspored/raspored.component';
import { GalerijaComponent } from './pages/galerija/galerija.component';
import { PartneriComponent } from './pages/partneri/partneri.component';
import { BdiComponent } from './pages/bdi/bdi.component';
import { OrganizatoriComponent } from './pages/organizatori/organizatori.component';
import { PanelDiskusijaComponent } from './pages/panel-diskusija/panel-diskusija.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'raspored', component: RasporedComponent},
  { path: 'partneri', component: PartneriComponent},
  { path: 'organizatori', component: OrganizatoriComponent },
  { path: 'bdi', component: BdiComponent },
  { path: 'galerija', component: GalerijaComponent},
  { path: 'panel-diskusija', component: PanelDiskusijaComponent }

];
