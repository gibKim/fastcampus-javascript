function firstFunction(parameters, callback) {
    // do something
    const response1 = request(`http://skillflo.io?id=${parameters.id}`);
    callback(response1);
}

function secondFunction(response1, callback) {
    const response2 = request('http://skillflo.io', response1);
    callback();
}

firstFunction(para, function (response1) {
    secondFunction(response1, function () {
        thirdFunction(para, function () {
            // ...
        });
    });
});

// 자바스크립트는 싱글스레드이지만, 비동기 처리를 통해 병렬로 처리를 할 수 있음

/* 콜백 함수의 단점
1. 소스 코드를 보는데 가독성이 떨어진다.
2. 에러 처리를 한다면 모든 콜백에서 각각 에러 핸들링을 해주어야 한다.
*/

// 위의 단점을 해결 하기 위해 ES6의 Promise 객체를 사용
