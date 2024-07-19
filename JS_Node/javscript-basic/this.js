// this
//// 일반 함수의 this는 호출 위치에서 정의 = 화살표 함수는 다름
//// 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의

// const user = {
//     firstName: 'HEROPY',
//     lastName: 'Park',
//     age: 85,
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`;
//     }, // 화살표 함수로 바꾸면 error 남. undefined => 외부의 또 다른 함수를 기준으로 this를 사용한다는 뜻이기 때문에 외부 함수가 없으므로 오류
// };

// console.log(user.getFullName());

// function user() {
//     this.firstName = 'Neo';
//     this.lastName = 'Anderson';

//     return {
//         firstName: 'HEROPY',
//         lastName: 'Park',
//         age: 85,
//         getFullName() {
//             return `${this.firstName} ${this.lastName}`;
//         }, // getFullName:() {} 로 입력하면 일반함수 출력, getFullName: () => {} 외부함수 출력
//     };
// }

// const lewis = {
//     firstName: 'Lewis',
//     lastName: 'Yang',
// };

// const u = user();
// console.log(u.getFullName());
// console.log(u.getFullName.call(lewis)); // getFullName이라는 메소드를 빌려서 call을 함
// /* 이유는 2번에서 본 것처럼 this는 호출 위치에서 정의되기 때문임 */

const timer = {
    title: 'TIMER!',
    timeout: function () {
        console.log(this.title);
        setTimeout(function () {
            console.log(this.title);
        }, 1000);
    },
};

timer.timeout(); // timeout 일반함수, this 호출 위치에서 정의

const timers = {
    title: 'TIMER!',
    timeout: function () {
        console.log(this.title);
        setTimeout(() => {
            console.log(this.title);
        }, 1000);
    },
};

timers.timeout();
