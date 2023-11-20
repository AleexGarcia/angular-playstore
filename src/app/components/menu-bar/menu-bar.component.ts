import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  isOpen: boolean = false;
  isTablet: boolean = false;
  readonly breakpoint$ = this.breakPointObserver.observe(['(min-width: 768px)']);

  constructor(private breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpoint$.subscribe(() => {
      this.breakpointChanged();
    });
  }

  toggleMenu() {
    this.isOpen = this.isOpen ? false : true;
  }

  private breakpointChanged() {
    if (this.breakPointObserver.isMatched('(min-width: 768px)')) {
      this.isOpen = true;
      this.isTablet = false;
    }else{
      this.isOpen = false;
      this.isTablet = true;
    }
  }
}
