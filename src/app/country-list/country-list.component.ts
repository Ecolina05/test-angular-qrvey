import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountriesService } from '../services/countries.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.sass']
})
export class CountryListComponent implements OnInit, OnDestroy, OnChanges {

  @Input() filters;
  allCountriesSubs: Subscription;
  countriesFilteredSubs: Subscription;
  allCountries: any[];
  countriesGrouped: any = {};
  continents: string[] = [];

  constructor(private countriesService: CountriesService, public utilServices: UtilsService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  ngOnChanges(): void {
    if (this.filters) {
      this.applyFilters();
    }
  }

  ngOnDestroy(): void {
    if (this.allCountriesSubs)
      this.allCountriesSubs.unsubscribe();
    if (this.allCountriesSubs)
      this.countriesFilteredSubs.unsubscribe();
  }

  getCountries(): void {
    this.allCountriesSubs = this.countriesService.getCountries().subscribe(
      countries => {
        this.allCountries = countries;
        this.getContinents();
        if (this.continents?.length > 0) {
          this.continents.forEach(continent => {
            this.groupCountriesByContinent(continent);
          });
        }
      },
      error => console.log(error)
    );
  }

  groupCountriesByContinent(continent: string): void {
    this.countriesGrouped[continent] = this.allCountries.filter(country => country.region.toLowerCase() === continent.toLowerCase());
  }

  getContinents(): void {
    this.continents = [...new Set(this.allCountries.map(country => country.region))].filter(country => country && country != 'Polar');

    localStorage.setItem('continents', `${this.continents}`);
    window.dispatchEvent(new Event('getContinents'));
  }

  get filtersToSearch(): string {
    switch (this.filters.value) {
      case 'all':
        return 'all'
      case 'region':
        return `region/${this.filters.filterSelected}`;
      case 'fav':
        return 'favorites'
    }

  }

  applyFilters(): void {
    if (this.filters.filterSelected === 'all') {
      this.getCountries();
    } else {
      this.countriesFilteredSubs = this.countriesService.getCountries(this.filtersToSearch).subscribe(
        results => {
          this.countriesGrouped = {};
          this.countriesGrouped[this.filters.filterSelected] = results
        }
      );
    }
  }
}
