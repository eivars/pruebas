import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { IniciativasPage } from '../pages/iniciativas/iniciativas';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { DiputadoPage } from '../pages/diputado/diputado';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    HomePage,
    IniciativasPage,
    DiputadoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    HomePage,
    IniciativasPage,
    DiputadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
