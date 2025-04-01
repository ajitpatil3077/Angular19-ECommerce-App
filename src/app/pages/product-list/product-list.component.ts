import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  // async ngOnInit(){
  //   const res = await fetch('https://fakestoreapi.com/products');
  //   const data = await res.json();
  //   this.products.set(data);
  // }
  products = signal<Product[]>([
    {
      id: 1, title: 'Opna Women\'s Short', price: 100,
      image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
      stock: 5
    },
    {
      id: 2, title: 'Backpack, Fits 15 Laptops', price: 200,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      
    },
    {
      id: 3, title: 'Rain Jacket Women', price: 300,
      image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
      stock: 3
    },{
      id: 4, title: 'Mens Cotton Jacket', price: 400,  
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      stock: 2
    }
  ]);
}