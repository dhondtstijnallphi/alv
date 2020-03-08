import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { message } from 'projects/alv-types/src/public-api';
import { coerceCssPixelValue } from '@angular/cdk/coercion';

@Component({
  selector: 'cards-design2',
  templateUrl: './design2.component.html',
  styleUrls: ['./design2.component.scss']
})
export class Design2Component implements OnInit {
  @HostBinding('style.height') height: string;
  @HostBinding('style.width') width: string;
  @HostBinding('style.max-height') maxHeight: string;
  @HostBinding('style.max-width') maxWidth: string;

  @Input() message: message;

  constructor() {}

  ngOnInit(): void {
    this.height = coerceCssPixelValue('160px');
    this.width = coerceCssPixelValue('344px');
    this.maxHeight = this.height;
    this.maxWidth = this.width;
  }

  getIcon(type: string): string {
    switch (type) {
      case 'Critical':
        return 'notification_important';
      case 'Error':
        return '#error';
      case 'Warning':
        return 'warning';
      case 'Info':
        return 'info';
      default:
        return 'fingerprint';
    }
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
