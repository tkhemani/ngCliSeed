import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "uuiXDBcfoae3cuvuLGBTRXQk2ex6WBYzgkqIcvEU",
    authDomain: null,
    databaseURL: "https://hatplay.firebaseio.com",
    storageBucket: null,
  })
]);

