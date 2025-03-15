import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

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
  };

  liked = false;

  ngOnInit() {
    if (this.car.like == true) {
      this.liked = true;
    }
  }

  toggleLike() {
    this.liked = !this.liked;
  }
}
