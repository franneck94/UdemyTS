const person1 = {
    name: 'Jan',
    age: 27,
};

const person2 = {
    name: 'Jan',
    age: 27,
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
