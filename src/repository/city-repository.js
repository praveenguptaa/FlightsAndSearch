const {Op} = require("sequelize");

const {City} = require('../models/index')


class CityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
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
            return true;
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

    async getallCity(filter){
        try {
            if(filter.name){
                const city = await City.findAll({
                    where: {
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return city;
            }
            const city = await City.findAll();
            return city;
        } catch (error) {
            console.log("Something went wrong in city-repository layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try {
            // const city = await City.update(data,{
            //     where: {
            //         id : cityId
            //     }
            // });
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in city-repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;