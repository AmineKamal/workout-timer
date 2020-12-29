import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    updates: SwUpdate
  ) {
    this.initializeApp();

    updates.available.subscribe(async event => {
        await updates.activateUpdate();
        this.updateApp(event);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  updateApp(ev: UpdateAvailableEvent) {
    alert(`The app is updating from version ${ev.current} to version ${ev.available}`);
    document.location.reload();
   }
}
