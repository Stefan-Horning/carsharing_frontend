import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule,HeaderComponent,SearchComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
