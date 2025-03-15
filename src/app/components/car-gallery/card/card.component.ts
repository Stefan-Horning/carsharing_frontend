import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input() car!: {
    make: string;
    model: string;
    year: number;
    price: number;
    img: string;
    like: boolean;
    features: string[];
  };
  @Output() cardClicked = new EventEmitter<any>();

  liked = false;

  ngOnInit() {
    if (this.car.like == true) {
      this.liked = true;
    }
  }

  toggleLike(event: MouseEvent) {
    event.stopPropagation();
    this.liked = !this.liked;
  }

  onCardClick(event: MouseEvent) {
    this.cardClicked.emit(this.car);  // Emitte das Car-Objekt an den Parent
  }
}
