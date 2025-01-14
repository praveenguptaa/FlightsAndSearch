const express = require('express');

const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");

const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getall);
router.patch('/city/:id',CityController.update);

router.post('/flights',FlightController.create);
router.get('/flights/:id',FlightController.get);
router.get('/flights',FlightController.getAll);
router.patch('/flights/:id',FlightController.update);

module.exports = router;