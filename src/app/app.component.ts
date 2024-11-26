import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule pour l'API
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importer RouterModule pour les routes
import { NavbarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, NavbarComponent, HttpClientModule], // Importer HttpClientModule ici aussi
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}

