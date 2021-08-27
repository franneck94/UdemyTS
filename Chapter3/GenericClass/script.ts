interface Sized {
    length: number;
}

class DataBox<Type extends Sized> {
    content: Type;

    constructor(input: Type) {
        this.content = input;
    }

    print() {
        console.log(this.content);
    }
}

const d1 = new DataBox('hello');
d1.print();

const d2 = new DataBox([1, 2, 3]);
d2.print();
