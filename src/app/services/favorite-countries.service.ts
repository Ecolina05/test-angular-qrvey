import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteCountriesService {

  favoriteCountries: any[] = [];

  constructor(public toastServices: ToastService) { }

  setCountry(countryToFavorite): void {
    this.getFavoriteCountries();

    if (this.isFavorite(countryToFavorite)) {
      this.toastServices.openToast('The country had already been added to favorites.', 'is-danger');
    } else {
      this.favoriteCountries.push(countryToFavorite);
      localStorage.setItem('favoriteCountries', JSON.stringify(this.favoriteCountries));
      this.toastServices.openToast('Country added to favorites.', 'is-success');
    }
  }

  removeCountry(countryToRemove): void {
    let country, index;

    if (this.isFavorite(countryToRemove)) {
      country = this.favoriteCountries.find(country => country.name.toLowerCase().includes(countryToRemove.name.toLowerCase()));
      index = this.favoriteCountries.indexOf(country);
      this.favoriteCountries.splice(index, 1);
      localStorage.setItem('favoriteCountries', JSON.stringify(this.favoriteCountries));
      window.dispatchEvent(new Event('getFavoriteCountries'));
      this.toastServices.openToast('Country removed to favorites.', 'is-success');
    }
  }

  getFavoriteCountries(): any {
    const favoriteCountries = JSON.parse(localStorage.getItem('favoriteCountries'));

    if (favoriteCountries) {
      this.favoriteCountries = favoriteCountries;
      return favoriteCountries;
    } else {
      this.favoriteCountries = [];
      return [];
    }
  }

  isFavorite(countryFavorite): boolean {
    if (this.favoriteCountries.find(country => country.name.toLowerCase().includes(countryFavorite.name.toLowerCase()))) {
      return true;
    } else {
      return false;
    }
  }
}
