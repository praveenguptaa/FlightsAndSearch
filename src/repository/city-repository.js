const {City} = require('../models/index')

class cityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
        } catch(error){
            console.log("Something went wrong in city-repository layer");
            throw {error};
        }
    }

    async deleteCity(cityid){
        try{
            await City.destroy({
                where: {
                    id: cityid
                }
            });
        } catch(error){
            console.log("Something went wrong in city-repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in city-repository layer");
            throw {error};
            
        }
    }

    async updateCity(data,cityId){
        try {
            const city = await City.update(data,{
                where: {
                    id : cityId
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in city-repository layer");
            throw {error};
        }
    }
}

module.exports = cityRepository;