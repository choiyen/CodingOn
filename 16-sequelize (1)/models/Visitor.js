// @param {import('sequelize').Sequelize} Sequelize : sequelize 라이브러리에서 Sequelize 클래스를 가져와서 명시
/**
 * visitor 모델을 정의하는 함수
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const Visitor = (Sequelize, DataTypes) => {
  // Sequelize.define(param1, param2, param3)
  // param1: 모델 이름 설정
  // param2: 컬럼 정의
  // param3: 모델 옵션 정의
  return Sequelize.define(
    "visitor",
    {
      id: {
        // id int not null primary key auto_increment,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name varchar(10) not null,
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment mediumtext
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor2", // 실제 DB 테이블 이름 명시, 값을 안주면 param1 + s 값으로 테이블 생성
      freezeTableName: true, // 모델 이름 그대로 테이블 이름 고정
      timestamps: false,
      // - 데이터가 추가되고 수정된 시간을 자동으로 컬럼으로 만들어서 기록함
    }
  );
};

module.exports = Visitor;

//Visitor.js -> index.js -> Controller -> app.js
