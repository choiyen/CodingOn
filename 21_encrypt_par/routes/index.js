const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 기본주소 : localhost:PORT/

// GET /메인페이지 접속
router.get("/", controller.main);

//GET /로그인 페이지 접속
router.get("/login", controller.login);

// GET /회원가입페이지 접속
router.get("/insert", controller.insert);

// POST /회원가입페이지에서 수행
router.post("/insert", controller.insertlogin);

// POST /로그인 페이지에서 profile 페이지로 데이터 보냄.
router.post("/loginsuess", controller.loginsuess);

router.get("/profile", controller.profile);

router.post("/verify", controller.verify);

module.exports = router;
