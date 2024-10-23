/**
 * player 모델을 정의하는 함수
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const TeamModel = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "team",
    {
      team_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
module.exports = TeamModel;
