import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'; 


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  standalone: false
})
export class CategoryListComponent implements OnInit {
  categories: any;

  @Output() categorySelected = new EventEmitter<string>();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCategories().subscribe(categories => this.categories = categories);
  }

  onCategoryChange(selectedCategory: string) {
    this.categorySelected.emit(selectedCategory);
  }
}
