import { Component, EventEmitter, Output } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-popup-edit-search',
  imports: [MatSliderModule,FormsModule,NgxSliderModule,CommonModule,SearchComponent,ButtonComponent],
  templateUrl: './popup-edit-search.component.html',
  styleUrl: './popup-edit-search.component.scss'
})
export class PopupEditSearchComponent {
  minValue: number = 0;
  maxValue: number = 50000;
  @Output() close = new EventEmitter<void>();
  sliderOptions: Options = {
    floor: 0,
    ceil: 50000,
    step: 100,
    translate: (value: number): string => {
      return value.toLocaleString() + ' €';
    }
  };

  today: string;
  minEndDate: string;
  startDate: string = ''; 
  endDate: string = ''; 
  cost: number = 0;

  constructor() {
    const todayDate = new Date();
    this.today = todayDate.toISOString().split('T')[0];
    this.minEndDate = this.today;
  }

  onStartDateChange(event: Event) {
    this.startDate = (event.target as HTMLInputElement).value;
    
    // minEndDate einen Tag nach startDate setzen
    const start = new Date(this.startDate);
    start.setDate(start.getDate() + 1); // Einen Tag hinzufügen
    this.minEndDate = start.toISOString().split('T')[0];
  
    // Falls das Enddatum vor dem neuen minEndDate liegt, setze es zurück
    if (this.endDate && this.endDate < this.minEndDate) {
      this.endDate = ''; // End-Date zurücksetzen
    }
  }

  onClose() {
    this.close.emit();
  }

  onEndDateChange(event: Event) {
    this.endDate = (event.target as HTMLInputElement).value;
  }

  onPopUpClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
