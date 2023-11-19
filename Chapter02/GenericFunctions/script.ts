function firstElement<Type>(arr: Type[]): Type {
    return arr[0];
}

const arr1 = [1, 2, 3];

console.log(firstElement(arr1));

const arr2 = [true, false, true];

console.log(firstElement(arr2));

const arr3 = ['Jan', 'Peter'];

console.log(firstElement(arr3));

function map<Input, Output>(
    arr: Input[],
    func: (arg: Input) => Output,
): Output[] {
    return arr.map(func);
}

const parsed = map(['1', '2', '3'], (n) => parseInt(n));

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

const arr4 = combine([1, 2, 3], ['hello']);

const arr5 = combine<string | number>([1, 2, 3], ['hello']);
