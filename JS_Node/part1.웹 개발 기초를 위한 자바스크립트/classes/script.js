// class Person {
//     constructor(name, email, birthday) {
//         this.name = name;
//         this.email = email;
//         this.birthday = new Date(birthday);
//     }

//     // prototype 메서드 설정.
//     introduce() {
//         return `Hello my name is ${this.name}`;
//     }

//     // 클래스 함수 자체에 메서드 설정. 정적(static) 메서드
//     static multipleNumbers(x, y) {
//         return x * y;
//     }
// }

// const john = new Person('john', 'john@example.com', '10-3-98');
// console.log(john);

// 아래는 상속 파트

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    introduce() {
        return `Hello my name is ${this.name}`;
    }
}

class Client extends Person {
    constructor(name, email, phone, address) {
        super(name, email);

        this.phone = phone;
        this.address = address;
    }
}

const john = new Client('john', 'john@example.com', '010-0000-0000', 'Seoul');
console.log(john.introduce());

// john.introduce가 실행되는 순서
/* 
1. Client 객체에 client.introduce가 있는지 확인합니다.
2. 없기 때문에 Client.prototype에 있는지도 확인하지만 introduce는 없습니다.
3. extends를 통해 관계가 만들어진 Client.prototype의 프로토타입인 Person.prototype에 메서드가 있는지 확인합니다.
여기에 introduce가 있기 때문에 이것을 사용합니다.
*/
