import { Component, Input, OnInit } from '@angular/core';
import { Storage } from 'src/services/storage';
import { ExercicePreset } from '../exercice-creator/exercice-creator.component';

@Component({
  selector: 'app-exercice-presets',
  templateUrl: './exercice-presets.component.html',
  styleUrls: ['./exercice-presets.component.scss'],
})
export class ExercicePresetsComponent implements OnInit {
  @Input() back: () => void;
  @Input() action?: (preset: ExercicePreset) => void;

  public presets: ExercicePreset[];

  constructor() { }

  ngOnInit() {
    this.presets = Storage.presets;
  }

  run(i: number) {
    if (this.action) {
      this.action(this.presets[i]);
    }

    this.back();
  }
}
