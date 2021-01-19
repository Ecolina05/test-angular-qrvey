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
    console.log(this.country);
  }

  closeDetails(): void {
    const modal = document.getElementsByClassName('modal');
    for (let i = 0; i < modal.length; i++) {
      modal[i].classList.remove('is-active');
    }
  }

}
