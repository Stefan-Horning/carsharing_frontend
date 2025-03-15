import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { PopUpCarComponent } from './pop-up-car/pop-up-car.component';

@Component({
  selector: 'app-car-gallery',
  imports: [CommonModule, CardComponent,PopUpCarComponent],
  templateUrl: './car-gallery.component.html',
  styleUrl: './car-gallery.component.scss'
})
export class CarGalleryComponent {
  cars = [
    {
      make: 'Toyota',
      model: 'Corolla',
      year: 2020,
      price: 30000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'Honda',
      model: 'Civic',
      year: 2020,
      price: 30000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'Ford',
      model: 'Fusion',
      year: 2020,
      price: 30000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'Porsche',
      model: '911 GT3 RS',
      year: 2020,
      price: 30000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'Chevrolet',
      model: 'Corvette',
      year: 2020,
      price: 30000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'BMW',
      model: 'M3',
      year: 2021,
      price: 70000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'Audi',
      model: 'A4',
      year: 2021,
      price: 40000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2021,
      price: 50000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'Tesla',
      model: 'Model S',
      year: 2021,
      price: 80000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'Nissan',
      model: 'Altima',
      year: 2021,
      price: 25000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'Volkswagen',
      model: 'Golf',
      year: 2021,
      price: 30000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'Hyundai',
      model: 'Elantra',
      year: 2021,
      price: 20000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'Kia',
      model: 'Optima',
      year: 2021,
      price: 22000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    },
    {
      make: 'Mazda',
      model: '3',
      year: 2021,
      price: 21000,
      img: './img/Porsche.webp',
      like: false,
      features: ['Bluetooth', 'Backup Camera', 'Heated Seats']
    }
  ];

  popupVisible: boolean = false;
  selectedCar: any = null;

  openPopup(car: any) {
    this.selectedCar = car;
    this.popupVisible = true;  // Pop-up anzeigen
  }

  closePopup() {
    this.popupVisible = false;  // Pop-up schließen
  }
}
