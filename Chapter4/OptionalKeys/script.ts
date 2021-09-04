type Animal = {
    name: string;
    [key: string]: string | number;
};

type Dog = Animal & { age: number; sex: string };

const a1: Animal = { name: 'Sparky', age: 5, sex: 'male' };
