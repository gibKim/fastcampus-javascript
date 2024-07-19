/* replace, slice, split, toLowerCase, toUpperCase, trim */
// // .replace()
// // 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환합니다.

// const str = 'Hello, Hello?!';

// console.log(str.replace('Hello', 'Hi')); // 첫번째 Hello만 Hi로 변환
// console.log(str.replace(/Hello/g, 'Hi')); // g는 global 이라는 뜻. Hello를 모두 Hi로 변환
// console.log(str);

// // .slice()
// // 대상 문자의 일부를 추출해 새로운 문자를 반환합니다.
// // 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출합니다.

// const str = 'Hello world!';
// //           012345678901

// console.log(str.slice(0, 5));
// console.log(str.slice(6, -1));
// console.log(str.slice(6));
// console.log(str);

// // .split()
// // 대상 문자를 주어진 구분자로 나눠 배열로 반환합니다.

// const str = 'Apple, Banana, Cherry';

// console.log(str.split(','));
// console.log(str.split('')); // 모두 한 글자씩 출력
// console.log(str.split('').reverse().join(''));

// const str1 = 'Apple / Banana / Cherry';
// console.log(str.split('/'));
// console.log(str.split(' / '));

// // .toLowerCase()
// // 대상 문자를 영어 소문자로 변환해 새로운 문자로 반환합니다.

// const str = 'Apple, Banana, Cherry';

// console.log(str.toLowerCase());
// console.log(str);

// // .toUpperCase()
// // 대상 문자를 영어 대문자로 변환해 새로운 문자로 반환합니다.

// console.log(str.toUpperCase());
// console.log(str);

// .trim()
// 대상 문자의 앞뒤 공백문자(space, tab 등)를 제거한 새로운 문자를 반환합니다.

const str = '   HEROPY! ';
console.log(str.trim()); // 'HEROPY!'
console.log(str); // '   HEROPY! '
