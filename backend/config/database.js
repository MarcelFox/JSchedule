const dotenv = require('dotenv');
dotenv.config({});

module.exports = {
  dialect: 'postgres',
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  username: process.env.PG_USER,
  password: process.env.PG_PASS,
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}