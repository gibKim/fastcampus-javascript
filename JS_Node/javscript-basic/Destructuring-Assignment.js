// 구조 분해 할당(Destructuring Assignment)
// 구조를 분해해서 각각의 변숭에 재할당

// let a = 0;
// let b = 0;
// let c = 0;

// const arr = [1, 2, 3];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
// [a, b, c] = arr;

// console.log(a, b, c);

// let b = 0;
// let c = 0;

// const arr = [1, 2, 3];
// [, b, c] = arr; // 1이 들어갈 곳을 비워둬야함

// console.log(b, c);

// const arr = [1, 2, 3];
// const [a, ...rest] = arr; // 이전에 배운 전개 연산자(Spread-Operator) 사용

// console.log(a, rest);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     x: 7,
//     y: 100,
// };

// const a = obj.a;
// const b = obj.b;
// const c = obj.c;

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const { a, b } = obj;

// console.log(a, b);

// const [, , , , , , , , c] = arr; // 배열은 너무 복잡함
// const { c } = obj;
// console.log(c);

// const { x } = obj; // x가 없기 때문에 undefined
// const { x = 4 } = obj; // 객체 데이터를 설정할 수 있고, 데이터를 변경도 가능함
// console.log(x);

// const { x = 4, a: heropy } = obj;
// console.log(x, a); // a를 heropy로 바꿨기 때문에 오류 발생
// console.log(x, heropy);

// const { x = 4, a: heropy, y: ten = 10 } = obj; // y 속성의 데이터가 존재하기 때문에 기본값 설정 10이 안되고 100 출력
// console.log(x, heropy, ten);

// const { c, ...rest } = obj;
// console.log(c, rest);
