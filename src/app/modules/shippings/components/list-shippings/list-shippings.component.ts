import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import * as Models from 'app/models/app.models';
import { ApiService } from 'app/services/api.service';

import { Subscription } from 'rxjs/Subscription';
import { forEach } from 'lodash';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-list-shippings',
  templateUrl: './list-shippings.component.html',
  styleUrls: ['./list-shippings.component.scss']
})
export class ListShippingsComponent implements OnInit, OnDestroy {

  shippings: Models.IShipping[] = [];
  cols: any[];
  types: SelectItem[];
  shippingTypes = Models.ShippingType;

  private subscriptions: Subscription[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cols = [
      { field: 'type', header: 'Type', icon: 'fa fa-handshake-o' },
      { field: 'date', header: 'Date', icon: 'fa fa-calendar' },
      { field: 'costs', header: 'Costs', icon: 'fa fa-eur' }
    ];

    this.types = [
      { label: 'All', value: null },
      { label: 'Purchase', value: 0 },
      { label: 'Sale', value: 1 }
    ];

    this.subscriptions.push(this.apiService.getShippings()
      .subscribe((shippings: Models.IShipping[]) => {
        this.shippings = shippings;
      }));
  }

  /**
   * Destroy all the subscriptions.
   */
  ngOnDestroy() {
    forEach(this.subscriptions, (subscription) => { subscription.unsubscribe(); })
  }

  /**
   * Redirect to order Detail by ID
   * @param shipping_id Order Id
   */
  navigateToDetail(shipping_id: number) {
    this.router.navigate(['/shippings/detail', shipping_id]);
  }
}
