// 데이터 타입 확인

const a = 123;
console.log(typeof a);

console.log(typeof 'Hello' === 'string');
console.log(typeof 123 === 'number');
console.log(typeof false === 'boolean');
console.log(typeof undefined === 'undefined');
console.log(typeof null === 'null'); // 이것만 false
// null의 typeof는 object
console.log(typeof [] === 'object');
console.log(typeof {} === 'object');
console.log(typeof function () {} === 'function');

// .constructor -> object는 구분할 수 있지만 null은 불가
console.log([].constructor === Array);
console.log({}.constructor === Object);
// console.log(null.constructor); // error. null은 constructor로 구분할 수 없음

// Object.prototype.toString.call(데이터) -> 이 방식을 추천함
console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null');

function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}
console.log(checkType(null));
console.log(checkType([]));
console.log(checkType({}));
console.log(checkType('Hello'));
console.log(checkType(123));
console.log(checkType(false));
console.log(checkType(undefined));
