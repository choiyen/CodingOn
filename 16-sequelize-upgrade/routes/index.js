const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");
const { route } = require("../../16-sequelize (1)/routes");
//localhost: PORT/ 기본주소
router.get("/", controller.index);

//~~~~~~~~ 선수 관련 API ~~~~~~~~~~~
// Get /player - 전체 선수 조회.
router.get("/players", controller.getPlayers);

// Get /players/:Playerid
router.get("/players/:player_id", controller.getPlayer);

//Post . players 선수 추가
router.post("/players", controller.postPlayer);

//PATCH  {{server}}/players/{{player_id}}/team
router.patch("/players/:player_id/team", controller.patchPlayer);

//DELETE /players/:player_id
router.delete("/players/:player_id", controller.deletePlayer);

//~~~~~~~~ 팀 관련 API ~~~~~~~~~~~
// Get /teams
router.get("/teams", controller.getTeams);

//Get /team/:team_id/players
router.get("/teams/:team_id/players", controller.getTeamPlayers);
module.exports = router;

//
