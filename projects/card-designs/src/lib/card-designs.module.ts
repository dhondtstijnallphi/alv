import { NgModule } from '@angular/core';
import { Design2Component } from './design2/design2.component';
import { Design3Component } from './design3/design3.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Design2Component, Design3Component],
  imports: [CommonModule, MatCardModule],
  exports: [Design2Component, Design3Component]
})
export class CardDesignsModule {}
