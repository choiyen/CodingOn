const express = require("express");
const app = express();
const PORT = 8000;
const router = require("./routes");
const { sequelize } = require("./models");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

sequelize
  .sync({ force: false }) // database 관련 옵션 false면 데이터베이스 있을 경우 생성 작업 건너뜀.
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
