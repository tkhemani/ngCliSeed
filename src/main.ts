import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

var config: any =  {
  apiKey: "uuiXDBcfoae3cuvuLGBTRXQk2ex6WBYzgkqIcvEU",
  //piKey: null,
  authDomain: "hatplay.firebaseapp.com",
  //authDomain: null,
  databaseURL: "https://hatplay.firebaseio.com",
  //storageBucket: null,
};

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app
    //  defaultFirebase('https://hatplay.firebaseio.com')
  //    "firebase": "2.4.0",
//     "angularfire2": "2.0.0-alpha.8"
  defaultFirebase(config)
]);

