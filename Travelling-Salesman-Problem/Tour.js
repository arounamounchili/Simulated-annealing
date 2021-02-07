class Tour {
    constructor () {
        this.cities = []
        this.distance = 0;
    }

    getCities() {
        return this.cities;
    }

    generateIndividual() {
        for (let i = 0; i < TourManager.getCityNumber(); i++) {
            this.setCity(i, TourManager.getCity(i));
        }

        function shuffle (arr) {
            return arr.sort(() => Math.random() - 0.5);
        }

        this.cities = shuffle(this.cities);
    }

    getCity (index) {
        return this.cities[index];
    }

    setCity (index, city) {
        this.cities.splice(index, 0, city)
        // reset distance when cities is altered
        this.distance = 0; 
    }

    // get the total distance
    getDistance() {
          if (this.distance === 0) {
              let citiesDistance = 0;
              for (let i = 0; i < this.citiesLength(); i++) {
                let fromCity = this.getCity(i); 
                let destCity;
                
                if (i + 1 < this.citiesLength()) {
                    destCity = this.getCity(i + 1);
                } else {
                    destCity = this.getCity(0)
                }

                citiesDistance += fromCity.distanceTo(destCity);
              }
              this.distance = citiesDistance;
          }
          return this.distance;
    }

    citiesLength() {
        return this.cities.length;
    }

    showTour () {
        let geneString = "|"
        for (let i = 0; i < this.citiesLength(); i++) {
            geneString += this.getCity(i).showCity() + "|";
        }

        return geneString;
    }
}