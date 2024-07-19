// // .find()
// // 대상 배열에서 콜백 테서트를 통과하는 첫 번째 요소를 반환합니다.

// const arr = [5, 8, 130, 12, 44];
// const foundItem = arr.find((item) => item > 10);

// console.log(foundItem);

// const users = [
//     { name: 'Neo', age: 85 },
//     { name: 'Amy', age: 22 },
//     { name: 'Lewis', age: 11 },
// ];

// const foundUser = users.find((user) => user.name === 'Amy');
// console.log(foundUser);

// // .findIndex()
// // 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소의 인덱스를 반환합니다.

// const arr = [5, 8, 130, 12, 44];

// const index = arr.findIndex((item) => item > 10);
// console.log(index);  // 2

// // .flat()
// // 대상 배열의 모든 하위 배열을 지정한 깊이(Depth)까지 이어붙인 새로운 배열을 생성합니다.
// // 깊이의 기본값은 `1`입니다.

// const arr = [1, 2, [3, 4, [5, 6]]];

// console.log(arr.flat()); // [1, 2, 3, 4, [5, 6]]
// console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6] -> 2번 깊이
// console.log(arr.flat(Infinity)); // 배열의 깊이가 얼만지 모를때 그냥 바로 다 풀어줌

// // .forEach()
// // 대상 배열의 깊이만큼 주어진 콜백을 실행합니다.

// const arr = ['A', 'B', 'C'];

// arr.forEach((item) => console.log(item));

// for (let i = 0; i < arr.length; i += 1) {
//     if (i > 1) {
//         break;
//     }
//     console.log(arr[i]);
// }

// // .includes()
// // 대상 배열이 특정 요소를  포함하고 있는지 확인합니다.

// const arr = [1, 2, 3];
// console.log(arr.includes(2));

// const fruits = ['Apple', 'Banana', 'Cherry'];

// console.log(fruits.includes('Apple'));
// console.log(fruits.includes('cherry')); // 대소문자를 구분함

// const users = [
//     { name: 'Neo', age: 85 },
//     { name: 'Amy', age: 22 },
//     { name: 'Lewis', age: 11 },
// ];
// console.log(users.includes({ name: 'Neo', age: 85 })); // 원시형, 참조형

// const neo = users[0];
// console.log(users.includes(neo));
