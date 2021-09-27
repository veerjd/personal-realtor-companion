require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);
const makePropertyModel = require('./property-db')

sequelize.sync({ force: true });

const propertyDb = makePropertyModel(sequelize)

module.exports = { propertyDb }