// function fetchData() {
//     return new Promise((resolve, reject) => {
//         // 비동기 요청
//         const success = true;
//         if (success) {
//             resolve('성공');
//         } else {
//             reject('실패');
//         }
//     });
// }

// fetchData()
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// 실제로 데이터 가져오기
// fetch('http://jsonplaceholder.typicode.com/todos/1')
//     .then((response1) => response1.json())
//     .then((json1) => console.log(json1))
//     .then(() => fetch('http://jsonplaceholder.typicode.com/todos/2'))
//     .then((response2) => response2.json())
//     .then((json2) => console.log(json2))
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('작업 끝!');
//     });

/* Promise.all()
Promise.all() 메서드는 순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 혹은 프로미스가
주어지지 않았을 때 이행하는 Promise를 반환합니다. 주어진 프로미스 중 하나가 거부하는 경우, 첫 번째로
거절한 프로미스의 이유를 사용해 자신도 거부합니다. */
// const promise1 = Promise.reject('failed reason');
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'foo');
// });

// Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//         console.log(values);
//     })
//     .catch((error) => console.log(error));

/* Promise.race()
Promise.race() 메서드는 Promise 객체를 반환합니다. 이 프로미스 객체는 iterable 안에 있는
프로미스 중에서 가장 먼저 완료된 것의 결괏값으로 그대로 이행하거나 거부합니다. */

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
// });

/* await
비동기 코드를 마치 동기 코드처럼 보이게 합니다.
Promise에 then 메서드를 체인 형식으로 호출하는 것보다 가독성이 좋습니다.
await는 async 내부 함수에서만 사용할 수 있습니다.
동기식 코드에서 쓰는 try... catch 구문을 async/await 구조에서 사용할 수 있습니다. */

async function makeRequests() {
    try {
        const response1 = await fetch('http://jsonplaceholder.typicode.com/todos/1');
        const jsonResponse1 = await response1.json();
        console.log(jsonResponse1);
    } catch (error) {
        console.error(error);
    } finally {
        console.log('모든 작업 끝---');
    }
}

makeRequests();
