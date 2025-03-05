import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone:false
})
export class AppComponent {
  loading: boolean = true; 

  constructor() {
    
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
