// // 논리(Logical)

// const a = true;
// const b = false;

// // AND(그리고) 연산자
// if (a && b) {
//     console.log('모두가 참!');
// }

// // OR(또는) 연산자
// if (a || b) {
//     console.log('하나 이상이 참!');
// }

// AND 연산자
console.log(true && false);
// 가운데 연산자를 기준으로 피 연산자가 반환될 수 있음.
// 가장 왼쪽에 있는 거짓 데이터가 반환됨
console.log(1 && 0);
console.log(1 && 2 && 0);
console.log(1 && 0 && 2);
console.log(0 && 1 && 2);
console.log('A' && 'B' && ''); // 빈 문자열 출력
console.log('A' && 'B' && 'C'); // 참이면 가장 앞쪽 데이터 반환, 나머지는 무시

// OR 연산자
console.log(false || true);
console.log(0 || 1); // 참이면 가장 먼저 만나는 참 데이터를 반환
console.log(false || 0 || {});
console.log(false || [] || null);
console.log(function () {} || undefined || '');
console.log(false || 0 || NaN); // 모두 거짓이면 마지막 데이터를 반환
