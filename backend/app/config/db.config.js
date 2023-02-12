module.exports = {
    HOST: "database-2.czezomqwfxmw.us-east-1.rds.amazonaws.com",
    USER: "postgres",
    PASSWORD: "095126167170",
    DB: "FinalProject",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };