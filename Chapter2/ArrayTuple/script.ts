let list = [1, 2, 3];
console.log(list);

function foo(args: number[]): void {
    console.log(args);
}

foo(list);
foo(27);

type UserTuple = [string, number];

const x: UserTuple = ['hello', 10]; // OK
console.log(x);

const y: UserTuple = [10, 'hello']; // Error
console.log(y);

function bar(args: [string, number]): void {
    console.log(args);
}

bar(['Jan', 27]);
bar(['Jan', '27']);
