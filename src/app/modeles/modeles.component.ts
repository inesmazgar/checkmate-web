import { CommonModule, } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router'; // Ajouter RouterModule


@Component({
  selector: 'app-modeles',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './modeles.component.html',
  styleUrls: ['./modeles.component.css']
})
export class ModelesComponent {
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
