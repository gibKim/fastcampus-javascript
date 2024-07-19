// // For 반복문

// for (초기화; 조건; 증감) {
//     // 반복 실행할 코드
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 9; i > -1; i--) {
//     if (i < 4) {
//         break;
//     }

//     if (i % 2 === 0) {
//         continue;
//     }

//     console.log(i);
// }

// // For of 반복문 -> 배열

// const fruits = ['Apple', 'Banana', 'Cherry'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (const fruit of fruits) {
//     console.log(fruit);
// }

// const users = [
//     {
//         name: 'Heropy',
//         age: 85,
//     },
//     {
//         name: 'Neo',
//         age: 22,
//     },
//     {
//         name: 'Lewis',
//         age: 34,
//     },
// ];

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].name);
// }

// for (const user of users) {
//     console.log(user.name);
// }

// For in 반복문 -> 객체

const user = {
    name: 'Heropy',
    age: 85,
    isValid: true,
    email: 'thesecon@gmail.com',
};

for (const key in user) {
    console.log(key);
    console.log(user[key]); // 대괄호 표기법
}
