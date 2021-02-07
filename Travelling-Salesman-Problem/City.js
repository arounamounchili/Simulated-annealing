class City {
    constructor(x, y) {
        if (x === undefined || y === undefined) {
            // Return random integer from min to max
            const min = 100;
            const max = 600;
            this.x = this.getRandomInteger(min, max); 
            this.y = this.getRandomInteger(min, max);   
        }else {
            this.x = x;
            this.y = y;
        } 
    }

    getRandomInteger(min, max){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    distanceTo (city) {
        const distance = Math.sqrt(
            Math.abs(this.x - city.x)**2 + 
            Math.abs(this.y - city.y)**2
        );
        return distance;
    }

    showCity() {
        return `City (${this.x}, ${this.y})`;
    }
}