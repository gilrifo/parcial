import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]); 
  cart$ = this.cart.asObservable(); 
  cartCount$ = new BehaviorSubject<number>(0);
  cartTotal$ = new BehaviorSubject<number>(0); 

  addToCart(product: any) {
    const currentCart = this.cart.getValue();
    currentCart.push(product);
    this.cart.next(currentCart); 
    this.cartCount$.next(currentCart.length); 
    this.updateTotal();
  }

  removeFromCart(index: number) {
    const currentCart = this.cart.getValue();
    currentCart.splice(index, 1);
    this.cart.next(currentCart);
    this.cartCount$.next(currentCart.length); 
    this.updateTotal();
  }

  clearCart() {
    this.cart.next([]); 
    this.cartCount$.next(0);
    this.cartTotal$.next(0);
  }

  getCart(): any[] {
    return this.cart.getValue();
  }

  private updateTotal() {
    const currentCart = this.cart.getValue();
    const total = currentCart.reduce((sum, item) => sum + item.price, 0);
    this.cartTotal$.next(total);
  }
}

