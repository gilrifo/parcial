import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'; 
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:false
})
export class HomePage implements OnInit {
  products: any ; 
  cartCount = 0;

  constructor(private apiService: ApiService,
          private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadProducts();
    
  }

  
  loadProducts() {
    this.apiService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  
  filterByCategory(category: string) {
    if (!category) {
      this.loadProducts(); 
      return;
    }

    this.apiService.getProductsByCategory(category).subscribe(products => {
      this.products = products;
    });
  }
}
