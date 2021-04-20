class Circle {
    constructor(radius, color) {
        this._radius = radius;
        this._color = color;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    getArea() {
        return this._radius * this._radius * Math.PI
    }
}