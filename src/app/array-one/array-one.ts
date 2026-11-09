import { Component } from '@angular/core';
import { ArrayOne } from '../class/arrayOne';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-array-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-one.html',
  styleUrl: './array-one.css',
})

export class ArrayOneComponent {
  arrayOne: ArrayOne = new ArrayOne();
  calculate(N: string) {
    let n = parseInt(N);

    if (isNaN(n) || n <= 0) {
      alert("Введіть коректну кількість днів!");
      return;
    }

    this.arrayOne.genArray(n);
  }
}