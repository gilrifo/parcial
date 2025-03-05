import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { CategoryListComponent } from '../components/category-list/category-list.component';

@NgModule({
  declarations: [
    ProductCardComponent, 
    CategoryListComponent 
  ],
  imports: [
    CommonModule, 
    IonicModule
  ],
  exports: [
    ProductCardComponent, 
    CategoryListComponent
  ]
})
export class SharedModule {}
