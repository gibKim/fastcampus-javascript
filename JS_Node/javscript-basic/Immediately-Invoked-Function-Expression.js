// 즉시실행함수(IIFE, Immediately-Invoked Function Expression)

// const a = 7;

// const double = () => {
//     console.log(a * 2);
// };
// double();

// (() => console.log(a * 2))();

// (() => {console.log(a * 2)})(); // (F)()
// (function () {console.log(a * 2})(); // (F)()
// (function () {console.log(a * 2}());  // (F())
// !function () {console.log(a * 2}();   // !F()
// +function () {console.log(a * 2}(); // +F()

// 코드를 난독화
((a, b) => {
    console.log(a.innerWidth);
    console.log(b.body);
})(window, document);
