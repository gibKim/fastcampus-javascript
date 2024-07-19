// 호출 스케일링(Scheduling a function call)

const hello = () => {
    console.log('Hello~');
};

// const timeout = setTimeout(hello, 2000);
// // clearTimeout(timeout); // timeout을 해제
// const h1El = document.querySelector('h1');
// h1El.addEventListener('click', () => {
//     console.log('Clear!');
//     clearTimeout(timeout);
// });

// 몇초마다 함수를 반복적으로 실행(setInterval)
const timeout = setInterval(hello, 2000);
// clearTimeout(timeout); // timeout을 해제
const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
    console.log('Clear!');
    clearInterval(timeout);
});
