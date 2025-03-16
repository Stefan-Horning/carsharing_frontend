import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { SearchComponent } from './search/search.component';
import { CarGalleryComponent } from '../components/car-gallery/car-gallery.component';
import { PopupEditSearchComponent } from './popup-edit-search/popup-edit-search.component';
import { AuthComponent } from "../auth/auth.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  imports: [CommonModule, HeaderComponent, SearchComponent, CarGalleryComponent, PopupEditSearchComponent]
})
export class HomepageComponent {
  popupVisible: boolean = false;

  openPopup() {
    this.popupVisible = true;  // Pop-up anzeigen
  }

  closePopup() {
    this.popupVisible = false;  // Pop-up schließen
  }
}
