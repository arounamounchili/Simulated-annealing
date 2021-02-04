
const main = function () {
    // Create and add our cities
    let city1 = new City(60, 200);
    TourManager.addCity(city1);
    let city2 = new City(180, 200);
    TourManager.addCity(city2);
    let city3 = new City(80, 180);
    TourManager.addCity(city3);
    let city4 = new City(140, 180);
    TourManager.addCity(city4);
    let city5 = new City(20, 160);
    TourManager.addCity(city5);
    let city6 = new City(100, 160);
    TourManager.addCity(city6);
    let city7 = new City(200, 160);
    TourManager.addCity(city7);
    let city8 = new City(140, 140);
    TourManager.addCity(city8);
    let city9 = new City(40, 120);
    TourManager.addCity(city9);
    let city10 = new City(100, 120);
    TourManager.addCity(city10);
    let city11 = new City(180, 100);
    TourManager.addCity(city11);
    let city12 = new City(60, 80);
    TourManager.addCity(city12);
    let city13 = new City(120, 80);
    TourManager.addCity(city13);
    let city14 = new City(180, 60);
    TourManager.addCity(city14);
    let city15 = new City(20, 40);
    TourManager.addCity(city15);
    let city16 = new City(100, 40);
    TourManager.addCity(city16);
    let city17 = new City(200, 40);
    TourManager.addCity(city17);
    let city18 = new City(20, 20);
    TourManager.addCity(city18);
    let city19 = new City(60, 20);
    TourManager.addCity(city19);
    let city20 = new City(160, 20);
    TourManager.addCity(city20);
    

    // Set initial temperature
    let temperature = 0;

    // Cooling rate
    const coolingRate = 0.003;

    // Initialize initial solution
    let currentSolution = new Tour();
    currentSolution.generateIndividual();

    console.log("Initial Solution distance: " + currentSolution.getDistance());

    // Set as current best
    let best = new Tour();
    best.cities = currentSolution.getCities();

    // Loop until system has cooled
    while(temperature > 1) {
        // Create a new neighbour tour
        let newSolution = new Tour();
        newSolution.cities = currentSolution.getCities();

        // Get a random positions in the tour
        let tourPos1 = Math.floor((newSolution.citiesLength() * Math.random()));
        let tourPos2 = Math.floor((newSolution.citiesLength() * Math.random()));

        // Get the cities at selected positions in the tour
        let citySwap1 = newSolution.getCity(tourPos1);
        let citySwap2 = newSolution.getCity(tourPos2);

        // Swap them
        newSolution.setCity(tourPos2, citySwap1);
        newSolution.setCity(tourPos1, citySwap2);

        // Get energy of solutions
        let currentEnergy = currentSolution.getDistance();
        let neighbourEnergy = newSolution.getDistance();

        // Decide if we should accept the neighbour 
        if (this.acceptanceProbability(currentEnergy, neighbourEnergy, temperature) > Math.random()) {
            currentSolution = new Tour();
            currentSolution.cities = newSolution.getCities();
        }

        // keep track of the best solution found
        if (currentSolution.getDistance() < best.getDistance()) {
            best = new Tour();
            best.cities = currentSolution.getCities();
        }

        // Cool System
        temp *= 1 - coolingRate;
    }

    console.log("Final solution distance: " + best.getDistance());
    console.log("Tour: " + best.showTour());
    TourManager.cityMap = [];
}



// Calculate the acceptance Probability
const acceptanceProbability = function (energy, newEnergy, temperature) {
    // If the new solution is better, accept it
    if (newEnergy < energy) {
        return 1.0;
    }
    // If the new solution is worse, calculate an acceptance probability
    return Math.exp((energy - newEnergy) / temperature);
}

main();