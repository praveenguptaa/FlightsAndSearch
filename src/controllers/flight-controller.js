const {FlightService} = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created the flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to create the flight',
            err: error
        })
    }
}

const get = async (req,res) => {
    try {
        const response = await flightService.getFlight(req.params.id); 
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched the flight',
            err: {}

        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch the flight',
            err: error
        })
    }
}

const getAll = async (req,res) => {
    try {
        const response = await flightService.getAllFlights(req.query); 
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched the flights',
            err: {}

        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch the flights',
            err: error
        })
    }
}


const update = async (req,res) => {
    try {
        const response = await flightService.updateFlight(req.params.id,req.body); 
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated the flight',
            err: {}

        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to update the flight',
            err: error
        })
    }
}

module.exports = {
    create,
    get,
    getAll,
    update
}