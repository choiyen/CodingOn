const { where } = require("sequelize");
const models = require("../models/index");
const User = require("../models/User");
const user = models.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const SECRET = "9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqV";

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
const profile = async (req, res) => {
  res.render("profile");
};
const loginsuess = async (req, res) => {
  const { id, Pw } = req.body;
  const data = await user.findOne({
    where: {
      userid: id,
    },
  });
  if (data) {
    const crypt = bcrypt.compareSync(Pw, data.pw);
    if (crypt) {
      console.log("ddfaf");
      console.log(data.name);
      const token = jwt.sign({ id }, SECRET);
      res.json({ isSuccess: true, userInfo: data, token });
    } else {
      console.log("ddasff");
      res.json({
        isSuccess: false,
        message: "맞는 아이디이지만, 비밀번호가 틀렸습니다.",
      });
    }
  } else {
    res.json({ isSuccess: false, message: "해당 아이디의 고객이 없습니다." });
  }
};

const verify = async (req, res) => {
  if (req.headers.authorization) {
    const headers = req.headers.authorization;
    console.log(headers);
    const [bearer, token] = headers.split(" "); // ['Bearer', 'token']

    try {
      const result = jwt.verify(token, SECRET);
      console.log(result); // { id: 'banana', iat: 1730078415 }

      const data = await user.findOne({
        where: {
          userid: result.id,
        },
      });

      if (data != null) {
        res.json({ result: true, userInfo: data });
      } else {
        return res.status(403).json({ result: false, message: "검증 실패" });
      }
    } catch (error) {
      console.log(error);
      return res.status(403).json({ result: false, message: "검증 실패" });
    }
  } else {
    res.redirect("/login");
  }
};

module.exports = {
  main,
  login,
  insert,
  insertlogin,
  loginsuess,
  profile,
  verify,
};
