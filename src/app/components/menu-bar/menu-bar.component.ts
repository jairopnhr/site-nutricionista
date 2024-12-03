import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit {


  isMenuOpen = false;  
  isMobile = false;    
  isScrolled = false;
  
  constructor() {}
  
  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 700; 
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMobile = (event.target as Window).innerWidth <= 700;
  }
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50; 
  }
  
}
