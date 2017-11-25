import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import { DocumentViewer } from '@ionic-native/document-viewer';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-iniciativas',
  templateUrl: 'iniciativas.html'
})
export class IniciativasPage {

  posts: any;

  constructor(public navCtrl2: NavController, public http2: Http) {

    this.http2.get('http://psrm.es/oficinaabierta/json2.php').map(res => res.json()).subscribe(data => {
        this.posts = data;
    });

  }
}
