import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { IniciativasPage } from '../iniciativas/iniciativas';
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  goToOficina() {
     this.navCtrl.push(HomePage);
   }
   goToIniciativas() {
      this.navCtrl.push(IniciativasPage);
    }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
}
