const {City} = require('../models/index')

class cityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
        } catch(error){
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
            throw {error};
        }
    }
}

module.exports = cityRepository;