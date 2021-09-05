const a1 = [1, 2, 3];

function arraySum(arr: number[]) {
    let result: number = 0;

    arr.forEach((element) => (result += element));

    return result;
}

const s1 = arraySum(a1);
console.log(s1);

function argumentSum(...numbers: number[]) {
    let result: number = 0;

    numbers.forEach((element) => (result += element));

    return result;
}

const s2 = argumentSum(1, 2, 3, 4);
console.log(s2);
