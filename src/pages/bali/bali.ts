import { Component } from '@angular/core';
import { NavController, AlertController, MenuController} from 'ionic-angular';
import {BaliService} from '../../app/services/bali.service';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'bali',
  templateUrl: 'bali.html',
  styles: [`
      .thumbnail-size {
        width: 56px;
      }
  `]
})
export class BaliPage {
  items: any;
  source: any;
  sortBy:any;
  key = "26a1f9908b6843559c0dbc5cda43fa22"; //api authentification key 
  apiResponse: string;

  constructor(public navCtrl: NavController, private baliService: BaliService, private alertCtrl: AlertController) {
    this.getDefaults();
  }

  ngOnInit(){
    this.getNews(this.key, this.source, this.sortBy);
  }

//necessary to remember user's choice
  getDefaults(){
    if(localStorage.getItem('source') != null){
      this.source = localStorage.getItem('source');
    } else {
      this.source = 'google-news';
    }

    if(localStorage.getItem('sortBy') != null){
      this.sortBy = localStorage.getItem('sortBy');

    } else {
      this.sortBy = "top";
      
    }
  }



  getNews(key, source, sortBy){
    this.baliService.getNews(key, source, sortBy).subscribe(response => {
      this.items = response.articles;
      this.apiResponse = response;
  });
  
} 
  

  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item:item
    });
  }

  changeSort(){
    this.getNews(this.key, this.source, this.sortBy);
    if(this.source === "google-news" && this.sortBy !== "top"){
    this.notFound();
    }
  }

  notFound() {
  let alert = this.alertCtrl.create({
    title: 'Alert',
    subTitle: "The news source you've selected isn't available sorted this way",
    buttons: ['Dismiss']
  });
  alert.present();
}
}