// // 함수(Function)

// // 함수 선언문(Declaration)
// function hello() {}

// // 함수 표현식(Expression)
// const hello = function () {}

// 호이스팅(Hoisting)

// hello(); // 정상 작동

// function hello() {
//     console.log('Hello~');
// }
/* 함수 코드를 선언된 부분 내에서 유효한 범위 내에서 제일 꼭대기로 올려서 동작 */

// hello();

// const hello = function () {
//     console.log('Hello~');
// }; // error. 함수 표현식. hello 함수를 만들기도 전에 hello를 호출하여 위에 선언에서는 오류가 남

// world();

// const world = function hello() {
//     console.log('Hello~'); // hello는 지워짐. 표현식이기 때문에 error
// };
