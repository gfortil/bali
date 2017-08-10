import { Component, Input } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {BaliPage} from './../bali/bali'

@Component({
  templateUrl: 'details.html'
})
  //delete the selector to fix a bug in the html header

export class DetailsPage {
  @Input('source') source: any;
    item: any;
    //needs NavParams moule to get the current selected item
    constructor(public navCtrl: NavController, public navParams:NavParams) {
        this.item = navParams.get('item');
    }

}