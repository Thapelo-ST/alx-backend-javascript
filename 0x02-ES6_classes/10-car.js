// 10-car.js
const cloneSymbol = Symbol('clone');

export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;

        // Set up a unique symbol for the clone method
        this[cloneSymbol] = () => new this.constructor();
    }

    get brand() {
        return this._brand;
    }

    get motor() {
        return this._motor;
    }

    get color() {
        return this._color;
    }

    cloneCar() {
        // Invoke the clone method using the unique symbol
        return this[cloneSymbol]();
    }
}
