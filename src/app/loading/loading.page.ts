import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sounds } from 'src/utils/sounds';
import { State } from 'src/utils/state';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private router: Router) { }

  async ngOnInit() {
    await Sounds.load();
    this.router.navigate(['home']);
    State.loaded = true;
  }

}
