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

  constructor(private FavoriteCountriesService: FavoriteCountriesService) { }

  ngOnInit(): void { }

  openDetails(): void {
    document.getElementById(this.id).classList.add('is-active');
  }

  addToFavorite(event: Event): void {
    event.stopPropagation();
    this.FavoriteCountriesService.setCountry(this.country);
  }

}
