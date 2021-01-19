import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCountriesService {

  favoriteCountries: any[] = [];

  constructor() { }

  setCountry(country): void {
    if (!this.favoriteCountries.find(country => country.name.includes(country.name))) {
      this.favoriteCountries.push(country);
      console.log(this.favoriteCountries);
      localStorage.setItem('favoriteCountries', JSON.stringify(this.favoriteCountries));
    }
  }

  getFavoriteCountries(): void {
    return JSON.parse('favoriteCountries');
  }
}
