import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router'; // Ajouter RouterModule


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterModule, CommonModule ],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  showBackToTopButton = false;

  // Listen for window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if the vertical scroll position is greater than 300
    this.showBackToTopButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

