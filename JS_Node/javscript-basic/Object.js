// const user = new Object(); //객체 데이터 만들기
// user.name = 'HEROPY';
// user.age = 85;

/* 함수 내부에서 객체 데이터를 생성 */
// console.log(user); // key value가 만들어짐, 생성자 함수 방식으로 객체데이터를 만듦
// // key : 속성(property)
// // value : 값

// function User() {
//     this.name = 'HEROPY';
//     this.age = 85;
// }

// const user = new User();

// console.log(user);

// const user = {
//     name: 'HEROPY',
//     age: 85,
//     age: 22, // 나중에 저장되는 데이터가 우선
// };

// const key = 'age';

// console.log(user.name); // 점 표기법
// console.log(user['age']); // 대괄호 표기법
// console.log(user[key]);

const userA = {
    name: 'HEROPY',
    age: 85,
};

const userB = {
    name: 'Neo',
    age: 22,
    parent: userA,
};

console.log(userB);
console.log(userB.parent.name);
console.log(userB['parent']['name']);

const users = [userA, userB];

console.log(users[0].name);
console.log(users[0]['name']);
