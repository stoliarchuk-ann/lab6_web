import { randomInt } from "./randomInt";
export class ArrayOne {
    a: number[] = [];
    count: number = 0;

    constructor() {
        this.a = [];
    }
    genArray(n: number) {
        this.a = [];
        this.count = 0;
        let rnd = new randomInt();
        for (let i = 0; i < n; i++) {
            this.a.push(rnd.randomInteger(15, 26));
            if (this.a[i] > 22)
                this.count++;
        }
    }
}