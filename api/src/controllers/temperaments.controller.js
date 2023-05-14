const { Temperament } = require('../db')

const getTemperaments = async  (req, res, next) => {
    try {
      const temperaments = await Temperament.findAll();
      if (!temperaments.length > 0)
        return res.status(404).json({ message: "No hay temperamentos por el momento" });
      res.status(200).json({ message: "TEMPERAMENTS!", temperaments });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };


  module.exports = { getTemperaments }