import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deslizaminto',
  templateUrl: './deslizaminto.component.html',
  styleUrls: ['./deslizaminto.component.scss']
})
export class DeslizamintoComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
 
}
