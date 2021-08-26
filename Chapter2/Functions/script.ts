function foo() {
    const num = 10;

    const arrowFn = (n: number): number => {
        return n * 2;
    };

    console.log(arrowFn(num));
}

function greeter(fn: (a: string) => void) {
    fn('Hello, World');
}

function printer(s: string, prefix?: string) {
    if (prefix) {
        console.log(prefix, s);
        return;
    }

    console.log(s);
}

greeter(printer);
