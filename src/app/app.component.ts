import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  filters;

  constructor() {

  }

  ngOnInit(): void {

  }

  getFilters(filters): void {
    this.filters = filters;
  }

}
