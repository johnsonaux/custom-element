import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import { TestElementComponent } from './test-element/test-element.component';
import {createCustomElement} from '@angular/elements';

const firebaseConfig = {
  apiKey: 'AIzaSyDyQ7JcY_MG2Mh_4-Hwz2MWHiPnrzFosMA',
  authDomain: 'maau-custom.firebaseapp.com',
  projectId: 'maau-custom',
  storageBucket: 'maau-custom.appspot.com',
  messagingSenderId: '1035453008314',
  appId: '1:1035453008314:web:ee613d211d879b0229b583'
};

@NgModule({
  declarations: [
    AppComponent,
    TestElementComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  entryComponents: [TestElementComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customEl = createCustomElement(
      TestElementComponent, {injector: this.injector}
    );

    customElements.define('maau-custom', customEl);
  }

  ngDoBootstrap() {

  }
}
