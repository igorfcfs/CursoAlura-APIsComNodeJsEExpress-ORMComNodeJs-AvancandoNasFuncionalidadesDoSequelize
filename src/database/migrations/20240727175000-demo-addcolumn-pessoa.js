"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pessoas", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE,
    });
  },
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pessoas", "deletedAt");
  }
};