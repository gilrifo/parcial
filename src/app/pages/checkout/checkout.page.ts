import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: false
})
export class CheckoutPage {
  customer = { name: '', email: '', address: '' };
  card = { number: '', expiry: '', cvv: '' };
  total = 0;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.cartTotal$.subscribe(total => {
      this.total = total;
    });
  }

  async processPayment() {
    const toast = await this.toastController.create({
      message: 'Procesando pago...',
      duration: 2000,
      position: 'top',
      color: 'success'
    });

    await toast.present();

    setTimeout(() => {
      this.cartService.clearCart();
      this.router.navigate(['/receipt'], {
        queryParams: {
          name: this.customer.name,
          email: this.customer.email,
          address: this.customer.address,
          total: this.total
        }
      });
    }, 2500);
  }
}

