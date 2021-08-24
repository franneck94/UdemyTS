function foo(arg: any): void {
    console.log(arg);
    return true;
}

function bar(arg: unknown): void {
    console.log(arg);
    return true;
}

function fizz(arg: undefined): void {
    console.log(arg);
    return true;
}

console.log(foo());
console.log(bar());
console.log(fizz());
