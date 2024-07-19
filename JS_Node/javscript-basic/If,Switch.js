// If 조건문

function isPositive(number) {
    if (number > 0) {
        return '양수';
    } else if (number < 0) {
        return '음수';
    } else {
        return '0';
    }
}

console.log(isPositive(1));
console.log(isPositive(10));
console.log(isPositive(-2)); // return 없으면 undefined
console.log(isPositive(0)); // 0 설정도 따로 해줘야함

// Switch 조건문

function price(fruit) {
    // switch (fruit) {
    //     case 'Apple':
    //         return 1000;
    //     case 'Banana':
    //         return 1500;
    //     case 'Cherry':
    //         return 2000;
    //     default:
    //         return 0;
    // }

    if (fruit === 'Apple') {
        return 1000;
    } else if (fruit === 'Banana') {
        return 1500;
    } else if (fruit === 'Cherry') {
        return 2000;
    } else {
        return 0;
    }
}

console.log(price('Apple'));
console.log(price('Banana'));
console.log(price('Cherry'));
console.log(price('Hello'));
