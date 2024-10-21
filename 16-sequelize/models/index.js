const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// sequelize 객체 선언 시 매개변수로 다음 정보를 받음 : 데이터베이스명, 사용자, 비밀번호, 정보 전체를 넘겨줌.

db.Visitor = require("./Visitor")(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
