// 화살표 함수(Arrow function)

// // function sum() {}
// // const sum = function() {}
// // const sum = () => {}

// const sum = (a, b) => a + b;

// console.log(sum(1, 2));
// console.log(sum(10, 20));

const a = () => {};
const b = (x) => {}; // 매개 변수가 한 개면 소괄호 생략 가능
const c = (x, y) => {};
const d = (x) => {
    return x * x;
};
const e = (x) => x * x;
const f = (x) => {
    console.log(x * x); // 새로 들어옴
    return x * x; // return이 첫번째가 아니면 return, 중괄호 생략 불가
};
const g = () => {
    return { a: 1 };
};
const h = () => {
    {
        a: 1;
    }
}; // 무조건 중괄호 2개 감싸야함. 하나는 함수 감싸는 부분
const i = () => {
    return [1, 2, 3];
};
const j = () => [1, 2, 3]; // 리스트는 중괄호 중복이 아니라 없어도 됨
