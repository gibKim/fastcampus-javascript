// 콜백(Callback)
/* 함수가 실행될 때 인수로 들어가는 또 하나의 함수 */

// const a = (callback) => {
//     console.log('A');
//     callback();
// };
// const b = () => {
//     console.log('B');
// };

// a(b);
/* 한마디로 파라미터에 함수 데이터를 넣을 수 있음 */

// const sum = (a, b) => {
//     setTimeout(() => {
//         return a + b;
//     }, 1000); // 콜백 함수임
// };

// console.log(sum(1, 2));
// console.log(sum(3, 7));

// const sum = (a, b, c) => {
//     setTimeout(() => {
//         c(a + b);
//     }, 1000);
// };

// sum(1, 2, (value) => {
//     console.log(value);
// }); // 세번째 인수에는 함수 데이터가 들어갔음

// sum(3, 7, (value) => {
//     console.log(value);
// });

// 콜백(Callback)
// https://www.gstatic.com/webp/gallery/4.jpg

const loadImage = (url, cb) => {
    const imgEl = document.createElement('img');
    imgEl.src = url;
    imgEl.addEventListener('load', () => {
        setTimeout(() => {
            cb(imgEl);
        }, 1000);
    });
};

/*
<div class="container">
  <h1>Loading...</h1>
</div> 
추가
*/
const containerEl = document.querySelector('.container');
loadImage('https://www.gstatic.com/webp/gallery/4.jpg', (imgEl) => {
    containerEl.innerHTML = ''; // 초기화
    containerEl.append(imgEl);
});
