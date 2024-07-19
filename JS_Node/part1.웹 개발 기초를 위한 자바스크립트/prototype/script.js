// 프로토타입은 재사용 가능, 더 적은 메모리 사용의 이유로 씀
// let user = {
//     name: 'John',
//     age: 45,
//     email: 'john@example.com',
// };

// console.log(user.name);
// console.log(user.hasOwnProperty('email'));

// function Person(name, email, birthday) {
//     this.name = name;
//     this.email = email;
//     this.birthday = new Date(birthday);
// }

// 재사용하는 부분은 prototype에 넣어서 효율적으로 사용
// Person.prototype.calculateAge = function () {
//     const diff = Date.new() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// const john = new Person('john', 'john@example.com', '7-10-91');
// const han = new Person('han', 'han@example.com', '2-11-91');

// console.log(john);
// console.log(han);

function Person(name, email, birthday) {
    const person = Object.create(personsPrototype);
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;
}

const personsPrototype = {
    calculateAge() {
        const diff = Date.new() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
};

const john = new Person('john', 'john@example.com', '7-10-91');
const han = new Person('han', 'han@example.com', '2-11-91');

console.log(john);
console.log(han);
