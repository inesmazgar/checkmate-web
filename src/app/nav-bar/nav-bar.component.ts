import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavbarComponent {
  // Initialisation de la variable pour suivre le lien actif
  activeLink: string = 'accueil';

  // Méthode pour mettre à jour le lien actif
  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
