import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() filters = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  setFilters(filters): void {
    this.filters.emit(filters);
  }
}
