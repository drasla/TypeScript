function sum(a: number, b?: number): number {
    if(b === undefined) {
        b = 0;
    }
    return a + b;
}

console.log(sum(1));