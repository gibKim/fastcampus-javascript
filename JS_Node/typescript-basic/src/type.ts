// // 타입 종류

// /// 문자
// let str: string;
// let red: string = 'Red';
// let green: string = 'Green';
// let myColor: string = `My color is ${red}`;
// let youColor: string = 'You color is' + green;

// /// 숫자
// let num: number;
// let integer: number = 6;
// let float: number = 3.14;
// let infinity: number = Infinity;
// let nam: number = NaN;

// /// 불린
// let isBoolean: boolean;
// let isDone: boolean = false;

// /// Null / Undefined
// let nul: null;
// let und: undefined;
// nul = null;
// let num: number;
// num = 123;
// console.log(nul); // null 타입은 입력하기 전에 사용할 시 에러가 남
// console.log(und);
// console.log(num); // 할당하기전에 사용하면 에러

// /// 배열
// const fruits: string[] = ['apple', 'banana', 'orange'];
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
// const union: (string | number)[] = ['apple', 1, 'banana', 2]; // |라는 vertical 타입을 이용해 union
// const array: [] = [1, 2, 3] // 에러

// /// 객체
// // typeof DATA = 'object'
// const obj: object = {};
// const arr: object = [];
// const func: object = function () {};
// // 위와 같이 object 타입은 엄격하지 않음. 그래서 잘 안씀

// interface User {
//     name: string;
//     age: number;
//     isValid: boolean;
// }

// const userA: User = {
//     name: 'Heropy',
//     age: 85,
//     isValid: true,
// };

// const userB: User = {
//     name: 'Neo',
//     age: 22,
//     isValid: false,
// };

// /// 함수
// const add = function (x: number, y: number): number {
//     return x + y;
// };
// const a: number = add(1, 2);

// const hello = function (): void {
//     console.log('Hello world~');
// };
// const h: void = hello();

// /// Any
// let hello: any = 'Hello world';
// hello = 123;
// hello = false;
// hello = null;
// hello = {};
// hello = [];
// hello = function () {};
// // 타입이 자유로워서 잘 안씀

// /// Unknown
// const a: any = 123;
// const u: unknown = 123;

// const any: any = a;
// const boo: boolean = a;
// const num: number = a;
// const arr: string[] = a;
// const obj: { x: string; y: number } = a;

// const any: any = u; // 이것만 정상 작동
// const boo: boolean = u;
// const num: number = u;
// const arr: string[] = u;
// const obj: { x: string; y: number } = u;

// /// Tuple
// const tuple: [string, number, boolean] = ['a', 1, false];
// const users: [number, string, boolean][] = [
//     [1, 'Neo', true],
//     [2, 'Evan', false],
//     [3, 'Lewis', true],
// ];

// /// void
// function hello(msg: string): void {
//   console.log(`Hello ${msg}`);
// }
// const hi: void = hello('world');

/// Never
// const nev: [] = []; // 앞 괄호에 never 할당 된 것처럼 작동
// nev.push(3); // 에러

// /// Union
// let union: string | number;
// union = 'Hello type!';
// union = 123
// union = false // 오류

// /// Intersection
// interface User {
//     name: string;
//     age: number;
// }
// interface Validation {
//     isValid: boolean;
// }
// const heropy: User & Validation = {
//     name: 'Neo',
//     age: 85,
//     isValid: false,
// };
