const person1 = {
    name: 'Jan',
    age: 27,
    courses: ['c', 'c++', 'python', 'typescript'],
};

const person2 = {
    name: 'Daniel',
    age: 24,
    courses: ['python', 'typescript'],
};

console.log(person1);
console.log(person2);

const n1 = person1.name;
const a1 = person1.age;

let persons: any[] = [person1, person2];
console.log(persons[0]);
console.log(persons[1]);

for (const person of persons) {
    console.log(person.name);
}

function printPerson(person: {
    name: string;
    age: number;
    courses?: string[];
}) {
    console.log(person.name);
    console.log(person.age);
    if (person.courses) {
        console.log(person.courses);
    }
}

printPerson(person1);
