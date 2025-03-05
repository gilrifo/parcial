import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: false
})
export class ProductDetailPage implements OnInit {
  product: any;
  cartCount = 0;

  constructor(private route: ActivatedRoute,
               private apiService: ApiService,
               private cartService: CartService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getProductById(Number(id)).subscribe(data => {
        this.product = data;
      });

      this.cartService.cartCount$.subscribe(count => {
        this.cartCount = count;
      });
    }
    
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product); 
      alert('Producto agregado al carrito'); 
    }
  }
}
