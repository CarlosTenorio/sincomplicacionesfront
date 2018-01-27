import { Component, OnInit } from '@angular/core';

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
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getShippings()
      .subscribe((shippings: Models.IShipping[]) => {
        this.shippings = shippings;
      });
  }

}
