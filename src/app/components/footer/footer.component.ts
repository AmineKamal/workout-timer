import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page, State } from 'src/services/state';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  public currentPage: Page;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    State.currentPage.subscribe((page) => {
      this.currentPage = page;
      this.changeDetectorRef.detectChanges();
    });
  }

  async goto(page: Page) {
    State.currentPage.next(page);
    this.router.navigate([page]);
  }
}
