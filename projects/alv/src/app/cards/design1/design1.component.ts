import { Component, OnInit, Input } from '@angular/core';
import { message } from 'projects/alv-types/src/public-api';

@Component({
  selector: 'allphi-design1',
  templateUrl: './design1.component.html',
  styleUrls: ['./design1.component.scss']
})
export class Design1Component implements OnInit {
  @Input() message: message;

  constructor() {}

  ngOnInit(): void {}

  getColor(type: string) {
    switch (type) {
      case 'Critical':
        return '#C62828';
      case 'Error':
        return '#EB5757';
      case 'Warning':
        return '#F2994A';
      case 'Info':
        return '#56CCF2';
      default:
        return '#000000';
    }
  }
}
