import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartPage } from './pages/cart/cart.page';
import { ProductDetailPage } from './pages/product-detail/product-detail.page';
import { CheckoutPage } from './pages/checkout/checkout.page';
import { ReceiptPage } from './pages/receipt/receipt.page';
const routes: Routes = [
  {
    path: 'cart', component: CartPage

  },
  {
     path: 'product-detail/:id', component: ProductDetailPage 

  },
  {
  path: 'checkout', component: CheckoutPage 
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'receipt',
    loadChildren: () => import('./pages/receipt/receipt.module').then( m => m.ReceiptPageModule)
  },
  { path: 'receipt', component: ReceiptPage }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
