'use strict';
module.exports = (sequelize, DataTypes) => {
  const diagnostico = sequelize.define('diagnostico', {
    codigo: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {});
  diagnostico.associate = function(models) {
    // associations can be defined here
  };
  return diagnostico;
};