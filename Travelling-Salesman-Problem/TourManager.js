class TourManager {
   
    static cityMap = [];
    
    static addCity (city) {
        this.cityMap.push(city)
    }

   static  getCity (index) {
        return this.cityMap[index];
    }

    static getCityNumber () {
        return this.cityMap.length;
    }
}