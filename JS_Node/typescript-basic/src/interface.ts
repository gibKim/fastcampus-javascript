// // 인터페이스(Interface)

// // 선택적 속성 - ?
// // 읽기전용 속성 - readonly

// interface User {
//     name: string;
//     readonly age: number;
//     isValid?: boolean; // ?를 붙이면 선택적 속성
// }

// const heropy: User = {
//     name: 'Heropy',
//     age: 85,
//     isValid: true,
// };

// heropy.isValid = false;
// // heropy.age = 22; // 읽기 전용은 값을 바꿀 수 없음

// const neo: User = {
//     name: 'Neo',
//     age: 102,
// };

// // 함수 타입 - 호출 시그니쳐(Call Signature)
// // 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)
// // 확장(상속)

// // 함수 타입 - 호출 시그니쳐(Call Signature)

// interface GetName {
//     (param: string): string; // 별도의 이름으로 작성해도 됨
// }
// interface User {
//     name: string;
//     age: number;
//     getName: (param: string) => string;
// }
// const heropy: User = {
//     name: 'Heropy',
//     age: 85,
//     getName(message: string) {
//         console.log(message);
//         return this.name;
//     },
// };
// heropy.getName('Hello~');

// // 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)

// // 배열
// interface Fruits {
//     [item: number]: string;
// }
// const fruits: Fruits = ['Apple', 'Banana', 'Cherry'];
// console.log(fruits);

// // 객체
// interface User {
//     [key: string]: unknown;
//     name: string;
//     age: number;
// }
// const heropy: User = {
//     name: 'Heropy',
//     age: 85,
// };
// heropy['isValid'] = true;
// heropy['emails'] = ['thesecon@gmail.com', 'test@gmail.com'];
// console.log(heropy);

// interface Payload {
//     [key: string]: unknown;
// }
// function logValues(payload: Payload) {
//     for (const key in payload) {
//         console.log(payload[key]);
//     }
// }

// interface User {
//     [key: string]: unknown;
//     name: string;
//     age: number;
//     isValid: boolean;
// }

// const heropy: User = {
//     name: 'Heropy',
//     age: 85,
//     isValid: true,
// };
// logValues(heropy);

// // 확장(상속)

// interface UserA {
//     name: string;
//     age: number;
// }

// interface UserB extends UserA {
//     isValid: boolean;
// }

// const heropy: UserA = {
//     name: 'Heropy',
//     age: 85,
//     isValid: true,
// }; // isValid 선언 안했으므로 에러

// const neo: UserB = {
//     name: 'neo',
//     age: 102,
//     isValid: true,
// };

// interface FullName {
//     firstName: string;
//     lastName: string;
// }

// interface FullName {
//     middleName: string;
//     // lastName: boolean; // 기존 속성의 이름이 중복되면 에러 발생. boolean -> string
//     lastName: string;
// }

// const fullName: FullName = {
//     firstName: 'Tomas',
//     middleName: 'Sean',
//     lastName: 'Connery',
// };
