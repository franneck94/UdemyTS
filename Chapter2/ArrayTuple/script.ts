let arr = [1, 2, 3];
console.log(arr);

function printArray(arr: number[]) {
    console.log(arr);
}

printArray(arr);
// printArray(27);

function printTuple(tpl: [number, number, string]) {
    console.log(tpl);
}

let tpl: [number, number, string] = [27, 34, 'Jan'];
printTuple(tpl);
