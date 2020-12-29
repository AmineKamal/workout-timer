import { Component, Input, OnInit } from '@angular/core';

export interface DataElement {
  name: string;
}

@Component({
  selector: 'app-data-modal-picker',
  templateUrl: './data-modal-picker.component.html',
  styleUrls: ['./data-modal-picker.component.scss'],
})
export class DataModalPickerComponent<T extends DataElement> implements OnInit {
  @Input() title: string;
  @Input() data: T[];
  @Input() back: () => void;
  @Input() action?: (element: T) => void;
  @Input() color: string;

  constructor() { }

  ngOnInit() {}

  run(i: number) {
    if (this.action) {
      this.action(this.data[i]);
    }

    this.back();
  }
}
