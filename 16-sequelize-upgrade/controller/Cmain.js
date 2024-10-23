const { Op } = require("sequelize");
const { Player, profile, Team } = require("../models/index");
const { search } = require("../routes");

exports.index = (req, res) => {
  res.render("index");
};

exports.getPlayers = async (req, res) => {
  try {
    const { count } = req.query;
    console.log(count);
    const Players = await Player.findAll();
    res.send(Players);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.getPlayer = async (req, res) => {
  try {
    const Players = await Player.findOne({
      where: { player_id: req.params.player_id },
    });
    res.send(Players);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.postPlayer = async (req, res) => {
  try {
    const { name, age, team_id } = req.body;
    const newPlayers = await Player.create({
      name,
      age,
      team_id,
    });
    res.send(newPlayers);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.patchPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const { team_id } = req.body;
    const newPlayers = await Player.update(
      {
        team_id,
      },
      { where: { player_id } }
    );
    res.send(newPlayers);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const isDeleted = await Player.destroy({ where: { player_id } });
    if (isDeleted) {
      res.send("yes");
    } else {
      res.send("no");
    }
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};

exports.getTeams = async (req, res) => {
  try {
    const { sort, search } = req.query;
    let teams;

    if (sort == "name_asc") {
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        order: [["name", "asc"]],
      });
    } else if (search) {
      //search key에 대한 값이 있다면....
      teams = await Team.findAll({
        attributes: ["team_id", "name"],
        where: {
          name: { [Op.like]: `%${search}%` },
        },
      });
    } else {
      teams = await Team.findAll({ attributes: ["team_id", "name"] });
    }
    res.send(teams);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};
exports.getTeamPlayers = async (req, res) => {
  try {
    const { team_id } = req.params;
    const teamplayers = await Team.findOne({
      where: { team_id },
      include: [{ model: Player }], //join이랑 같은 의미
    });
    res.send(teamplayers);
  } catch (err) {
    console.error(err);
    res.send("Internal Server Error!");
  }
};
