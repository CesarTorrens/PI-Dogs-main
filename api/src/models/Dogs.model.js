const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id:  {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'imagen'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nombre'
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'altura'
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'peso'
    },
    yearsOfLife: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'años_de_vida'
    },
  });
};
