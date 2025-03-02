// // 타입 단언(Assertion)
// // '단언' - 주저하지 아니하고 딱 잘라 말함.

// // 단언 키워드 - as
// // Non-null 단언 연산자 - !

// // 1)
// const el = document.querySelector('body'); // as HTMLBodyElement라고 단언을 해주어서 null을 삭제할 수 있음
// // el!.textContent = 'Hello World?!';
// if (el) {
//     el.textContent = 'Hello world?!';
// } // 있으면 출력

// // 2)
// function getNumber(x: number | null | undefined) {
//     // return Number(x!.toFixed(2)); // as number로 단언을 하면서 에러는 제거했지만 역시 잘못된 코드
//     // x가 null or undefined일 경우 null or undefined로 type assertion
//     if (x) {
//         return Number(x.toFixed(2));
//     }
// }
// getNumber(3.1415926535);
// getNumber(null);

// // 3)
// function getValue(x: string | number, isNumber: boolean) {
//     if (isNumber) {
//         return Number((x as number).toFixed(2));
//     }
//     return (x as string).toUpperCase();
// }
// getValue('hello world', false);
// getValue(3.1415926535, true);

/// 할당 단언(Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함.

// let num!: number; // 할당 단언! - 약간 미리 거짓말 치는 느낌
// num = 123;
// console.log(num);
