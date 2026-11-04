import { Square } from "./square";

export class Rectangle extends Square {
  diff: number;
  b: number;

  constructor(name: string, a1: number, diff: number) {
    super(name, a1);
    this.diff = diff;
    this.b = this.a + this.diff;
  }

  override S() {
    return this.a * this.b;
  }
}