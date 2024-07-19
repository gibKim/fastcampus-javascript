const string1 = 'Hello';
const string2 = 'Hello';
const string3 = `Hello ${string1} ?!`; // 템플릿 리터럴

console.log(string3);

const number = -123.1234;
const pi = 0.14;
console.log(typeof (number + undefined)); // NaN : Not a Number
console.log(typeof pi);

const a = 0.1;
const b = 0.2;

console.log(a + b); // 컴퓨터가 10진수를 2진수로 바꿀 때 부동소수점 오류
console.log((a + b).toFixed(1)); // 첫째자리. 단 숫자 -> 문자
console.log(typeof (a + b).toFixed(1));
console.log(Number((a + b).toFixed(1)));
