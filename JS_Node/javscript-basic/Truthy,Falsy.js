// 참과 거짓(Truthy & Falsy)

// 1) false
// 2) 0
// 3) null
// 4) undefined
// 5) NaN
// 6) ''
// 7) 0n  //big int라는 타입

if (123) {
    console.log('참!');
}

if (0) {
    console.log('참참!');
}

// Truthy는 거의 대부분 문자, Falsy는 false와 0 등에 국한

if (null) {
    console.log('참!');
}

if (undefined) {
    console.log('참!');
}

if (NaN) {
    console.log('참!');
}

if ('') {
    console.log('참!');
}

if (0n) {
    console.log('참!');
}

const fruits = ['Apple', 'Banana'];

if (fruits) {
    console.log('아이템이 들어있음!');
}

const fruit = [];

if (fruit.length) {
    console.log('아이템이 들어있음@!');
}
