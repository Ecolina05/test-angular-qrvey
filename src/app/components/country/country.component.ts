import { Component, Input, OnInit } from '@angular/core';
import { FavoriteCountriesService } from 'src/app/services/favorite-countries.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.sass']
})
export class CountryComponent implements OnInit {

  @Input() country;
  @Input() id: string;

  constructor(public favoriteCountriesService: FavoriteCountriesService) { }

  ngOnInit(): void {
    this.favoriteCountriesService.getFavoriteCountries();
  }

  openDetails(): void {
    document.getElementById(this.id).classList.add('is-active');
  }

  addToFavorite(event: Event): void {
    event.stopPropagation();
    this.favoriteCountriesService.setCountry(this.country);
  }

  removeFavorite(event: Event): void {
    event.stopPropagation();
    this.favoriteCountriesService.removeCountry(this.country);
  }

  get isFavorite(): boolean {
    return this.favoriteCountriesService.isFavorite(this.country);
  }
}
