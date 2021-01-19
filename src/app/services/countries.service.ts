import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  endpoint = 'https://restcountries.eu/rest/v2';

  constructor(private httpClient: HttpClient) { }

  getCountries(filter: string = 'all'): Observable<any> {
    return this.httpClient.get(`${this.endpoint}/${filter}`)
  }
}
