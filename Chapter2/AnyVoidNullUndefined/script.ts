function foo(arg: any) {
    console.log(arg);

    return;
}

let a: number | undefined = undefined;

if (!a) {
    console.log('!a');
} else {
    console.log('a');
}

a = 2;
