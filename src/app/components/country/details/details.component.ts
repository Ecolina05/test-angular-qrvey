import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  @Input() country: any;
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

  closeDetails(): void {
    document.getElementById(this.id).classList.remove('is-active');
  }

}
