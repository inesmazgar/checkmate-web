import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../country.model'; // Assurez-vous que l'importation est correcte

@Injectable({
  providedIn: 'root'
})
export class UserSettingsApiService {
  private apiUrl = 'https://restcountries.com/v3.1/all'; // L'URL de l'API

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }
}
