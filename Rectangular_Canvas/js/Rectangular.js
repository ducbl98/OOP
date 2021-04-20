class Rectangular {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    calPerimeter() {
        return (this._height + this._width) * 2
    }

    calArea() {
        return this.height * this.width
    }
    display(){
        alert(`The perimeter is ${this.calPerimeter()} and the area is ${this.calArea()}`)
    }
    createRectangular(){
        let ctx = document.getElementById('rectangular').getContext("2d")
        ctx.strokeRect(10,10,this._width,this._height)
    }

}