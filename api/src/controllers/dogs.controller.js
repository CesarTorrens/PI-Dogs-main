const { Dog } = require("../db");

const getDogs = (req, res, next) => {
  try {
    const dogs = Dog.findAll();
    if (!dogs.length > 0)
      return res.status(404).json({ message: "No hay Dogs por el momento" });
    res.status(200).json({ message: "DOGS!", dogs });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getDogById = (req, res, next) => {
  const { idRaza } = req.params;
  try {
    const dog = Dog.findByPk(idRaza);
    if (!dog.id)
      return res
        .status(404)
        .json({ message: `No se encuentra el Dog con el id ${idRaza}` });
    res.status(200).json({ message: "DogById", dog });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { getDogs, getDogById };
