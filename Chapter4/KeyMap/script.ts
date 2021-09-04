type Dog = {
    name: string;
    [key: string]: string | number;
};

const d1: Dog = { name: 'Sparky', age: 5 };
