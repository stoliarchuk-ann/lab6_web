import { randomInt } from "./randomInt";
export class ArrayTwo {
    a: number[][] = [];
    sum: number = 0;

    constructor() {
        this.a = [];
    }

    genArray(n: number, m: number) {
        this.a = [];
        let rnd = new randomInt();

        for (let i = 0; i < n; i++) {
            this.a[i] = [];
            for (let j = 0; j < m; j++) {
                this.a[i][j] = rnd.randomInteger(-10, 10);
            }
        }
    }

    summ() {
        this.sum = 0;
        
        for (let i = 0; i < this.a.length; i++) {
            for (let j = 0; j < this.a[i].length; j++) {
                if (i < j)
                    this.sum += this.a[i][j];
            }
        }
    }
}