const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// 기본주소 : localhost:PORT/

// GET /
router.get("/", controller.main);

// GET /visitors
router.get("/visitors", controller.get_visitors);

// POST /visitor
router.post("/visitor", controller.post_visitor);

//GET /visitor - 하나를 조회해오는 것.
router.get("/visitor", controller.get_visitor); //req.query로 들어오는 값을 처리.

router.get("/visitor/:id", controller.get_visitor); //req.params로 들어오는 값.

//PATCH /visitor
router.patch("/visitor", controller.patch_visitor);

//DELETE / visitor
router.delete("/visitor", controller.delete_visitor);

module.exports = router;
