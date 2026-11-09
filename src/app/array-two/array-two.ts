import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayTwo as ArrayTwoClass } from '../class/arrayTwo';

@Component({
  selector: 'app-array-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-two.html',
  styleUrl: './array-two.css',
})
export class ArrayTwo {
  arrayTwo: ArrayTwoClass = new ArrayTwoClass();

  calculate(N: string) {
    let n = parseInt(N);

    if (isNaN(n) || n <= 0) {
      alert("Введіть коректну розмірність!");
      return;
    }
    this.arrayTwo.genArray(n, n);
    
    this.arrayTwo.summ(); 
  }
}