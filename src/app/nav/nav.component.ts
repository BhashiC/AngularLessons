import { Component } from '@angular/core';

@Component({
  // selector: 'app-nav',   // selector as a html tag
  // selector: '[app-nav]', // selector as a html attribute
  selector: '.app-nav',     // selector as a css class
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor() { }
  siteName: string = 'eShopping';
}
