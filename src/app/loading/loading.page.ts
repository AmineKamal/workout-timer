import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { noSleep } from 'src/services/nosleep';
import { Sounds } from 'src/services/sounds';
import { State } from 'src/services/state';
import { Storage } from 'src/services/storage';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private router: Router) { }

  async ngOnInit() {
    this.activateUserDependencies();
    document.addEventListener('visibilitychange', () => this.handleVisibilityChange, false);
    Storage.load();
    State.loaded.next(true);
    this.router.navigate(['home']);
  }

  private activateUserDependencies() {
    this.activateNoSleep();
    this.activateSounds();
  }

  private activateNoSleep() {
    const noSleepEvent = async () => {
      document.removeEventListener('click', noSleepEvent);
      await noSleep.enable();
      noSleep.disable();
    };

    document.addEventListener('click', noSleepEvent);
  }

  private activateSounds() {
    const soundsEvent = async () => {
      document.removeEventListener('click', soundsEvent);
      await Sounds.load();
    };

    document.addEventListener('click', soundsEvent);
  }

  private handleVisibilityChange() {
    if (!document.hidden) {
      this.activateUserDependencies();
    }
  }
}
