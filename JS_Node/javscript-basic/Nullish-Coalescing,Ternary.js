// Nullish 병합(Nullish Coalescing)

const n = 0;

// OR 연산자를 사용한 경우
const num1 = n || 7;
console.log(num1); // 0으로 하려면..

// Nullish 병합 연산자를 사용한 경우
// 왼쪽->오른쪽 해석. null, undefined를 건너뛰고 나오는 첫번째 데이터 출력
const num2 = n ?? 7;
console.log(num2); // 0

// 예시
console.log(null ?? 1); // 1
console.log(undefined ?? 2); // 2
console.log(null ?? undefined); // undefined
console.log(null ?? 1 ?? 2); // 1
console.log(false ?? 1 ?? 2); // false
console.log(0 ?? 1 ?? 2); // 0

// 삼항(Ternary)

const a = 1;

if (a < 2) {
    console.log('참!');
} else {
    console.log('거짓...');
}

// 삼항 연산자
// 조건 ? 참 : 거짓
console.log(a < 2 ? '참!' : '거짓...');

function getAlert(message) {
    return message ? message : '메세지가 존재하지 않습니다.';
}

console.log(getAlert('안녕하세요~'));
console.log(getAlert(''));
