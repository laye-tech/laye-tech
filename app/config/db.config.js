module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "testrapide",
  dialect: "mysql",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};