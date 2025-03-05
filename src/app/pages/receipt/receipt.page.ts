import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
  standalone:false
})
export class ReceiptPage implements OnInit {
  name = '';
  email = '';
  address = '';
  total = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.email = params['email'];
      this.address = params['address'];
      this.total = params['total'];
    });
  }
}
