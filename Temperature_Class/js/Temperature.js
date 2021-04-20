class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }

    get celsius() {
        return this._celsius;
    }

    set celsius(value) {
        this._celsius = value;
    }

    convertFahrenheit() {
        return this._celsius * 9 / 5 + 32
    }

    convertKelvin() {
        return this._celsius + 273
    }
}