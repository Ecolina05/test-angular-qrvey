import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit, OnDestroy {

  @Input() country: any;
  @Input() id: string;
  allCountriesSubs: Subscription;
  allCountries

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  ngOnDestroy(): void {
    if (this.allCountriesSubs) {
      this.allCountriesSubs.unsubscribe();
    }
  }

  getCountries(): void {
    this.allCountriesSubs = this.countriesService.getCountries().subscribe(
      countries => this.allCountries = countries,
      error => console.log(error)
    );
  }

  getCountryName(cioc: string): any {
    let country;

    if (this.allCountries) {
      country = this.allCountries.find(country => country.cioc == cioc);
    }
    if (country) {
      return country.name.toUpperCase() + ', ';
    }
  }

  closeDetails(): void {
    document.getElementById(this.id).classList.remove('is-active');
  }

}
