const {CityService} = require("../services/index");

const cityservice = new CityService();

//POST
const create = async (req,res) => {
    try {
        const city = await cityservice.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created the city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to create the city',
            err: error
        })
    }
}

//DELETE -> /city/:id 
const destroy = async (req,res) => {
    try {
        const response = await cityservice.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted the city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to delete the city',
            err: error
        })
    }
}

// GET -> /city/:id
const get = async (req,res) => {
    try {
        const response = await cityservice.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully get the city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to get the city',
            err: error
        })
    }
}

// GET - /city - Give all cities
const getall = async (req,res) => {
    try{
        const response = await cityservice.getallCity();
        return res.status(200).json({
        data : response,
        success : true,
        message : "Successfully fetched all cities",
        err : {}
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to get cities",
            err : error
        })
        
    }
    
}

// PATCH -> /city/:id  -> req.body
const update = async (req,res) => {
    try {
        const response = await cityservice.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated the city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to update the city',
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getall
}
