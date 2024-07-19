// const date = new Date();
// console.log(date);

// const d1 = new Date(2022, 11, 16, 12, 57, 30);
// console.log(d1);

// const d2 = new Date('Fri Dec 16 2022 12:57:30 GMT+0900 (한국 표준시)');
// console.log(d2);
// console.log(d2.getFullYear());

// // .getFullYear()와 .setFullYear()
// // 날짜 인스턴스의 '연도'를 반환하거나 지정합니다.

// const date = new Date();

// console.log(date.getFullYear());
// date.setFullYear(2023);
// console.log(date.getFullYear());
// console.log(date);

// // .getMonth(), .setMonth()
// // 날짜 인스턴스의 '월'을 반환하거나 지정합니다.
// // 0부터 시작(Zero-based numbering)합니다.

// const date = new Date();

// console.log(date.getMonth());
// console.log(date);

// date.setMonth(0);
// console.log(date.getMonth());
// console.log(date);

// // .getDate()와 .setDate()
// // 날짜 인스턴스의 '일'을 반환하거나 지정합니다.

// const date = new Date();

// console.log(date.getDate());
// console.log(date);

// date.setDate(11);
// console.log(date.getDate());
// console.log(date);

// // .getHours()와 .setHours()
// // 날짜 인스턴스의 '시간'을 반환하거나 지정합니다.

// const date = new Date();

// console.log(date.getHours());
// console.log(date);

// date.setHours(7);
// console.log(date.getHours());
// console.log(date);

// // .getMinutes()와 .setMinutes()
// // 날짜 인스턴스의 '분'을 반환하거나 지정합니다.

// const date = new Date();

// console.log(date.getMinutes());
// console.log(date);

// date.setMinutes(2);
// console.log(date.getMinutes());
// console.log(date);

// // .getSeconds()와 .setSeconds()
// // 날짜 인스턴스의 '초'를 반환하거나 지정합니다.

// const date = new Date();

// console.log(date.getSeconds());
// console.log(date);

// date.setSeconds(2);
// console.log(date.getSeconds());
// console.log(date);

// // .getDay()
// // 날짜 인스턴스의 '요일'을 반환합니다.

// const date = new Date();
// const day = date.getDay();

// console.log(day);
// console.log(date);
// console.log(getDayKo(day));

// function getDayKo(day) {
//     switch (day) {
//         case 0:
//             return '일요일';
//         case 1:
//             return '월요일';
//         case 2:
//             return '화요일';
//         case 3:
//             return '수요일';
//         case 4:
//             return '목요일';
//         case 5:
//             return '금요일';
//         case 6:
//             return '토요일';
//     }
// }

// // .getTime(), setTime()
// // `1970-01-01 00:00:00`(유닉스타임)부터 경과한,
// // 날짜 인스턴스의 '밀리초(ms)'로 반환하거나 지정합니다.

// const date = new Date();

// console.log(date.getTime());
// console.log(date);

// date.setTime(1800000000000);
// console.log(date.getTime());
// console.log(date);

/*유닉스타임으로 시간 비교*/
// Date.prototype.isAfter = function (date) {
//     const a = this.getTime();
//     const b = date.getTime();
//     return a > b;
// };

// const d1 = new Date('Sat Jan 01 2022 00:00:00 GMT+0900 (한국 표준시)');
// const d2 = new Date('Sat Jan 01 2023 00:00:00 GMT+0900 (한국 표준시)');

// console.log(d1.isAfter(d2)); // false
// console.log(d2.isAfter(d1)); // true

// // Date.now()
// // `1970-01-01 00:00:00`(유닉스타임)부터 경과한,
// // 메소드가 호출될 때의 '밀리초(ms)'로 반환하거나 지정합니다.

// const time = new Date().getTime();
// console.log(Date.now());
// console.log(time);

// setTimeout(() => {
//     console.log(Date.now());
//     console.log(time);
// }, 1000);
