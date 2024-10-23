const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 기본주소 : localhost:PORT/user/

// GET /user/signup - 회원가입 페이지
router.get("/signup", controller.get_signup);
// GET /user/signin - 로그인 페이지
router.get("/signin", controller.get_signin);
// GET /user/profile - 프로필 페이지
router.get("/profile/:id", controller.get_profile);

// POST /user/signup - 회원가입 요청
router.post("/signup", controller.post_signup);
// POST /user/signin - 로그인 요청
router.post("/signin", controller.post_signin);

// PATCH /user/profile/edit - 프로필 페이지 수정
router.patch("/profile/edit", controller.edit_profile);
// DELETE /user/profile/delete - 프로필 페이지 탈퇴
router.delete("/profile/delete", controller.delete_profile);
module.exports = router;
