import { Component, OnInit } from '@angular/core';
import { Storage } from 'src/services/storage';
import { range, weightedAvg } from 'src/utils/array';
import { extract } from 'src/utils/object';
import { diffDates, stringifyJson } from 'src/utils/string';

export interface Macros {
  protein: number;
  fat: number;
  carbs: number;
  calories: number;
}

export interface Weight {
  weight: number;
  date: string;
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
  newWeightDate = new Date().toISOString();
  hideWeight: boolean;

  constructor() { }

  ngOnInit() {
    this.lossPercent = Storage.lossPercent * 100;
    this.macros = Storage.macros;
    const macros = this.macros;
    this.showMacroForm = !macros.calories || !macros.protein || !macros.fat || !macros.carbs;
    this.currentWeight = Storage.weights[Storage.weights.length - 1]?.weight ?? '-';
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

    Storage.update('weights', (v) => this.uniqueDatePush(v));
    this.currentWeight = Storage.weights[Storage.weights.length - 1].weight;
    this.newWeight = undefined;
  }

  macroUpdate() {
    const previousWeights = this.fetchWeekWeights();
    if (previousWeights.length <= 0) { return; }

    const macros = Storage.macros;

    if (macros.calories && macros.protein && macros.fat && macros.carbs) {
      const previousWeight = previousWeights[0].weight;

      if (previousWeight) {
        const expectedWeight = previousWeight - (this.lossPercent / 100) * previousWeight;
        const newMacros = this.reajustMacros(macros, expectedWeight);
        if (!newMacros) { return; }

        Storage.macros = newMacros;
        Storage.save('macros');
        this.macros = Storage.macros;
      }
    }
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

  private reajustMacros(macros: Macros, expectedWeight: number, factor: number = 0)
  {
    const avgWeight = this.averageWeekWeight() + factor;
    if (avgWeight > expectedWeight) { return undefined; }

    const newMacros = this.adjustMacros(macros, expectedWeight, avgWeight);

    if (!confirm(stringifyJson(newMacros)))
    {
      return this.reajustMacros(macros, expectedWeight, factor + 0.5);
    }

    return newMacros;
  }

  private adjustMacros(macros: Macros, expectedWeight: number, actualWeight: number): Macros {
    const offset = expectedWeight - actualWeight;
    const { calories, protein, fat, carbs } = macros;
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

  private fetchWeekWeights(): Weight[] {
    if (Storage.weights.length < 1) { return []; }

    const today = new Date().toISOString().substring(0, 10);
    const weights: Weight[] = [];

    for (let i = 0; i < Storage.weights.length - 1; i++) {
      if (diffDates(today, Storage.weights[i].date) <= 7) {
        weights.push(Storage.weights[i]);
      }
    }

    console.log(weights);

    return weights;
  }

  private averageWeekWeight() {
    const weights = [...this.fetchWeekWeights().map(extract('weight')), this.currentWeight as number];

    return weightedAvg(weights, 0.5, 1);
  }

  private uniqueDatePush(weights: Weight[]) {
    const w = { weight: this.newWeight, date: this.newWeightDate.substring(0, 10) };
    const i = weights.findIndex(({ date }) => date === this.newWeightDate);

    if (i >= 0) { weights.splice(i, 1); }

    weights.push(w);
    weights.sort((a, b) => a.date.localeCompare(b.date));
  }
}
