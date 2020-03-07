import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { message } from 'projects/alv-types/src/public-api';
import { coerceCssPixelValue } from '@angular/cdk/coercion';

@Component({
  selector: 'allphi-design1',
  templateUrl: './design1.component.html',
  styleUrls: ['./design1.component.scss']
})
export class Design1Component implements OnInit {
  @HostBinding('style.height') height: string;
  @HostBinding('style.width') width: string;

  @Input() message: message;

  constructor() {}

  ngOnInit(): void {
    this.height = coerceCssPixelValue(125);
    this.width = coerceCssPixelValue(344);
  }

  getColor(type: string): string {
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
