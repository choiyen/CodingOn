const express = require("express");
const Controller = require("../controller/Cmain");

const router = express.Router();

//localhost : PORT/
//[Before]
// router.get("/", (req,res) => {
//   res.render("index");
// })
//[After]
// => Controller 사용으로 바꿔줌.
// 경로를 controller와 연결지어 사용 가능
router.get("/", Controller.main);
router.post("/ports", Controller.ports);

// GET /comment/:id
// 라우터 주소에 매개변수 기능 존재함.
// (참고) 와일드 카드 역할을 하기 때문에 일반 라우터보다 뒤에 위치해야 한다.
// 그렇게 해야 일반 라우터를 방해하지 않는다.
// req.query vs req.params
// req.query : 쿼리 스트링(?key=value&key=value)
// /comment/1 ~ /comment/(숫자 아무거나)를 전부 처리한다.

//module.exports를 통해서 router를 등록해줘야 다른 모듈에서 사용 가능함.
module.exports = router;

//app.js -> route에 접속 -> route가 controller에 접속해서 페이지를 찾음.
