// // .reverse()
// // 대상 배열의 순서를 반전합니다.
// // 대상 배열의 원본이 변경됩니다.

// const arr = ['A', 'B', 'C'];
// const reversed = arr.reverse();

// console.log(reversed);
// console.log(arr);

// // .shift()
// // 대상 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다.
// // 대상 배열의 원본이 변경됩니다.

// const arr = ['A', 'B', 'C'];

// console.log(arr.shift());
// console.log(arr);

// // .slice()
// // 대상 배열의 일부를 추출해 새로운 배열을 반환합니다.
// // 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 배열의 끝까지 추출합니다.

// const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// console.log(arr.slice(0, 3));
// console.log(arr.slice(4, -1));
// console.log(arr.slice(4));
// console.log(arr);

// // .some()
// // 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인합니다.

// const arr = [1, 2, 3, 4];
// const isValid = arr.some((item) => item > 3);

// console.log(isValid);

// // .sort()
// // 대상 배열의 콜백의 반환 값(음수, 양수, 0)에 따라 정렬합니다.
// // 콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬합니다.
// // 대상 배열의 원본이 변경됩니다.

// const numbers = [4, 17, 2, 103, 3, 1, 0];

// numbers.sort();
// console.log(numbers);

// numbers.sort((a, b) => a - b);
// console.log(numbers);

// numbers.sort((a, b) => b - a);
// console.log(numbers);

// const users = [
//     { name: 'Neo', age: 85 },
//     { name: 'Amy', age: 22 },
//     { name: 'Lewis', age: 11 },
// ];

// users.sort((a, b) => a.age - b.age); // 양수 - 오름차순
// console.log(users);

// users.sort((a, b) => b.age - a.age); // 음수 - 내림차순
// console.log(users);

// // .splice()
// // 대상 배열에 요소를 추가하거나 삭제하거나 교체합니다.
// // 대상 배열 원본이 변경됩니다.

// const arr = ['A', 'B', 'C'];
// arr.splice(2, 0, 'X');

// console.log(arr);

// arr.splice(1, 1);
// console.log(arr);

// // .unshift()
// // 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환합니다.
// // 대상 배열의 원본이 변경됩니다.

// const arr = ['A', 'B', 'C'];
// console.log(arr.unshift('X'));

// console.log(arr);

// // Array.from()
// // 유사 배열(Array-like)을 실제 배열로 반환합니다.

// const arrayLike = {
//     0: 'A',
//     1: 'B',
//     2: 'C',
//     length: 3,
// };

// console.log(arrayLike.constructor === Array);
// console.log(arrayLike.constructor === Object);

// // arraylike.forEach(item => console.log(item)); // 에러
// Array.from(arrayLike).forEach((item) => console.log(item));

// Array.isArray()
// 배열 데이터인지 확인합니다.

const array = ['A', 'B', 'C'];
const arraylike = {
    0: 'A',
    1: 'B',
    2: 'C',
    length: 3,
};

console.log(Array.isArray(array)); // true
console.log(Array.isArray(arraylike)); // false
