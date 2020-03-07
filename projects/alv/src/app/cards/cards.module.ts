import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Design1Component } from './design1/design1.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [Design1Component],
  imports: [
    CommonModule,
    MatCardModule
  ], exports: [ Design1Component]
})
export class CardsModule { }
