import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as Models from 'app/models/app.models';
import { ApiService } from 'app/services/api.service';

import * as moment from 'moment';
import * as _ from 'lodash';

import { finalize, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-shipping',
  templateUrl: './add-shipping.component.html',
  styleUrls: ['./add-shipping.component.scss']
})
export class AddShippingComponent implements OnInit {

  currentDate: string;
  shipping_date: string;
  shipping_type: number;
  shipping_costs: number;
  saving: boolean = false;
  submitted: boolean = false;

  shippingTypes: any[];

  listCards: Models.ICard[] = [];
  countries: Models.ICountry[];
  expansions: Models.IExpansion[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.shippingTypes = [
      {
        'value': Models.ShippingType.Purchase,
        'label': Models.ShippingType[Models.ShippingType.Purchase]
      },
      {
        'value': Models.ShippingType.Sale,
        'label': Models.ShippingType[Models.ShippingType.Sale]
      }
    ]
    this.currentDate = moment().format('YYYY-MM-DD');
    this.setDefaultValues(true);
    this.apiService.getCountries().pipe(switchMap((countries: Models.ICountry[]) => {
      this.countries = countries;
      return this.apiService.getExpansions();
    }))
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
      price: 1.01
    });
  }

  /**
   * Reset all inputs to default valures
   */
  setDefaultValues(init: boolean = false) {
    this.submitted = false;
    this.shipping_type = _.first(this.shippingTypes).value;
    this.shipping_date = this.currentDate;
    this.shipping_costs = 1.01;
    this.listCards = [];
    if (!init)
      this.addCard();
  }

  /**
   * Save the shipping on DB
   */
  save(addCardForm: NgForm) {
    this.submitted = true;
    if (addCardForm.valid && !this.saving) {
      this.saving = true;
      let shipping = <Models.IShipping>{
        date: this.currentDate,
        type: this.shipping_type,
        costs: this.shipping_costs,
        cards: this.listCards
      };
      this.apiService.saveShipping(shipping)
        .pipe(finalize(() => {
          this.saving = false;
          this.setDefaultValues();
        }))
        .subscribe(() => {
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
