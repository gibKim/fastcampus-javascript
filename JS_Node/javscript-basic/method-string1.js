/* length, includes, indexOf, padEnd, padStart */

// // .length
// // 문자의 길이(숫자)를 반환합니다.

// const str = 'Hello world!';
// //           012345678901

// console.log(str.length);

// // .includes()
// // 대상 문자에 주어진 문자가 포함되어 있는지(불린) 확인합니다.

// console.log(str.includes('hello', 0));
// console.log(str.includes('Hello', 0));
// console.log(str.includes('hello', 1));

// // .indexOf()
// // 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환합니다.
// // 일치하는 문자가 없으면 '-1'을 반환합니다.

// console.log(str.indexOf('!'));
// console.log(str.indexOf('HEROPY'));

// if (str.indexOf('HEROPY') === -1) {
//     console.log('HEROPY가 없습니다.');
// }

// if (!str.includes('HEROPY')) {
//     console.log('HEROPY가 없습니다.');
// }

// .padEnd()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환합니다.

const str = '1234567';
console.log(str.padEnd(10, '0')); // 기존 문자를 건드리지 않음
console.log(str);

const str1 = '1234567890123';
console.log(str1.padEnd(10, '!')); // 10개가 넘어가면 그냥 문자열 출력

// .padStart()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자를 반환합니다.

console.log(str.padStart(10, '0'));
