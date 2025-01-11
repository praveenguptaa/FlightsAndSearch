const {Flights} = require("../models/index");

class CityRepository {
    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight-repository layer");
            throw {error};
        }
    } 
}

module.exports = CityRepository;