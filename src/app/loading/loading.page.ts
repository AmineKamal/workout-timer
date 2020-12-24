import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { noSleep } from 'src/services/nosleep';
import { Sounds } from 'src/services/sounds';
import { State } from 'src/services/state';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private router: Router) { }

  async ngOnInit() {
    this.activateNoSleep();
    this.activateSounds();
    State.loaded.next(true);
    this.router.navigate(['home']);
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
}
