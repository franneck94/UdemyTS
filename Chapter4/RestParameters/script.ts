function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}

const a = multiply(10, 1, 2, 3, 4);

console.log(a);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2);

console.log(arr1);
