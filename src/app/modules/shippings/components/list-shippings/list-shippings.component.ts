import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as Models from 'app/models/app.models';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-list-shippings',
  templateUrl: './list-shippings.component.html',
  styleUrls: ['./list-shippings.component.scss']
})
export class ListShippingsComponent implements OnInit {

  shippings: Models.IShipping[] = [];
  shippingTypes = Models.ShippingType;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService.getShippings()
      .subscribe((shippings: Models.IShipping[]) => {
        this.shippings = shippings;
      });
  }

  /**
   * Redirect to shipping Detail by ID
   */
  navigateToDetail(shipping_id: number) {
    this.router.navigate(['/shippings/detail', shipping_id]);
  }
}
