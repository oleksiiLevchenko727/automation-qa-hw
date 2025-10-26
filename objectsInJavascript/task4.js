///
const person = {
    firstName: "Alex",
    lastName: "Mason",
    age: "42"
};

person.email = "alex.mason@gmail.com";
delete person.age;

console.log(person);
