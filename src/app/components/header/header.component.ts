import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentUrl!: any | null;
  openMobile:boolean = false;

  constructor(private router: Router) { 
    this.getURL();
  }

  openNav(){
    this.openMobile = !this.openMobile;
  }


  ngOnInit(): void {
    this.getURL();
  }
  
  getURL(){
    const url = location.href;

    // Gibt nur das Ende des URL-Pfades zurück
    let pathname = location.pathname;
    pathname = pathname.slice(1);

    if(pathname == ''){
      pathname = 'Home';
      this.currentUrl = 'Home';
    }else{
      this.currentUrl = pathname;
    }
  
  }
}
