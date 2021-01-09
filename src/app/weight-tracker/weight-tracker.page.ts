import { Component, OnInit } from '@angular/core';
import { Storage } from 'src/services/storage';

export interface Macros {
  protein: number;
  fat: number;
  carbs: number;
  calories: number;
}

@Component({
  selector: 'app-weight-tracker',
  templateUrl: './weight-tracker.page.html',
  styleUrls: ['./weight-tracker.page.scss'],
})
export class WeightTrackerPage implements OnInit {
  lossPercent: number;
  macros: Macros;
  showMacroForm = false;
  currentWeight: number | string;
  newWeight: number;
  hideWeight: boolean;

  constructor() { }

  ngOnInit() {
    this.lossPercent = Storage.lossPercent * 100;
    this.macros = Storage.macros;
    const macros = this.macros;
    this.showMacroForm = !macros.calories || !macros.protein || !macros.fat || !macros.carbs;
    this.currentWeight = Storage.weights[Storage.weights.length - 1] ?? '-';
    this.hideWeight = Storage.hideWeight;
  }

  toggleHideWeight() {
    this.hideWeight = !this.hideWeight;
    Storage.hideWeight = this.hideWeight;
    Storage.save('hideWeight');
  }

  forceUpdateMacroForm() {
    this.showMacroForm = true;
  }

  get hiddenWeight() {
    return this.currentWeight.toString().split('').map(() => '*').join('');
  }

  logMacros() {
    const macros = this.macros;
    this.showMacroForm = !macros.calories || !macros.protein || !macros.fat || !macros.carbs;
    Storage.save('macros');
  }

  logWeight() {
    if (!this.newWeight) { return; }

    const weight = this.newWeight;
    const macros = Storage.macros;

    if (macros.calories && macros.protein && macros.fat && macros.carbs) {
      const previousWeight = Storage.weights[Storage.weights.length - 1];

      if (previousWeight) {
        const expectedWeight = previousWeight - (this.lossPercent / 100) * previousWeight;
        console.log(this.lossPercent, expectedWeight, previousWeight);
        Storage.macros = this.adjustMacros(macros, expectedWeight, weight);
        Storage.save('macros');
        this.macros = Storage.macros;
      }
    }

    Storage.update('weights', (v) => v.push(weight));
    this.currentWeight = Storage.weights[Storage.weights.length - 1];
    this.newWeight = undefined;
  }

  updateFatLoss() {
    const previousPercent = Storage.lossPercent;
    const currentPercent = this.lossPercent / 100;
    const macros = Storage.macros;

    if (this.currentWeight && typeof this.currentWeight === 'number') {
      if (macros.calories && macros.protein && macros.fat && macros.carbs) {
        const previous = this.currentWeight - previousPercent * this.currentWeight;
        const current = this.currentWeight - currentPercent * this.currentWeight;
        Storage.macros = this.adjustMacros(macros, current, previous);
        Storage.save('macros');
        this.macros = Storage.macros;
      }
    }

    Storage.lossPercent = currentPercent;
    Storage.save('lossPercent');
  }

  private adjustMacros(macros: Macros, expectedWeight: number, actualWeight: number): Macros {
    const offset = expectedWeight - actualWeight;
    const { calories, protein, fat, carbs } = macros;

    console.log(calories, offset);
    const newCalories = calories + offset * 500;
    const factor = newCalories / calories;

    const newProtein = protein * factor;
    const newFat = fat * factor;
    const newCarbs = carbs * factor;

    return {
      calories: Math.round(newCalories),
      fat: Math.round(newFat),
      carbs: Math.round(newCarbs),
      protein: Math.round(newProtein)
    };
  }
}
