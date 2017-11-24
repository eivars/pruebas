import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get('http://psrm.es/oficinaabierta/json1.php').map(res => res.json()).subscribe(data => {
        this.posts = data;
    });

  }
}
