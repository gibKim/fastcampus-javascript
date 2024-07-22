// // window.innerWidth / window.innerHeight

// // 현재 화면(Viewport)의 크기를 얻습니다.

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// // window.scrollX / window.scrollY

// // 페이지의 좌상단 기준, 현재 화면(Viewport)의
// // 수평 혹은 수직 스크롤 위치를 얻습니다.

// console.log(window.scrollX, window.scrollY);

// // window.scrollTo() / E.scrollTo()

// // 지정된 좌표로 대상(화면, 스크롤 요소)을 스크롤합니다.
// // 대상.scrollTo(X좌표, Y좌표)
// // 대상.scrollTo({ top: Y, left: X, behavior: 'smooth'})

// const parentEl = document.querySelector('.parent');

// setTimeout(() => {
//     parentEl.scrollTo({
//         // window.scrollTo 써도됨
//         left: 0,
//         top: 500,
//         behavior: 'smooth',
//     });
// }, 1000);

// // E.clientWidth / E.clientHeight

// // 테두리 선(border)을 제외한 요소의 크기를 얻습니다.

// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

// // 스크롤바 너비도 제외됨
// console.log(parentEl.clientWidth, parentEl.clientHeight);
// console.log(childEl.clientWidth, childEl.clientWidth);

// // E.offsetWidth / E.offsetHeight

// // 테두리 선(border)을 포함한 요소의 크기를 얻습니다.
// /* clientWidth,Height보다 더 쓰기 유용 */

// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

// console.log(parentEl.offsetWidth, parentEl.offsetHeight);
// console.log(childEl.offsetWidth, childEl.offsetHeight);

// // E.scrollLeft / E.scrollTop

// // 스크롤 요소의 좌상단 기준,
// // 현재 스크롤 요소의 수평 혹은 수직 스크롤 위치를 얻습니다.

// window.parentEl = document.querySelector('.parent');
// console.log(parentEl.scrollLeft, parentEl.scrollTop);

// // E.offsetLeft / E.offsetTop

// // 페이지의 좌상단 기준, 요소의 위치를 얻습니다.

// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

// console.log(parentEl.offsetLeft, parentEl.offsetTop);
// console.log(childEl.offsetLeft, childEl.offsetTop);

// // E.getBoundingClientRect()

// // 테두리 선(border)을 포함한 요소의 크기와
// // 화면에서의 "상대 위치 정보"를 얻습니다.
// /* 기준은 위와 왼쪽. */

// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

// console.log(parentEl.getBoundingClientRect());
// console.log(childEl.getBoundingClientRect());
