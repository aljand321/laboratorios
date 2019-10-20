'use strict';
module.exports = (sequelize, DataTypes) => {
  const consulta_lab = sequelize.define('consulta_lab', {
    estado: DataTypes.BOOLEAN,
    estado_update: DataTypes.BOOLEAN,
    tipo_laboratorio:DataTypes.STRING,
    fecha: DataTypes.STRING,
    hora: DataTypes.STRING,
    historial: DataTypes.INTEGER,
    nombre_doctor: DataTypes.TEXT,
    examen: DataTypes.JSON,
    otros: DataTypes.TEXT,
    id_internacion: DataTypes.INTEGER,
    id_consulta: DataTypes.INTEGER,
    id_emergencia: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
  }, {});
  consulta_lab.associate = function(models) {
    // associations can be defined here
  };
  return consulta_lab;
};