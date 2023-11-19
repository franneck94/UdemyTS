type User = { name: string; age: number; courses: string[] };

interface UserInterface {
    name: string;
    age: number;
    courses: string[];
}

const user1: UserInterface = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
};

console.log(user1);

const user2: UserInterface = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
};

console.log(user2);

function printUser(user: UserInterface) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);

    return user;
}

function printUserVerbose(user: UserInterface) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);

    return user;
}

printUser(user1);
