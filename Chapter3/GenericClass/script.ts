class Data<Type> {
    contents: Type;

    constructor(value: Type) {
        this.contents = value;
    }

    public print() {
        console.log(this.contents);
    }
}

const b1 = new Data('hello!');
b1.print();

const b2 = new Data(1);
b2.print();

const b3 = new Data(true);
b3.print();
