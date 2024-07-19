// /* 다른 함수 내부에 정의된 함수(innerFunction)가 있는 경우 외부 함수(outerFunction)가 실행을 완료하고
// 해당 변수가 해당 함수 외부에서 더 이상 엑세스 할 수 없는 경우에도 해당 내부 함수는 외부 함수의 변수 및 범위에 엑세스할 수 있습니다. */

// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log('Outer Function: ' + outerVariable);
//         console.log('Inner Function: ' + innerVariable);
//     };
// }

// const newFunction = outerFunction('outside');
// newFunction('inside');
// console.log('New Function: ' + newFunction);

// let a = 'a';

// function functionB() {
//     let c = 'c';
//     console.log(a, b, c);
// }

// // b 에러
// function functionA() {
//     let b = 'b';
//     functionB();
//     console.log(a, b);
// }

// functionA();

let a = 'a';

function functionA() {
    let b = 'b';
    function functionB() {
        let c = 'c';
        console.log(a, b, c);
    }
    functionB();
    console.log(a, b);
}

functionA();
