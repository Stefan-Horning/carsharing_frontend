import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-edit-search',
  imports: [MatSliderModule,FormsModule,NgxSliderModule,CommonModule],
  templateUrl: './popup-edit-search.component.html',
  styleUrl: './popup-edit-search.component.scss'
})
export class PopupEditSearchComponent {
  minValue: number = 0;
  maxValue: number = 20000;
  sliderOptions: Options = {
    floor: 0,
    ceil: 20000,
    step: 100,
    translate: (value: number): string => {
      return value.toLocaleString() + ' €';
    }
  };
}
