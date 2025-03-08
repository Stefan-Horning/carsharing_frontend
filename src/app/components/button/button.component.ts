import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() name: string = '';  
  @Input() color: string = '';

  backgroundColor: string = '#FF5C00'; // Default Orange

  ngOnInit() {
    if (this.color !== '') {
      this.backgroundColor = this.getContrastingColor(this.color);
    }
  }

  getContrastingColor(color: string): string {
    // Simple example to return a contrasting color
    // You can implement a more sophisticated algorithm if needed
    return color === 'orange' ? '#FF5C00' : '#00B8A9'; // Blue for Orange, otherwise default Orange
  }
}
