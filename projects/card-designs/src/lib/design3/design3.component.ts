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

  @Input() message: message;

  constructor() {}

  ngOnInit(): void {
    this.height = coerceCssPixelValue(125);
    this.width = coerceCssPixelValue(344);
  }
}
