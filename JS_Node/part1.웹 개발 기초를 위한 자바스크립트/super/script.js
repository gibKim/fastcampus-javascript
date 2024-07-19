class Car {
    // 3
    constructor(brand) {
        this.carname = brand;
    }

    // 6
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    // 2
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }

    // 5
    show() {
        return super.present() + ', it is a ' + this.model;
    }
}
// 1
let mycar = new Model('Ford', 'Mustang');
// 4
mycar.show();
