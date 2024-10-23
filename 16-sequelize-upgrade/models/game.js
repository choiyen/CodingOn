/**
 * player 모델을 정의하는 함수
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const GameModel = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "game",
    {
      game_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      place: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
module.exports = GameModel;
