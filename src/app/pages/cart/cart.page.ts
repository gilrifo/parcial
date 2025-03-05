import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone:false
})
export class CartPage implements OnInit {
  cartItems: any; 
  cartTotal = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items; 
    });

    this.cartService.cartTotal$.subscribe(total => {
      this.cartTotal = total; 
    });
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
