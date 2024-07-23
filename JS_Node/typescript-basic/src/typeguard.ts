// 타입 가드(Guard)
// if 조건이나, 기타 다양한 내용을 추가하여 에러를 코드상에서 방지

// function logText(el: Element) {
//     console.log(el.textContent);
// }

// const h1El = document.querySelector('h1');
// if (h1El instanceof HTMLHeadingElement) {
//     logText(h1El);
// } // 타입 가드

// function add(val: string | number) {
//     let res = 'Result => ';
//     if (typeof val === 'number') {
//         res += val.toFixed(2);
//     } else {
//         res += val.toUpperCase();
//     }
//     console.log(res);
// }

// add(3.141592);
// add('hello World');
