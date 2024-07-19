/* 1-2 var, let, const */
// 중복 선언, 재할당 가능
// var greeting = 'hello';
// console.log(greeting);

// var greeting = 'hi';
// console.log(greeting);

// greeting = 'how are you?';
// console.log(greeting);

// 중복 선언 불가, 재할당은 가능
// let greeting = 'hello';
// console.log(greeting);

// 중복 선언시 에러
// let greeting = 'hi';
// console.log(greeting);

// 재할당 가능
// greeting = 'hi';
// console.log(greeting);

// 중복 선언 X, 재할당 X
// const greeting = 'hello';
// console.log(greeting);

// // 재할당 에러
// greeting = 'hi';
// console.log(greeting);

/* 1-3 변수의 참조 범위 */
// 유효한 참조 범위
// var 함수 레벨 스코프
// function func() {
//     if (true) {
//         var a = 'a';
//         console.log(a);
//     }
//     console.log(a);
// }

// func();

// let, const => block 레벨 스코프
// function func() {
//     if (true) {
//         let a = 'a';
//         console.log(a);
//     }
//     console.log(a);
// }

// func();

/* 1-4 호이스팅 */

// console.log(greeting);
// var greeting = 'hello';  undefined
/* 변수 생성의 선언단계 및 할당 단계가 분할되는데
 선언 부분은 코드가 실행되기 전에 현재 범위 맨 위로 호이스팅되고 초기에 undefined 값이 할당
*/

// let greeting = 'hello';  error
/* let, const는 위로 호이스팅은 되지만, undefined 값을 할당 x
선언과 할당 사이의 간격을 Temporal Dead Zone이라고 함. */

func();

function func() {
    console.log('hoisting test');
}
