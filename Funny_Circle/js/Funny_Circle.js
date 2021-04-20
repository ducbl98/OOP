class Funny_Circle {
    constructor(x, y, radius) {
        this._x = x;
        this._y = y;
        this._radius = radius;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    getRandomHex() {
        return Math.floor(Math.random() * 255)
    }

    getRandomColor() {
        let red = this.getRandomHex()
        let green = this.getRandomHex()
        let blue = this.getRandomHex()
        return `rgb(${red},${green},${blue}`
    }

    createFunnyCircle() {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        this.radius = Math.floor(Math.random() * this.radius);
        let color = this.getRandomColor();
        this._x = Math.random() * window.innerWidth;
        this._y = Math.random() * window.innerHeight;
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

}