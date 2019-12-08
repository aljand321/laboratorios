'use strict';
module.exports = (sequelize, DataTypes) => {
  const resp_lab = sequelize.define('resp_lab', {
    estado: DataTypes.BOOLEAN,
    estado_update: DataTypes.BOOLEAN,
    fecha: DataTypes.STRING,
    hora: DataTypes.STRING,
    historial: DataTypes.INTEGER,
    nombre_user: DataTypes.TEXT,
    imagen_resp: DataTypes.STRING,
    img_id: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    id_lab: {
      type: DataTypes.INTEGER,
      references: {
        model: 'consulta_lab',
        key: 'id',
        as: 'id_lab',
      }
    },
    id_user: DataTypes.INTEGER
  }, {});
  resp_lab.associate = function(models) {
    // associations can be defined here
    resp_lab.belongsTo(models.consulta_lab, {
      foreignKey: 'id_lab',
      onDelete: 'CASCADE'
    });
  };
  return resp_lab;
};