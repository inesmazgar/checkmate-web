import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Country } from '../country.model'; // Importez l'interface des pays
import { UserSettingsApiService } from '../services/user-settings-api.service';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, HttpClientModule], // Ajouter HttpClientModule ici
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  countries: Country[] = []; // Utilisez le type Country[] pour les pays
  selectedCountry: string = '';
  errorMessage: string = '';

  constructor(private apiService: UserSettingsApiService) { }

  ngOnInit(): void {
    this.apiService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = 'Erreur de récupération des pays. Veuillez réessayer plus tard.';
        console.error('Erreur de récupération des pays', err);
      }
    });
  }
}

