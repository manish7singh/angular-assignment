import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { DisplayService } from 'src/app/feature/display/display.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DisplayComponent],
  providers: [
    DisplayService
  ]
})
export class FeatureModule { }
