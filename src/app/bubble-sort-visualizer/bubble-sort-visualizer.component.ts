import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-sort-visualizer',
  templateUrl: './bubble-sort-visualizer.component.html',
  styleUrls: ['./bubble-sort-visualizer.component.css']
})
export class BubbleSortVisualizerComponent {
  array: number[] = [];
  swapping: boolean = false;
  sorted: boolean = false;

  constructor() {
    this.generateArray();
  }

  generateArray() {
    this.array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));
    this.sorted = false;
  }

  async bubbleSort() {
    this.sorted = false;
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length - i - 1; j++) {
        this.swapping = true;
        if (this.array[j] > this.array[j + 1]) {
          await this.swap(j, j + 1);
        }
        this.swapping = false;
      }
      this.array[this.array.length - i - 1] = this.array[this.array.length - i - 1];
    }
    this.sorted = true;
  }

  async swap(i: number, j: number) {
    await new Promise(resolve => setTimeout(resolve, 5));
    [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
  }

  getColor(index: number): string {
    if (this.swapping && (index === 0 || index === 1)) {
      return 'red';
    } else if (this.sorted) {
      return 'green';
    } else {
      return 'blue';
    }
  }
}
