const express = require("express");
const routerDogs = express.Router();

const { getDogs, getDogById } = require('../controllers/dogs.controller')

routerDogs.get("/", getDogs);

routerDogs.get("/:idRaza", getDogById);

module.exports = routerDogs;
