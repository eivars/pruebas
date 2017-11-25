import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DiputadoPage } from '../diputado/diputado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  goToDiputado(diputado) {
     this.navCtrl.push(DiputadoPage);
   }
  posts: any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get('http://psrm.es/oficinaabierta/json1.php').map(res => res.json()).subscribe(data => {
        this.posts = data;
    });

  }
  itemSelected(item: string) {
  console.log("Selected Item", item);
}
}
