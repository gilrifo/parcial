import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: false 
})
export class ProductCardComponent {
  @Input() product: any;
  constructor(private cartService: CartService,private router: Router) {} 

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert('Producto agregado al carrito'); 
    }
  }

  goToDetails() {
    this.router.navigate(['/product-detail', this.product.id]); 
  }
}
