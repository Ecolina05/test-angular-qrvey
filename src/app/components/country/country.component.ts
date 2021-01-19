import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.sass']
})
export class CountryComponent implements OnInit {

  @Input() country: any;
  @Input() id: string;
  modalToShow: any;

  constructor() { }

  ngOnInit(): void {
  }

  openDetails(): void {
    // const modalElement = document.getElementById(this.id);
    // const modal = document.getElementsByClassName('modal');
    // for (let i = 0; i < modal.length; i++) {
    //   modal[i].classList.add('is-active');
    // }
  }

}
