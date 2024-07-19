// 선택적 체이닝(Optional Chaining)

// const user = null; // undefined도 동일
// console.log(user.name); // null 이라는 값에서는 속성을 읽을 수 없다는 오류

// const user = undefined;
// console.log(user?.name); // . 앞에 ? 추가

// const users = null;
// console.log(users?.name); // null도 undefined

const userA = {
    name: 'HEROPY',
    age: 85,
    address: {
        country: 'Korea',
        city: 'Seoul',
    },
};

const userB = {
    name: 'Neo',
    age: 22,
};

function getCity(user) {
    return user.address?.city || '주소 없음';
}

console.log(getCity(userA));
console.log(getCity(userB)); // 에러 -> address 뒤에 ? 추가
