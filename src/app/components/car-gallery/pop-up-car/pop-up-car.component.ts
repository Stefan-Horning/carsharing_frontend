import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-pop-up-car',
  imports: [CommonModule,ButtonComponent],
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

  liked = false
  toggleLike(event: MouseEvent) {
    event.stopPropagation();
    this.liked = !this.liked;
  }

  onClose() {
    this.close.emit();
  }

  onPopUpClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
