import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import * as Models from 'app/models/app.models';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'detail-shipping',
  templateUrl: './detail-shipping.component.html',
  styleUrls: ['./detail-shipping.component.scss']
})
export class DetailShippingComponent implements OnInit {

  // id: number;
  // shipping: Models.IShipping;
  //
  // constructor(
  //   private apiService: ApiService,
  //   private route: ActivatedRoute,
  //   private params: Params
  // ) { }
  //
  ngOnInit() {
    // this.load();
  }
  //
  // load() {
  //   this.route.params.subscribe((params: Params) => {
  //     this.id = +params['id']; // (+) converts string 'id' to a number
  //
  //     this.apiService.getShipping(this.id).subscribe((shipping: Models.IShipping) => {
  //       this.shipping = shipping;
  //       console.log(this.shipping);
  //     });
  //   });
  // }
}
