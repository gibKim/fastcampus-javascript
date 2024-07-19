/* toFixed, toLocaleString, isInteger, isNaN, parseInt, parseFloat */
// // .toFixed()
// // 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 변환합니다.

// const num = 3.1415926535;

// console.log(num.toFixed(4));
// console.log(parseFloat(num.toFixed(4)));

// // .toLocaleString
// // 숫자를 현지 언어 형식의 문자로 반환합니다(쉼표를 붙여줌).

// const num = 1000000;
// console.log(num.toLocaleString());
// console.log(`${num.toLocaleString()}원`);

// Number.isInteger()
// 숫자가 정수(integer)인지 확인합니다.

// const num = 123;
// const pi = 3.14;

// console.log(Number.isInteger(num)); // 클래스에 바로 붙여 써야하는 정적 메소드
// console.log(Number.isInteger(pi));

// // Number.isNaN()
// // 주어진 값이 `NaN`인지 확인합니다.

// const num1 = NaN;
// const num2 = 123;
// const str = 'Hello world';
// const nul = null;

// console.log(Number.isNaN(num1));
// console.log(Number.isNaN(num2));
// console.log(Number.isNaN(str));
// console.log(Number.isNaN(nul));

// // Number.parseInt() 또는 parseInt()
// // 주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 정수로 반환합니다.

// const str = '3.1415926535';
// const num = 3.1415926535;

// console.log(Number.parseInt(str, 10));
// console.log(parseInt(num, 10));

// // Number.parseFloat() 또는 parseFloat()
// // 주어진 값(숫자, 문자)을 파싱해 부동소수점 실수로 반환(숫자)합니다.

// const str = '3.1415926535';
// const num = 3.1415926535;
// console.log(Number.parseFloat(str));
// console.log(parseFloat(num));
