import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { min } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pop-up-car',
  imports: [CommonModule, ButtonComponent, FormsModule],
  templateUrl: './pop-up-car.component.html',
  styleUrl: './pop-up-car.component.scss'
})
export class PopUpCarComponent {
  @Input() selectedCar!: {
    make: string;
    model: string;
    year: number;
    price: number;
    img: string;
    like: boolean;
    features: string[];
  };
  @Output() close = new EventEmitter<void>();

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

  liked = false
  toggleLike(event: MouseEvent) {
    event.stopPropagation();
    this.liked = !this.liked;
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

  onEndDateChange(event: Event) {
    this.endDate = (event.target as HTMLInputElement).value;
    this.cost = this.calculateCost();
  }

  calculateCost(): number {
    if (!this.startDate || !this.endDate) {
      return 0;
    }

    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    const diff = end.getTime() - start.getTime();
    const days = diff / (1000 * 60 * 60 * 24);

    return days * this.selectedCar.price;
  }

  onClose() {
    this.close.emit();
  }

  onPopUpClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
