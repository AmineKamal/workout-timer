import { Component, Input, OnInit } from '@angular/core';
import { Weight } from 'src/app/weight-tracker/weight-tracker.page';

declare var CanvasJS: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() data: Weight[];

  constructor() { }

  ngOnInit()
  {
    const dataPoints = this.data.map(({ weight, date }) => ({ x: this.toDate(date), y: weight }));

    const chart = new CanvasJS.Chart('chartContainer', {
      theme: 'light2',
      axisX:
      {
        valueFormatString: 'DD MMM',
        crosshair:
        {
          enabled: true,
          snapToDataPoint: true
        }
      },
      axisY:
      {
        title: 'Weight',
        crosshair: {
          enabled: true
        }
      },
      data: [{ type: 'line', dataPoints }]
    });

    chart.render();
  }

  private toDate(str: string) {
    const [year, month, day] = str.split('-').map(Number);

    return new Date(year, month, day);
  }

}
