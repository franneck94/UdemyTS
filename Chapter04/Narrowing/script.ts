class User {
    name: string;
    id: number;

    constructor(name_: string, id_: number) {
        this.name = name_;
        this.id = id_;
    }
}

class Admin {
    name: string;

    constructor(name_: string) {
        this.name = name_;
    }
}

function printInfo(arg: User | Admin) {
    if ('id' in arg) {
        console.log(arg['name']);
        console.log(arg['id']);
    } else {
        console.log(arg['name']);
    }
}

function printInfo2(arg: User | Admin) {
    if (arg instanceof User) {
        console.log(arg['name']);
        console.log(arg['id']);
    } else {
        console.log(arg['name']);
    }
}
