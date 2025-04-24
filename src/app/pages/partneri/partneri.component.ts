import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-partneri',
  imports: [FormsModule, CommonModule],
  templateUrl: './partneri.component.html',
  styleUrl: './partneri.component.css'
})
export class PartneriComponent {

  partnerCategories = [
    {
      title: 'Generalni partneri',
      partners: [
        { name: 'NIS', link: 'https://www.nis.rs/en/', image: '/partneri/nis.png' }
      ]
    },
    {
      title: 'Bronzani partneri',
      partners: [
        { name: 'Alumni', link:'https://www.alumil.com/serbia/aluminium-systems', image: '/partneri/ALUMIL.jpg' }
      ]
    },
    {
      title: 'Robni pokrovitelji',
      partners: [
        { name: 'Lokum', link: '', image: '/partneri/lokum.jpg' },
        { name: 'M&L', link: 'https://mlinternational.rs/', image: '/partneri/ML.jpg' },
        { name: 'Safewise', link: 'https://sgsafewise.com/', image: '/partneri/safewise.jpg' },
        { name: 'Belo brdo', link: 'https://www.belobrdo.com/', image: '/partneri/belobrdo.jpg' },
        { name: 'Domace kiflice', link: 'https://domacekiflice.rs/', image: '/partneri/domacekiflice.jpg' },
        { name: 'Paprika', link: 'https://paprikafood.rs/', image: '/partneri/paprikafood.png' },
        { name: 'Amphora', link: '', image: '/partneri/amphora.jpg' },
      ]
    },
    {
      title: 'Nagradni pokrovitelji',
      partners: [
        { name: 'Slikaj i cirkaj', link: '/', image: '/partneri/slikajicirkaj.jpeg' },
        { name: 'Escape game', link: 'https://escapegame.rs/', image: '/partneri/escapegame.png' },
        { name: 'Muzej', link: 'https://imus.org.rs/', image: '/partneri/istorijskimuzejsrbije.jpg' },
        { name: 'Crvena zvezda', link: 'https/', image: '/partneri/crvenazvezda.jpg' },
        { name: 'Selfie museum', link: 'https://selfiemuseum.rs/', image: '/partneri/selfiemuseum.png' },
        { name: 'Pozoriste na Terazijama', link: 'http/', image: '/partneri/pozoristenaterazijama.png' },
        { name: 'Skakaonica', link: 'https://skakaonica.rs/', image: '/partneri/skakaonica.png' },
        { name: 'Kapmster', link: 'ht/rs/', image: '/partneri/kampster.png' }
      ]
    },
    {
      title: 'Godišnji pokrovitelji',
      partners: [
        { name: 'NIS', link: 'https://www.nis.rs/en/', image: '/partneri/nis.png' },
        { name: 'Mozzart', link: 'h/sr#/', image: '/partneri/mozzart.png' },
        { name: 'Brose', link:'https://www.brose.com/sr-en/', image: '/partneri/brose.png' },
        { name: 'Knjaz Milos', link: 'https://knjaz.rs/', image: '/partneri/knjazmilos.png' },
        { name: 'Grand', link: 'https://grandkafa.rs/', image: '/partneri/grand.png' },
        { name: 'Cinnamon', link: 'https://www.cinnamon.agency/', image: '/partneri/cinnamon.png' },
        { name: 'Zzapi', link: 'https://zzapi.rs/', image: '/partneri/zzapi.jpeg' },
        { name: 'Pepsico', link: 'https://www.pepsico.rs/', image: '/partneri/pepsico.png' }
      ]
    },
    {
      title: 'Medijski pokrovitelji',
      partners: [
        { name: 'Industrija', link: '', image: '/partneri/industrija.png' },
        { name: 'Nova ekonomija', link: '', image: '/partneri/novaekonomija.png' },
        { name: 'Progressive', link: '', image: '/partneri/progressive.jpg' },
        { name: 'Ekonometar', link: '', image: '/partneri/ekonometar.jpg' },
        { name: 'PC press', link: '', image: '/partneri/pcpress.png' },
        { name: 'Mag', link: '', image: '/partneri/mag.png' },
        { name: 'Eco srbija', link: '', image: '/partneri/ecoserbia.png' },
        { name: 'Vesti online', link: '', image: '/partneri/vesti.jpg' },
        { name: 'Rts', link: '', image: '/partneri/rts.png' },
        { name: 'Biznis i finansija', link: '', image: '/partneri/BiF.png' },
        { name: 'Kst', link: '', image: '/partneri/kst.png' },
        { name: 'Studio B', link: '', image: '/partneri/studiob.jpg' },
        { name: 'Radio beograd', link: '', image: '/partneri/radiobeograd.jpg' },
        { name: 'Magazin biznis', link: '', image: '/partneri/magazinbiznis.jpg' },
        { name: 'Advertiser', link: '', image: '/partneri/advertiser.jpg' },
        { name: 'Svet nauke', link: '', image: '/partneri/svetnauke.png' },
        { name: 'Original', link: '', image: '/partneri/original.png' },
        { name: 'Najstudent', link: '', image: '/partneri/najstudent.png' },
        { name: 'Pink', link: '', image: '/partneri/pink.png' },
        { name: 'Fonis', link: '', image: '/partneri/fonis.png' },
        { name: 'Uninor', link: '', image: '/partneri/uninor.png' },
        { name: 'Youth', link: '', image: '/partneri/youth.jpg' },
        { name: 'Sbu', link: '', image: '/partneri/sbu.jpeg' },
        { name: 'Wannabe', link: '', image: '/partneri/wannabe.png' },
        { name: 'Una', link: '', image: '/partneri/una.jpg' },
        { name: 'Politika', link: '', image: '/partneri/politika.jpg' },
        { name: 'Elektron', link: '', image: '/partneri/elektron.png' }
        
      ]
    },
    {
      title: 'Projekat podržali',
      partners: [
        { name: 'Ministarstvo turizma', link: 'https://mto.gov.rs/', image: '/partneri/ministarstvo.jpg' },
        { name: 'Cpn', link: 'https://www.cpn.edu.rs/', image: '/partneri/cpn.png' },
        { name: 'Masinski fakultet', link: 'https://www.mas.bg.ac.rs/', image: '/partneri/masinski.png' },
        { name: 'Fon', link: 'https://fon.bg.ac.rs/', image: '/partneri/fon.png' },
        { name: 'Rgf', link: 'https://rgf.bg.ac.rs/', image: '/partneri/rgf.png' },
        { name: 'Grf', link: 'https://www.grf.bg.ac.rs/home', image: '/partneri/grf.png' },
        { name: 'Etf', link: 'https://www.etf.bg.ac.rs/', image: '/partneri/etf.png' },
        { name: 'Sf', link: 'https://www.sf.bg.ac.rs/index.php/sr-rs/', image: '/partneri/sf.png' },
        { name: 'Ff', link: 'http://www.ff.bg.ac.rs/', image: '/partneri/ff.png' },
        { name: 'Arh', link: 'https://www.arh.bg.ac.rs/', image: '/partneri/arh.png' },
        
        
      ]
    }
  ];

}
