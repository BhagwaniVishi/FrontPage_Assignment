const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("hacker_news", "root", "vishi", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
