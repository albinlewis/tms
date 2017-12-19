import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  value: Number;

  constructor() {
    this.value = 50;
   }

  ngOnInit() {
  }

}
