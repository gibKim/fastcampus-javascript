// 전개 연산자(Spread Operator)
// 배열 데이터의 대괄호를 날려주는 역할

// const a = [1, 2, 3];
// console.log(...a); // 1, 2, 3
// console.log(1, 2, 3);

// const b = [4, 5, 6];
// const c = a.concat(b);
// console.log(c);

// const d = [...a, ...b];
// console.log(d); // [...[1, 2, 3], ...[4, 5, 6]]
// // [1, 2, 3, 4, 5, 6]

// const a = { x: 1, y: 2 };
// const b = { y: 3, z: 4 };

// const c = Object.assign({}, a, b);
// console.log(c); // 기존 a 변수의 y는 b변수의 y가 덮어씀

// const d = { ...a, ...b };
// console.log(d); // { a: ...{ x: 1, y: 2}, b: ...{ y: 3, z: 4}}
// // { x: 1, y: 2, y: 3, z: 4}
// // { x: 1, y: 3, z: 4}

function fn(x, y, z) {
    console.log(x, y, z);
}

fn(1, 2, 3);

const a = [1, 2, 3];
// fn(a[0], a[1], a[2])
// fn([1, 2, 3])
fn(...a);
