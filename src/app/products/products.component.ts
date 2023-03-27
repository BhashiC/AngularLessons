import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { id: 1, name: "Analog Watch", price: 109, color: 'Black', available: 'Available', image: '/assets/products/img1.jpg' },
    { id: 2, name: "Smart TV", price: 3339, color: 'Black', available: 'Available', image: '/assets/products/img2.jpg' },
    { id: 3, name: "Apple iPhone 12", price: 1855, color: 'Black', available: 'Not Available', image: '/assets/products/img3.jpg' },
    { id: 4, name: "LG Washing Machine", price: 1765, color: 'White', available: 'Available', image: '/assets/products/img4.jpg' },
    { id: 5, name: "LG Refrigerator", price: 2815, color: 'White', available: 'Not Available', image: '/assets/products/img5.jpg' },
    { id: 6, name: "Dell Inspiron Ryzen 7", price: 2145, color: 'White', available: 'Available', image: '/assets/products/img6.jpg' },
  ]
}
