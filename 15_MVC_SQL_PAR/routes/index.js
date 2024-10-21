const express = require("express");
const router = express.Router();
const controller = require("../controller/Clogin");

// 기본주소 : localhost:PORT/

// GET /메인페이지 접속
router.get("/", controller.main);

// GET /회원가입페이지 접속
router.get("/login", controller.login);

// POST /회원가입페이지에서 수행
router.post("/login", controller.insertlogin);

// POST /로그인 페이지에서 profile 페이지로 데이터 보냄.
router.post("/loginsuess", controller.loginsuess);

//POST /로그인 페이지에서 id에 대한 중복 확인
router.post("/duplication", controller.duplication);

//PATCH /login //회원정보 수정
router.patch("/login", controller.patchlogin);

//DELETE /login //회원정보 수정
router.delete("/login", controller.deletelogin);

//router.get("/profile", controller.profile);

//POST //수정 정보를 취소할 시 원래 있던 정보로 갱신
router.post("/Cancle", controller.cancle);

//POST 방식으로 proflie에 값 전달로 변경
router.post("/profile", controller.profile1);

router.get("/updatelogin", controller.profile);
router.get("/deletelogin", controller.profile);

//PATCH /visitor //회원정보 수정
//router.patch("/login", controller.patch_login);

//DELETE / visitor //회원정보 삭제
//router.delete("/login", controller.delete_login);

module.exports = router;

//다시 해야 하는 것.
//profile에서 갱신 취소 버튼이랑 update 시도 시 갱신된 정보가 떠야 함.
//value값을 변경 시키는 코드 필요.
