class City {
    constructor(x, y) {
        if (!arguments.length) {
            // Return random integer from min to max
            const min = 100;
            const max = 700;
            this._x = this.getRandomInteger(min, max); 
            this._y = this.getRandomInteger(min, max);   
        }else {
            this._x = x;
            this._y = y;
        } 
    }

    get x () {
        return this._x;
    }

    get y () {
        return this._y;
    }

    getRandomInteger(min, max){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    distanceTo (anotherCity) {
        const distance = Math.sqrt(
            Math.abs(this.x - anotherCity.x)**2 + 
            Math.abs(this.y - anotherCity.y)**2
        );
        return distance;
    }

    showCity() {
        return `City (${this.x}, ${this.y})`;
    }
}