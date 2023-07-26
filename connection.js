const mysql = require('mysql');
// const Sequelize = require('sequelize');
// const dbConfig = require("./db.config");
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "newuser",
  password: "mysql@1234",
  database: "test",
  port : 3306
});

// const sequelize = new Sequelize(dbConfig.user,dbConfig.user,dbConfig.password,{
//     host: dbConfig.host,
//     port : 3306,
//     dialect: dbConfig.dialect,
//     operatorsAliases: false,
//   });
// const db = {};
// db.Sequelize=Sequelize;
// db.sequelize=sequelize;

module.exports = db;