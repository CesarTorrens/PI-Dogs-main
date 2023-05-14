const express = require('express')
const routerTemperaments = express.Router()

const { getTemperaments } = require('../controllers/temperaments.controller')


routerTemperaments.get("/", getTemperaments);


module.exports = routerTemperaments