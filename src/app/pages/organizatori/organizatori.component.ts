import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-org2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './organizatori.component.html',
  styleUrls: ['./organizatori.component.css']
})
export class OrganizatoriComponent {
 

  organizatori = [
    {
      ime: 'Veselin Bošković',
      pozicija: 'Glavni Organizator',
      slika: '/organizatori/VeselinBoskovic.jpg',
      telefon: '+381 64 128803',
      email: 'bdi.mo@best.rs',
      linkedin: 'https://www.linkedin.com/in/veselin-bo%C5%A1kovi%C4%87-932188285/',
      hover: false
    },
    {
      ime: 'Mateja Đokić',
      pozicija: 'TOPIC kooordinator',
      slika: '/organizatori/MatejaDjokic.jpg',
      telefon: '+381 60 3213888',
      email: 'bdi.top@best.rs',
      linkedin: 'https://www.linkedin.com/in/mateja-djokic-711613291/',
      hover: false
    },
    {
      ime: 'Ljubica Bulatović',
      pozicija: 'FR koordinato',
      slika: '/organizatori/LjubicaBulatovic.jpg',
      telefon: '+381 69 1130405',
      email: 'bdi.cr@best.rs',
      linkedin: 'https://www.linkedin.com/in/ljubica-bulatovi%C4%87-591aaa291/',
      hover: false
    },
    {
      ime: 'Milica Kovačević',
      pozicija: 'LOG Koordinator ',
      slika: '/organizatori/MilicaKovacevic.jpg',
      telefon: '+381 63 7865650',
      email: 'bdi.log@best.rs',
      linkedin: 'https://www.linkedin.com/in/milica-kova%C4%8Devi%C4%87-7b90a2241/',
      hover: false
    },
    {
      ime: 'Iva Nikolić ',
      pozicija: 'PR koordinator',
      slika: '/organizatori/IvaNikolic.jpg',
      telefon: '+381 62 350865',
      email: 'bdi.pr@best.rs',
      linkedin: 'http://www.linkedin.com/in/iva-nikolic-083bb4343',
      hover: false
    },
    {
      ime: 'Mateja Vasiljević',
      pozicija: 'PUB koordinator',
      slika: '/organizatori/MatejaVasiljevic.jpg',
      telefon: '+381 60 5555959',
      email: 'bdi.pub@best.rs',
      linkedin: 'https://www.linkedin.com/in/mateja-vasiljevi%C4%87-b584b434b/',
      hover: false
    }
  ];

  toggleDetalji(organizator: any) {
    organizator.otvoren = !organizator.otvoren;
  }
}
