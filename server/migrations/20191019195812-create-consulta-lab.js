'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('consulta_labs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estado:{
        type: Sequelize.BOOLEAN,
        allowNull: false, 
        defaultValue: true
      },
      estado_update: {
        type: Sequelize.BOOLEAN,
        allowNull: false, 
        defaultValue: true
      },
      consultorio:{
        type: Sequelize.STRING
      },
      tipo_laboratorio:{
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
      },
      hora: {
        type: Sequelize.STRING
      },
      historial: {
        type: Sequelize.INTEGER
      },
      nombre_doctor: {
        type: Sequelize.TEXT
      },
      examen: {
        type: Sequelize.JSON
      },
      otros: {
        type: Sequelize.TEXT
      },
      id_internacion: {
        type: Sequelize.INTEGER
      },
      id_consulta: {
        type: Sequelize.INTEGER
      },
      id_emergencia: {
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('consulta_labs');
  }
};