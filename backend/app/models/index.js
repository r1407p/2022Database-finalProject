const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.br_videoinfo = require("./br_videoinfo.model.js")(sequelize, Sequelize);
db.br_videotrending = require("./br_videotrending.model.js")(sequelize, Sequelize);
db.ca_videoinfo = require("./ca_videoinfo.model.js")(sequelize, Sequelize);
db.ca_videotrending = require("./ca_videotrending.model.js")(sequelize, Sequelize);
db.de_videoinfo = require("./de_videoinfo.model.js")(sequelize, Sequelize);
db.de_videotrending = require("./de_videotrending.model.js")(sequelize, Sequelize);
db.fr_videoinfo = require("./fr_videoinfo.model.js")(sequelize, Sequelize);
db.fr_videotrending = require("./fr_videotrending.model.js")(sequelize, Sequelize);
db.gb_videoinfo = require("./gb_videoinfo.model.js")(sequelize, Sequelize);
db.gb_videotrending = require("./gb_videotrending.model.js")(sequelize, Sequelize);
db.in_videoinfo = require("./in_videoinfo.model.js")(sequelize, Sequelize);
db.in_videotrending = require("./in_videotrending.model.js")(sequelize, Sequelize);
db.jp_videoinfo = require("./jp_videoinfo.model.js")(sequelize, Sequelize);
db.jp_videotrending= require("./jp_videotrending.model.js")(sequelize, Sequelize);
db.kr_videoinfo = require("./kr_videoinfo.model.js")(sequelize, Sequelize);
db.kr_videotrending = require("./kr_videotrending.model.js")(sequelize, Sequelize);
db.mx_videoinfo = require("./mx_videoinfo.model.js")(sequelize, Sequelize);
db.mx_videotrending = require("./mx_videotrending.model.js")(sequelize, Sequelize);
db.ru_videoinfo = require("./ru_videoinfo.model.js")(sequelize, Sequelize);
db.ru_videotrending = require("./ru_videotrending.model.js")(sequelize, Sequelize);

module.exports = db;