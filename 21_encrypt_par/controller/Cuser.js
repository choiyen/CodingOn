const { where } = require("sequelize");
const models = require("../models/index");
const User = require("../models/User");
const user = models.User;
const bcrypt = require("bcrypt");
const saltRounds = 10;

// GET /메인페이지 접속
const main = (req, res) => {
  res.render("index");
};

//로그인 페이지로 이동/GET
const login = (req, res) => {
  res.render("login");
};

//GET/ 회원가입 페이지 접속
const insert = (req, res) => {
  res.render("insert");
};

//POST//회원가입 수행
const insertlogin = async (req, res) => {
  const { userid, name, Pw } = req.body;
  const encryptpassword = bcrypt.hashSync(Pw, saltRounds);
  const userInfo = {
    userid: userid,
    pw: encryptpassword,
    name: name,
  };
  const member = await user.create(userInfo);

  console.log("생성된 유저 : ", member);
  res.json({ result: true, userInfo: userInfo });
};

const loginsuess = async (req, res) => {
  const { id } = req.body;
  const data = await loginfun.selectlogin(id);
  //console.log(data);
  if (data.length == 0) {
    res.json({ isSuccess: false }); // 유저가 존재하지 않은 상황은 에러가 아님.
  } else {
    res.json({ userInfo: data, isSuccess: true });
  }
};

const duplication = async (req, res) => {
  const { id } = req.body;
  const data = await loginfun.duplication(id);
  if (data.length !== 0) {
    res.json({ userInfo: data, isSuccess: true });
  } else {
    res.json({ isSuccess: false });
  }
};

module.exports = {
  main,
  login,
  insert,
  insertlogin,
  loginsuess,
  duplication,
};
