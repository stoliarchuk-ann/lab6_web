export class Square {
  name: string;
  a: number;

  constructor(name: string, a1: number) {
    this.name = name;
    
    if (a1 > 0) {
      this.a = a1;
    } else {
      this.a = 4;
    }
  }

  S() {
    return this.a * this.a; 
  }
}