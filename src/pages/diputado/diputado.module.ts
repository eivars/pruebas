import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiputadoPage } from './diputado';

@NgModule({
  declarations: [
    DiputadoPage,
  ],
  imports: [
    IonicPageModule.forChild(DiputadoPage),
  ],
})
export class DiputadoPageModule {}
