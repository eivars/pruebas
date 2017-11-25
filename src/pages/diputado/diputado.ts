import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import { DocumentViewer } from '@ionic-native/document-viewer';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-diputado',
  templateUrl: 'diputado.html'
})
export class DiputadoPage {
  goToDiputado(diputado:number) {
     this.diputado=diputado;
     this.navCtrl3.push(DiputadoPage);
   }
  posts: any;

  constructor(public navCtrl3: NavController, public http3: Http, public diputado:number) {

    this.http3.get('http://psrm.es/oficinaabierta/json3.php?id='+diputado).map(res => res.json()).subscribe(data => {
        this.posts = data;
    });

  }
}
