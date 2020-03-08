import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { message } from 'projects/alv-types/src/public-api';
import { coerceCssPixelValue } from '@angular/cdk/coercion';

@Component({
  selector: 'cards-design3',
  templateUrl: './design3.component.html',
  styleUrls: ['./design3.component.scss']
})
export class Design3Component implements OnInit {
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

  hexToRgb(hex): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

  hexInverseBw(hex): string {
    const rgb = this.hexToRgb(hex);
    const luminance = 0.2126 * rgb['r'] + 0.7152 * rgb['g'] + 0.0722 * rgb['b'];
    return luminance < 140 ? '#ffffff' : '#000000';
  }
}
