// function hello() {
//     console.log('Hello!');
// }

// hello(); // call
// hello; // 함수 덩어리

// console.log(hello);

// function getNumber() {
//     return 123;
// }

// console.log(typeof getNumber()); // number
// console.log(typeof getNumber); // function

const a = function () {
    console.log('A');
};

const b = function (c) {
    console.log(c);
    c();
};

b(a);
