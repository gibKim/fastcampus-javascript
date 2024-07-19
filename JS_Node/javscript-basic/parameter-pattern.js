// 매개변수 패턴(Parameter pattern)
//// 기본값(Default value)

// function sum(a, b = 4) {
//     return a + b;
// }

// console.log(sum(1, 2));
// console.log(sum(7)); // b 값이 없으니 4가 입력됨

//// 객체 구조 분해 할당(Object Destructuring assignment)
// const user = {
//     name: 'HEROPY',
//     age: 85,
// };

// function getName({ name }) {
//     return name;
// }

// function getEmail({ email = '이메일이 없습니다.' }) {
//     return email;
// }

// console.log(getName(user));
// console.log(getEmail(user));

//// 배열 구조 분해 할당(List Destructuring assignment)
// const fruits = ['Apple', 'Banana', 'Cherry'];
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// // a 자리는 남겨둠
// function getSecondItem([, b]) {
//     return b;
// }

// console.log(getSecondItem(fruits));
// console.log(getSecondItem(numbers));

//// 나머지 매개변수(Rest Parameter)

// reduce 메소드는 그것이 붙어 있는 배열 데이터의 아이템 개수만큼 callback 함수를 실행

// function sum(a, b, ...rest) {
//     console.log(rest);
// }

// console.log(sum(1, 2));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// function sum(...rest) {
//     console.log(rest);
//     // console.log(arguments); // 유사 배열(Array-Like), 배열데이터가 아니기 때문에 reduce 불가
//     return rest.reduce(function (acc, cur) {
//         return acc + cur;
//     }, 0);
// }

// console.log(sum(1, 2)); // 3
// console.log(sum(1, 2, 3, 4)); // 10
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
