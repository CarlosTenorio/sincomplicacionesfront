import { Component, OnInit } from '@angular/core';

import * as Models from 'app/models/app.models';
import { ApiService } from 'app/services/api.service';

import * as moment from 'moment';
import * as _ from 'lodash';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-add-shipping',
  templateUrl: './add-shipping.component.html',
  styleUrls: ['./add-shipping.component.scss']
})
export class AddShippingComponent implements OnInit {

  currentDate: string;
  saving: boolean = false;
  shipping_type: number;
  shipping_costs: number;
  shipping_date: string;

  shippingTypes: any[];

  listCards: Models.ICard[] = [];
  countries: Models.ICountry[];
  expansions: Models.IExpansion[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.shippingTypes = [
      { 'value': Models.ShippingType.Purchase, 'label': Models.ShippingType[Models.ShippingType.Purchase] },
      { 'value': Models.ShippingType.Sale, 'label': Models.ShippingType[Models.ShippingType.Sale] }
    ]
    this.currentDate = moment().format('YYYY-MM-DD');
    this.setDefaultValues(true);
    this.apiService.getCountries().switchMap((countries: Models.ICountry[]) => {
      this.countries = countries;
      return this.apiService.getExpansions();
    })
      .subscribe((expansions: Models.IExpansion[]) => {
        this.expansions = expansions;
        this.addCard();
      });
  }

  /**
   * Add Card on the form
   */
  addCard() {
    this.listCards.push(<Models.ICard>{
      title: "",
      description: "",
      image: null,
      expansion: _.first(this.expansions).id,
      country: _.first(this.countries).id,
      shipping: null,
      quantity: 1,
      price: 0
    });
  }

  /**
   * Reset all inputs to default valures
   */
  setDefaultValues(init: boolean = false) {
    this.shipping_type = _.first(this.shippingTypes).value;
    this.shipping_date = this.currentDate;
    this.shipping_costs = 0;
    this.listCards = [];
    if (!init)
      this.addCard();
  }

  /**
   * Save the shipping on DB
   */
  save({ valid, value }) {
    if (valid && !this.saving) {
      this.saving = true;

      let shipping = <Models.IShipping>{
        date: this.currentDate,
        shipping_type: this.shipping_type,
        shipping_costs: this.shipping_costs,
        shipping_card: this.listCards
      };
      console.log(shipping)
      this.apiService.saveShipping(shipping)
        .finally(() => {
          this.saving = false;
          this.setDefaultValues();
        })
        .subscribe(() => {
          console.log("save successful")
          // this.messageService.sendMessage('save_success', MessageType.success);
        });
    }
  }

  /**
   * Substract the last card on the form
   */
  substractCard() {
    this.listCards.pop();
  }

}
