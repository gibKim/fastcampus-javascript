// // .join()
// // 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환합니다.

// const arr = ['Apple', 'Banana', 'Cherry'];

// console.log(arr.join());
// console.log(arr.join(', '));
// console.log(arr.join('/'));

// // .map()
// // 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환값을 모아 새로운 배열을 반환합니다.

// const numbers = [1, 2, 3, 4];
// const newNumbers = numbers.map((item) => item * 2);

// console.log(newNumbers);
// console.log(numbers);

// const users = [
//     { name: 'Neo', age: 85 },
//     { name: 'Amy', age: 22 },
//     { name: 'Lewis', age: 11 },
// ];

// const newUsers = users.map((user) => {
//     return {
//         ...user,
//         isValid: true,
//         email: null,
//     };
// });

// console.log(newUsers);

// // .pop()
// // 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
// // 대상 배열 원본이 변경됩니다.

// const fruits = ['Apple', 'Banana', 'Cherry'];

// console.log(fruits.pop());
// console.log(fruits);

// // .push()
// // 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
// // 대상 배열 원본이 변경됩니다.

// const fruits = ['Apple', 'Banana', 'Cherry'];

// const newLength = fruits.push('Orange');
// console.log(fruits);
// console.log(newLength);

// fruits.push('Mango', 'Strawberry');
// console.log(fruits);

// // .reduce()
// // 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환합니다.
// // 각 콜백의 반환값은 다음 콜백으로 전달됩니다.

// const numbers = [1, 2, 3];
// const sum = numbers.reduce((acc, cur) => acc + cur, 0);

// console.log(sum);

// const users = [
//     { name: 'Neo', age: 85 },
//     { name: 'Amy', age: 22 },
//     { name: 'Lewis', age: 11 },
// ];

// // 총 나이 계산
// const totalAge = users.reduce((acc, cur) => acc + cur.age, 0);

// console.log(totalAge);
// console.log(`${(totalAge / users.length).toFixed(1)}세`);

// // 모든 이름 추출

// const names = users
//     .reduce((acc, cur) => {
//         acc.push(cur.name);
//         return acc;
//     }, [])
//     .join(', '); // 메소드 체이닝
// console.log(names);
