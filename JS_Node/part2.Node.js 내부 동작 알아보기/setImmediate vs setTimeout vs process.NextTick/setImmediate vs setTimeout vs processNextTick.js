/* process.nextTick() 재귀 호출 시 이벤트 루프 block */
// let count = 0;
// const cb = () => {
//     console.log(`Processing nextTick cb ${++count}`);
//     process.nextTick(cb);
// };
// setImmediate(() => console.log(`setImmediate is called`));
// setTimeout(() => console.log('setTimeout executed'), 100);
// process.nextTick(cb);
// console.log('start');

/* setImmediate() 재귀 호출 시 */
// let count = 0;
// const cb = () => {
//     if (count < 2000) {
//         console.log(`Processing setImmediate cb ${++count}`);
//         setImmediate(cb);
//     }
// };
// setImmediate(cb);
// setTimeout(() => console.log('setTimeout executed'), 50);
// console.log('Start');

/* setImmediate & nextTick
기본적으로 서로의 이름이 바뀌어야 합니다..
왜나하면 process.nextTick()가 setImmediate()보다 더 즉시 발생하기 때문이다.
그렇지만 현재는 이 둘의 이름을 바꿀 수는 없습니다.
왜냐하면 이 둘의 이름을 바꾼다면 이 둘을 사용하고 있는 대다수의 npm 패키지가 망가질 수도 있기 때문이고,
매일 새로운 모듈이 더해지고 있으므로 잠재적으로 더 많은 npm 패키지가 깨질 수가 있습니다.
그래서 이 둘의 이름은 바뀔 수가 없습니다.

그리고 모든 경우에 setImmediate()를 사용하기를 추천하는데, 사용하기 쉽고 browser 등의 다양한 환경에서 호환이 더 잘 되기 때문입니다.*/

/* 랜덤임(프로세스 성능에 의해 결정) */
setTimeout(() => {
    console.log('setTimeout');
}, 0);

setImmediate(() => {
    console.log('setImmediate');
});
